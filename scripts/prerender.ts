/**
 * Build-time prerenderer for ai4inclusion.org
 *
 * Runs AFTER `vite build`:
 *   1. Boots a local static server against dist/
 *   2. Launches headless Chromium via Puppeteer
 *   3. Visits every public route, waits for React to hydrate + lazy chunks to render
 *   4. Writes the fully-rendered HTML to dist/<route>/index.html
 *
 * After this runs, `curl https://ai4inclusion.org/about` returns real <h1>/<p> content
 * instead of just the SPA shell — provided the host serves the per-route file before
 * the SPA fallback. See netlify.toml.
 */

import { createServer } from "http";
import { mkdirSync, writeFileSync, readFileSync, existsSync, statSync } from "fs";
import { resolve, join, extname } from "path";
import { AddressInfo } from "net";
import puppeteer, { Browser } from "puppeteer";

// Keep this list in sync with <Route> entries in src/App.tsx and public/sitemap.xml.
const ROUTES = [
  "/",
  "/about",
  "/blogs",
  "/building-blocks",
  "/try-voicera",
  "/adopters",
  "/get-involved",
  "/get-in-touch",
  "/events",
  "/registrations",
  "/engagements",
  "/contact",
  "/privacy",
  "/terms",
];

const DIST = resolve("dist");
const INDEX_HTML = readFileSync(join(DIST, "index.html"), "utf-8");

// ----- Tiny static server (no extra deps) -----

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".map": "application/json; charset=utf-8",
};

function startServer(rootDir: string): Promise<{ port: number; close: () => void }> {
  return new Promise((resolveServer) => {
    const server = createServer((req, res) => {
      try {
        const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
        let filePath = join(rootDir, urlPath);

        // SPA fallback during prerender: any unknown path returns index.html
        // so React Router can take over.
        if (!existsSync(filePath) || (existsSync(filePath) && isDir(filePath))) {
          const indexCandidate = join(filePath, "index.html");
          if (existsSync(indexCandidate) && !isDir(indexCandidate)) {
            filePath = indexCandidate;
          } else {
            filePath = join(rootDir, "index.html");
          }
        }

        const ext = extname(filePath).toLowerCase();
        res.writeHead(200, { "content-type": MIME[ext] || "application/octet-stream" });
        res.end(readFileSync(filePath));
      } catch (err) {
        res.writeHead(500);
        res.end(String(err));
      }
    });

    server.listen(0, "127.0.0.1", () => {
      const { port } = server.address() as AddressInfo;
      resolveServer({ port, close: () => server.close() });
    });
  });
}

function isDir(p: string): boolean {
  try {
    return statSync(p).isDirectory();
  } catch {
    return false;
  }
}

// ----- Prerender a single route -----

async function prerenderRoute(browser: Browser, baseURL: string, route: string): Promise<string> {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  // Suppress noisy app logs but surface real errors.
  page.on("pageerror", (err) => console.error(`[${route}] pageerror:`, err.message));

  const url = `${baseURL}${route}`;
  await page.goto(url, { waitUntil: "networkidle0", timeout: 60_000 });

  // Wait for React shell to mount.
  await page.waitForSelector("#root nav", { timeout: 30_000 }).catch(() => {});

  // Home + several pages defer below-the-fold sections by ~1.2s via requestIdleCallback.
  // Give them time to render so the prerendered HTML contains the full body.
  await new Promise((r) => setTimeout(r, 2000));

  // Strip the build-time preload skeleton (in case it's still in DOM) and capture HTML.
  const html = await page.evaluate(() => {
    document.getElementById("preload-nav")?.remove();
    document.getElementById("preload-skeleton")?.remove();
    // Serialize the live DOM (post-hydration).
    return "<!doctype html>\n" + document.documentElement.outerHTML;
  });

  await page.close();
  return html;
}

// ----- Main -----

async function main() {
  if (!existsSync(DIST)) {
    console.error("dist/ not found. Run `vite build` first.");
    process.exit(1);
  }

  const { port, close } = await startServer(DIST);
  const baseURL = `http://127.0.0.1:${port}`;
  console.log(`prerender: serving dist/ at ${baseURL}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  let ok = 0;
  let failed = 0;

  for (const route of ROUTES) {
    try {
      const html = await prerenderRoute(browser, baseURL, route);

      const outDir = route === "/" ? DIST : join(DIST, route.replace(/^\//, ""));
      mkdirSync(outDir, { recursive: true });
      const outFile = join(outDir, "index.html");
      writeFileSync(outFile, html, "utf-8");

      const sizeKB = (html.length / 1024).toFixed(1);
      console.log(`  ✓ ${route.padEnd(20)} → ${outFile.replace(DIST + "/", "")} (${sizeKB} KB)`);
      ok++;
    } catch (err) {
      console.error(`  ✗ ${route} failed:`, (err as Error).message);
      // Fall back to writing the SPA shell so the path still resolves.
      const outDir = route === "/" ? DIST : join(DIST, route.replace(/^\//, ""));
      mkdirSync(outDir, { recursive: true });
      writeFileSync(join(outDir, "index.html"), INDEX_HTML, "utf-8");
      failed++;
    }
  }

  await browser.close();
  close();

  console.log(`\nprerender complete: ${ok} ok, ${failed} fallback to shell`);
  if (failed > 0 && process.env.PRERENDER_STRICT === "1") process.exit(1);
}

main().catch((err) => {
  console.error("prerender fatal:", err);
  process.exit(1);
});

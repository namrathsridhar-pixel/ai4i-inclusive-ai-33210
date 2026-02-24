// Lazy route factories — call to trigger chunk download
const routeImports: Record<string, () => Promise<unknown>> = {
  "/about": () => import("@/pages/About"),
  "/blogs": () => import("@/pages/Blogs"),
  "/building-blocks": () => import("@/pages/BuildingBlocks"),
  "/try-voicera": () => import("@/pages/TryVoicERA"),
  "/adopters": () => import("@/pages/Adopters"),
  "/get-involved": () => import("@/pages/GetInvolved"),
  "/get-in-touch": () => import("@/pages/JoinUs"),
  "/events": () => import("@/pages/Events"),
  "/registrations": () => import("@/pages/Registrations"),
  "/engagements": () => import("@/pages/Engagements"),
  "/contact": () => import("@/pages/Contact"),
  "/privacy": () => import("@/pages/Privacy"),
  "/terms": () => import("@/pages/Terms"),
};

const preloaded = new Set<string>();

/** Preload a single route's JS chunk */
export function preloadRoute(path: string) {
  // Strip hash
  const clean = path.split("#")[0];
  if (preloaded.has(clean)) return;
  const loader = routeImports[clean];
  if (loader) {
    preloaded.add(clean);
    loader();
  }
}

/** Preload ALL routes (call during idle) */
export function preloadAllRoutes() {
  Object.keys(routeImports).forEach(preloadRoute);
}

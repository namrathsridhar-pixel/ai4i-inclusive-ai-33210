import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import Navigation from "./components/Navigation";
import PageTransition from "./components/PageTransition";
import RouteLoadingFallback from "./components/RouteLoadingFallback";
import { preloadAllRoutes } from "./lib/route-preloader";
const Footer = lazy(() => import("./components/Footer"));
const LanguageParticles = lazy(() => import("./components/LanguageParticles"));
const ScrollToTopButton = lazy(() => import("./components/ScrollToTopButton"));
const CookieConsentBanner = lazy(() => import("./components/CookieConsentBanner"));
// const AI4IAssistant = lazy(() => import("./components/AI4IAssistant"));

import Home from "./pages/Home";

// Lazy-load non-Home pages to reduce initial JS bundle
const About = lazy(() => import("./pages/About"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BuildingBlocks = lazy(() => import("./pages/BuildingBlocks"));
const Adopters = lazy(() => import("./pages/Adopters"));
const GetInvolved = lazy(() => import("./pages/GetInvolved"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const Events = lazy(() => import("./pages/Events"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Registrations = lazy(() => import("./pages/Registrations"));
const Engagements = lazy(() => import("./pages/Engagements"));
const TryVoicERA = lazy(() => import("./pages/TryVoicERA"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const SITE_URL = "https://ai4inclusion.org";
const DEFAULT_DESCRIPTION =
  "AI4Inclusion is an open Digital Public Good enabling inclusive language AI for translation, speech recognition, and accessibility.";

const PAGE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: "AI4Inclusion – Digital Public Good for Inclusive AI",
    description: DEFAULT_DESCRIPTION,
  },
  "/about": {
    title: "About – AI4Inclusion",
    description: "Learn about AI4Inclusion's mission, the COSS team at IIIT-Bangalore, and our work building sovereign Language AI as a Digital Public Good.",
  },
  "/building-blocks": {
    title: "Building Blocks – AI4Inclusion",
    description: "Explore AI4I building blocks like AI4I-Orchestrate that power sovereign voice AI and inclusive language systems for the public.",
  },
  "/try-voicera": {
    title: "Lets talk to VoiceAI – AI4Inclusion",
    description: "Try the AI4Inclusion sovereign voice AI sandbox and experience inclusive multilingual conversational AI in action.",
  },
  "/events": {
    title: "Events – AI4Inclusion",
    description: "Upcoming and past AI4Inclusion events, workshops, and convenings on inclusive language AI and Digital Public Goods.",
  },
  "/adopters": {
    title: "Adopters – AI4Inclusion",
    description: "Governments, institutions, and organizations adopting AI4Inclusion to build sovereign, inclusive language AI for public systems.",
  },
  "/engagements": {
    title: "Engagements – AI4Inclusion",
    description: "Discover AI4Inclusion's active country engagements and partnerships deploying sovereign Language AI as a Digital Public Good.",
  },
  "/get-involved": {
    title: "Get Involved – AI4Inclusion",
    description: "Partner, contribute, or collaborate with AI4Inclusion to advance inclusive Language AI as a global Digital Public Good.",
  },
  "/get-in-touch": {
    title: "Get in Touch – AI4Inclusion",
    description: "Reach the AI4Inclusion team to discuss collaboration on sovereign voice AI and inclusive language Digital Public Goods.",
  },
  "/registrations": {
    title: "Registrations – AI4Inclusion",
    description: "Register for AI4Inclusion events, panels, and convenings on inclusive language AI for public systems.",
  },
  "/contact": {
    title: "Contact – AI4Inclusion",
    description: "Contact AI4Inclusion at info@ai4inclusion.org for collaboration, adoption, or questions about our Digital Public Good.",
  },
  "/blogs": {
    title: "Blogs – AI4Inclusion",
    description: "Insights, stories, and updates from the AI4Inclusion community on inclusive language AI and Digital Public Goods.",
  },
  "/privacy": {
    title: "Privacy Policy – AI4Inclusion",
    description: "Read the AI4Inclusion privacy policy covering data handling, cookies, and analytics on ai4inclusion.org.",
  },
  "/terms": {
    title: "Terms of Use – AI4Inclusion",
    description: "Terms of Use for ai4inclusion.org, including content licensing under CC BY-SA 4.0 and MIT, and acceptable use.",
  },
};

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  let el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (!el) {
    if (selector.startsWith("link")) {
      el = document.createElement("link");
      const relMatch = selector.match(/rel="([^"]+)"/);
      if (relMatch) (el as HTMLLinkElement).rel = relMatch[1];
    } else {
      el = document.createElement("meta");
      const nameMatch = selector.match(/name="([^"]+)"/);
      const propMatch = selector.match(/property="([^"]+)"/);
      if (nameMatch) (el as HTMLMetaElement).name = nameMatch[1];
      if (propMatch) (el as HTMLMetaElement).setAttribute("property", propMatch[1]);
    }
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const meta = PAGE_META[pathname] || {
      title: "AI4Inclusion – Digital Public Good for Inclusive AI",
      description: DEFAULT_DESCRIPTION,
    };
    const url = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;

    document.title = meta.title;
    setMeta('meta[name="description"]', "content", meta.description);
    setMeta('link[rel="canonical"]', "href", url);
    setMeta('meta[property="og:title"]', "content", meta.title);
    setMeta('meta[property="og:description"]', "content", meta.description);
    setMeta('meta[property="og:url"]', "content", url);

    // Track page view in GA4 for SPA route changes
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-X0CZVDK1KV', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return null;
};

const AppContent = () => {
  const location = useLocation();
  const isTryVoicera = location.pathname === "/try-voicera";
  const [showEnhancements, setShowEnhancements] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => setShowEnhancements(true), 1500);
    return () => window.clearTimeout(id);
  }, []);

  // Preload all route chunks during idle time
  useEffect(() => {
    if (typeof requestIdleCallback !== "undefined") {
      const idleId = requestIdleCallback(() => preloadAllRoutes(), { timeout: 3000 });
      return () => cancelIdleCallback(idleId);
    }
    const tid = window.setTimeout(() => preloadAllRoutes(), 2000);
    return () => window.clearTimeout(tid);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<RouteLoadingFallback />}>
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
          <Route path="/building-blocks" element={<PageTransition><BuildingBlocks /></PageTransition>} />
          <Route path="/try-voicera" element={<PageTransition><TryVoicERA /></PageTransition>} />
          <Route path="/adopters" element={<PageTransition><Adopters /></PageTransition>} />
          <Route path="/get-involved" element={<PageTransition><GetInvolved /></PageTransition>} />
          <Route path="/get-in-touch" element={<PageTransition><JoinUs /></PageTransition>} />
          <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/registrations" element={<PageTransition><Registrations /></PageTransition>} />
          <Route path="/engagements" element={<PageTransition><Engagements /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
      {showEnhancements && (
        <Suspense fallback={null}>
          <LanguageParticles />
          {!isTryVoicera && <Footer />}
          <ScrollToTopButton />
          <CookieConsentBanner />
          {/* <AI4IAssistant /> */}
        </Suspense>
      )}
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
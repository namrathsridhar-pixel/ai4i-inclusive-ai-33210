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
const AI4IAssistant = lazy(() => import("./components/AI4IAssistant"));
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

const PAGE_TITLES: Record<string, string> = {
  "/": "AI4Inclusion – Digital Public Good for Inclusive AI",
  "/about": "About – AI4Inclusion",
  "/building-blocks": "Building Blocks – AI4Inclusion",
  "/try-voicera": "Lets talk to VoiceAI – AI4Inclusion",
  "/events": "Events – AI4Inclusion",
  "/adopters": "Adopters – AI4Inclusion",
  "/engagements": "Engagements – AI4Inclusion",
  "/get-involved": "Get Involved – AI4Inclusion",
  "/get-in-touch": "Get in Touch – AI4Inclusion",
  "/registrations": "Registrations – AI4Inclusion",
  "/contact": "Contact – AI4Inclusion",
  "/blogs": "Blogs – AI4Inclusion",
  "/privacy": "Privacy Policy – AI4Inclusion",
  "/terms": "Terms of Service – AI4Inclusion",
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Update document title based on route
    document.title = PAGE_TITLES[pathname] || "AI4Inclusion – Digital Public Good for Inclusive AI";
    
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
          <AI4IAssistant />
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
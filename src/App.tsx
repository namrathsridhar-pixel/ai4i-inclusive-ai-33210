import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import LanguageParticles from "./components/LanguageParticles";
import ScrollToTopButton from "./components/ScrollToTopButton";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
// import WhoWeAre from "./pages/WhoWeAre"; // Commented for future use
import Blogs from "./pages/Blogs";
import BuildingBlocks from "./pages/BuildingBlocks";
import ComponentCore from "./pages/ComponentCore";
import ComponentObserve from "./pages/ComponentObserve";
import ComponentContribute from "./pages/ComponentContribute";
import ComponentVoiceERA from "./pages/ComponentVoiceERA";
import Adopters from "./pages/Adopters";
import GetInvolved from "./pages/GetInvolved";
import JoinUs from "./pages/JoinUs";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Registrations from "./pages/Registrations";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PAGE_TITLES: Record<string, string> = {
  "/": "AI4Inclusion – Digital Public Good for Inclusive AI",
  "/about": "About – AI4Inclusion",
  "/building-blocks": "Building Blocks – AI4Inclusion",
  "/components/orchestrate": "AI4I-Orchestrate – AI4Inclusion",
  "/components/observe": "AI4I-Observe – AI4Inclusion",
  "/components/contribute": "AI4I-Contribute – AI4Inclusion",
  "/components/voiceera": "VoiceERA – AI4Inclusion",
  "/events": "Events – AI4Inclusion",
  "/adopters": "Adopters – AI4Inclusion",
  "/get-involved": "Get Involved – AI4Inclusion",
  "/get-in-touch": "Get in Touch – AI4Inclusion",
  "/registrations": "Registrations – AI4Inclusion",
  "/contact": "Contact – AI4Inclusion",
  "/blogs": "Blogs – AI4Inclusion",
  "/privacy": "Privacy Policy – AI4Inclusion",
  "/terms": "Terms of Service – AI4Inclusion",
  "/legal/privacy": "Privacy Policy – AI4Inclusion",
  "/legal/terms": "Terms of Service – AI4Inclusion",
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
  return (
    <>
      <ScrollToTop />
      <LanguageParticles />
      <Navigation />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          {/* <Route path="/who-we-are" element={<PageTransition><WhoWeAre /></PageTransition>} /> */} {/* Commented for future use */}
          <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
          <Route path="/building-blocks" element={<PageTransition><BuildingBlocks /></PageTransition>} />
          <Route path="/components/orchestrate" element={<PageTransition><ComponentCore /></PageTransition>} />
          <Route path="/components/observe" element={<PageTransition><ComponentObserve /></PageTransition>} />
          <Route path="/components/contribute" element={<PageTransition><ComponentContribute /></PageTransition>} />
          <Route path="/components/voiceera" element={<PageTransition><ComponentVoiceERA /></PageTransition>} />
          <Route path="/adopters" element={<PageTransition><Adopters /></PageTransition>} />
          <Route path="/get-involved" element={<PageTransition><GetInvolved /></PageTransition>} />
          <Route path="/get-in-touch" element={<PageTransition><JoinUs /></PageTransition>} />
          <Route path="/events" element={<PageTransition><Events /></PageTransition>} />
          <Route path="/registrations" element={<PageTransition><Registrations /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/terms" element={<PageTransition><Terms /></PageTransition>} />
          <Route path="/legal/privacy" element={<PageTransition><Privacy /></PageTransition>} />
          <Route path="/legal/terms" element={<PageTransition><Terms /></PageTransition>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <Footer />
      <ScrollToTopButton />
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

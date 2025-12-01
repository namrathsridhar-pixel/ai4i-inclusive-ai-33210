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
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import About from "./pages/About";
import WhoWeAre from "./pages/WhoWeAre";
import Blogs from "./pages/Blogs";
import BuildingBlocks from "./pages/BuildingBlocks";
import ComponentCore from "./pages/ComponentCore";
import ComponentObserve from "./pages/ComponentObserve";
import ComponentContribute from "./pages/ComponentContribute";
import Adopters from "./pages/Adopters";
import GetInvolved from "./pages/GetInvolved";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <LanguageParticles />
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/who-we-are" element={<PageTransition><WhoWeAre /></PageTransition>} />
            <Route path="/blogs" element={<PageTransition><Blogs /></PageTransition>} />
            <Route path="/building-blocks" element={<PageTransition><BuildingBlocks /></PageTransition>} />
            <Route path="/components/core" element={<PageTransition><ComponentCore /></PageTransition>} />
            <Route path="/components/observe" element={<PageTransition><ComponentObserve /></PageTransition>} />
            <Route path="/components/contribute" element={<PageTransition><ComponentContribute /></PageTransition>} />
            <Route path="/adopters" element={<PageTransition><Adopters /></PageTransition>} />
            <Route path="/get-involved" element={<PageTransition><GetInvolved /></PageTransition>} />
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

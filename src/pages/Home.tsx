import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import LanguageNetworkHero from "@/components/home/LanguageNetworkHero";

// Lazy-load below-the-fold sections (including FeatureBlock + AnimatedVisuals which pull in framer-motion)
const BuildingBlocksSection = lazy(() => import("@/components/home/BuildingBlocksSection"));
const KeyCapabilities = lazy(() => import("@/components/home/KeyCapabilities"));
const MediaStrip = lazy(() => import("@/components/home/MediaStrip"));
const QuickStart = lazy(() => import("@/components/home/QuickStart"));
const ResourcesCommunity = lazy(() => import("@/components/home/ResourcesCommunity"));
const SolarSystemVisualization = lazy(() => import("@/components/home/SolarSystemVisualization"));
const EventPromoBanner = lazy(() => import("@/components/EventPromoBanner"));
const VoiceraInterestForm = lazy(() => import("@/components/VoiceraInterestForm"));
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [voiceraFormOpen, setVoiceraFormOpen] = useState(false);
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    if (searchParams.get("showInterest") === "true") {
      setVoiceraFormOpen(true);
      searchParams.delete("showInterest");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  useEffect(() => {
    const showSections = () => setShowDeferredSections(true);

    if (typeof requestIdleCallback !== "undefined") {
      const idleId = requestIdleCallback(showSections, { timeout: 2000 });
      return () => cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(showSections, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Event Promo Banner Modal */}
      {showDeferredSections && (
        <Suspense fallback={null}>
          <EventPromoBanner />
        </Suspense>
      )}

      {/* VoicERA Interest Dialog */}
      <Dialog open={voiceraFormOpen} onOpenChange={setVoiceraFormOpen}>
        <DialogContent className="max-w-lg p-0 bg-background overflow-auto max-h-[90vh]" aria-describedby={undefined}>
          <VisuallyHidden>
            <DialogTitle>Show Interest in VoicERA</DialogTitle>
          </VisuallyHidden>
          <div className="p-1">
            <Suspense fallback={null}><VoiceraInterestForm /></Suspense>
          </div>
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <LanguageNetworkHero />

      {showDeferredSections && (
        <>
          {/* Feature & Offerings Grid — lazy-loaded so framer-motion defers */}
          <Suspense fallback={null}>
            <BuildingBlocksSection />
          </Suspense>

          <Suspense fallback={null}>
            <SolarSystemVisualization />
            <KeyCapabilities />
            <MediaStrip />
            <QuickStart />
            <ResourcesCommunity />
          </Suspense>
        </>
      )}
    </div>
  );
};

export default Home;

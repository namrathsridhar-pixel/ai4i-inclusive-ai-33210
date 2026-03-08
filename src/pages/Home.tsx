import { useState, useEffect, lazy, Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import LanguageNetworkHero from "@/components/home/LanguageNetworkHero";

// Lazy-load below-the-fold sections
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
        <Suspense fallback={null}>
          {/* Impact Narrative — bold statement + animated counters */}
          <ImpactNarrative />

          {/* How It Works Pipeline */}
          <SectionDivider variant="wave" from="hsl(0 0% 100%)" to="hsl(210 40% 98%)" />
          <HowItWorksPipeline />

          {/* Building Blocks */}
          <SectionDivider variant="wave" from="hsl(210 40% 98%)" to="hsl(0 0% 100%)" flip />
          <BuildingBlocksSection />

          {/* Solar System Visualization */}
          <SectionDivider variant="angle" from="hsl(0 0% 100%)" to="#0a1628" />
          <SolarSystemVisualization />
          <SectionDivider variant="angle" from="#0a1628" to="hsl(210 40% 98%)" />

          {/* Key Capabilities */}
          <KeyCapabilities />

          {/* Media Strip */}
          <MediaStrip />

          {/* Quick Start */}
          <SectionDivider variant="wave" from="hsl(210 40% 96%)" to="hsl(0 0% 100%)" flip />
          <QuickStart />

          {/* Resources & Community */}
          <ResourcesCommunity />
        </Suspense>
      )}
    </div>
  );
};

export default Home;

import { useState, useEffect, lazy, Suspense } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { Globe, BarChart3, Users, Phone } from "lucide-react";
import FeatureBlock from "@/components/home/FeatureBlock";
import LanguageNetworkHero from "@/components/home/LanguageNetworkHero";
import { WaveformAnimation, ChartAnimation, MicrophoneAnimation, GlobeAnimation } from "@/components/home/AnimatedVisuals";

// Lazy-load below-the-fold sections to reduce initial main-thread work
const KeyCapabilities = lazy(() => import("@/components/home/KeyCapabilities"));
const MediaStrip = lazy(() => import("@/components/home/MediaStrip"));
const QuickStart = lazy(() => import("@/components/home/QuickStart"));
const ResourcesCommunity = lazy(() => import("@/components/home/ResourcesCommunity"));
const SolarSystemVisualization = lazy(() => import("@/components/home/SolarSystemVisualization"));
const EventPromoBanner = lazy(() => import("@/components/EventPromoBanner"));
const VoiceraInterestForm = lazy(() => import("@/components/VoiceraInterestForm"));
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

const featureBlocks = [{
  title: "AI4I-Orchestrate",
  description: "A unified runtime layer that routes inference requests to the best-fit models based on language, domain, cost, and policy. It provides a single API surface for all Language AI capabilities.",
  bullets: ["Multi-model inference routing with fallback chains", "Policy-based model selection and governance", "Cost-aware routing with SLA enforcement", "Centralized observability and metering for governed runtime orchestration"],
  icon: <Globe className="text-primary-foreground" size={24} />,
  animation: <GlobeAnimation />,
  videoUrl: "https://www.youtube.com/embed/jEuKOasl0ws",
  githubUrl: "https://github.com/COSS-India/ai4i-core",
  discussUrl: "https://github.com/COSS-India/ai4i-core/discussions",
  blockLink: "/building-blocks#ai4i-orchestrate"
}, {
  title: "AI4I-Observe",
  description: "A unified observability and feedback layer that monitors Language AI model performance in production. It captures telemetry, detects quality drift, and provides actionable insights.",
  bullets: ["Real-time telemetry and event streaming", "Quality drift detection and alerting", "Performance dashboards and analytics", "Structured feedback signals feeding evaluation and improvement pipelines"],
  icon: <BarChart3 className="text-primary-foreground" size={24} />,
  animation: <ChartAnimation />,
  videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
  githubUrl: "https://github.com/COSS-India/observe",
  discussUrl: "https://github.com/COSS-India/observe/discussions",
  blockLink: "/building-blocks#observe"
}, {
  title: "AI4I-Contribute",
  description: "A data ingestion and annotation building block that enables large-scale, participatory creation of high-quality language datasets across regions, dialects, and domains. It operationalizes inclusive data creation as a reusable Digital Public Good.",
  bullets: ["Multi-modal, mobile-friendly data collection across speech, text, image, and video", "Built-in human-in-the-loop validation and quality assurance workflows", "Targeted, domain-aware data collection and enrichment", "Language, dialect, and accent coverage tracking"],
  icon: <Users className="text-primary-foreground" size={24} />,
  animation: <MicrophoneAnimation />,
  videoUrl: "https://www.youtube.com/embed/_0KqImO7GMs",
  githubUrl: "https://github.com/COSS-India/ai4i-contribute",
  discussUrl: "https://github.com/COSS-India/ai4i-contribute/discussions",
  blockLink: "/building-blocks#contribute"
}, {
  title: "AI4I-VoicERA",
  description: "India's sovereign Voice Operating System, a production-grade, open-source platform for citizen-scale, real-time, multilingual voice services with full on-premises data sovereignty.",
  bullets: ["Real-time streaming STT, LLM, and TTS pipeline", "Indic-first with native code-switching support", "On-premises Voice-in-a-Box deployment", "SIP / PSTN / VoIP telephony integration"],
  icon: <Phone className="text-primary-foreground" size={24} />,
  animation: <WaveformAnimation />,
  videoUrl: "https://www.youtube.com/embed/PFPzxniv1p8",
  githubUrl: "https://github.com/COSS-India/voicera_mono_repository",
  blockLink: "/building-blocks#voicera"
}];

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [voiceraFormOpen, setVoiceraFormOpen] = useState(false);

  useEffect(() => {
    if (searchParams.get("showInterest") === "true") {
      setVoiceraFormOpen(true);
      searchParams.delete("showInterest");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  return <div className="min-h-screen relative">
       {/* Event Promo Banner Modal */}
       <Suspense fallback={null}><EventPromoBanner /></Suspense>

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

      {/* Feature & Offerings Grid */}
      <section className="py-20 px-4" id="building-blocks">
        <div className="container mx-auto">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Explore Building Blocks
              <motion.span className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto" initial={{
              width: 0
            }} whileInView={{
              width: "180px"
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }} />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Modular, open-source components that work together to power the complete Language AI lifecycle
            </p>
          </motion.div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {featureBlocks.map((block, i) => (
              <FeatureBlock
                key={block.title}
                {...block}
                reversed={i % 2 === 1}
                extraAction={
                  block.title === "AI4I-VoicERA" ? (
                    <button
                      onClick={() => setVoiceraFormOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      Show Interest
                    </button>
                  ) : undefined
                }
              />
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={null}>
        {/* What AI4Inclusion Enables - Solar System Visualization */}
        <SolarSystemVisualization />

        {/* Key Capabilities Mind-Map */}
        <KeyCapabilities />

        {/* Media Strip */}
        <MediaStrip />

        {/* Quick Start / Adoption Paths */}
        <QuickStart />

        {/* Resources & Community */}
        <ResourcesCommunity />
      </Suspense>
    </div>;
};
export default Home;
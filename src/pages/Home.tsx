import { motion } from "framer-motion";
import { Globe, BarChart3, Users } from "lucide-react";
import FeatureBlock from "@/components/home/FeatureBlock";
import ArchitectureTeaser from "@/components/home/ArchitectureTeaser";
import KeyCapabilities from "@/components/home/KeyCapabilities";
import MediaStrip from "@/components/home/MediaStrip";
import QuickStart from "@/components/home/QuickStart";
import TrustStrip from "@/components/home/TrustStrip";
import ResourcesCommunity from "@/components/home/ResourcesCommunity";
import SolarSystemVisualization from "@/components/home/SolarSystemVisualization";
import LanguageNetworkHero from "@/components/home/LanguageNetworkHero";
import { WaveformAnimation, ChartAnimation, MicrophoneAnimation, GlobeAnimation } from "@/components/home/AnimatedVisuals";
const featureBlocks = [{
  title: "AI4I-Orchestrate",
  description: "A unified runtime layer that routes inference requests to the best-fit models based on language, domain, cost, and policy. It provides a single API surface for all Language AI capabilities.",
  bullets: ["Multi-model inference routing with fallback chains", "Policy-based model selection and governance", "Cost-aware routing with SLA enforcement", "Ensemble support for improved accuracy"],
  icon: <Globe className="text-primary-foreground" size={24} />,
  animation: <GlobeAnimation />,
  videoUrl: "https://www.youtube.com/embed/5zLdk3-gvYU",
  githubUrl: "https://github.com/COSS-India/ai4i-core",
  discussUrl: "https://github.com/COSS-India/ai4i-core/discussions",
  blockLink: "/building-blocks#ai4i-core"
}, {
  title: "AI4I-Observe",
  description: "A comprehensive observability platform that monitors Language AI model performance in production. It captures telemetry, detects quality drift, and provides actionable insights.",
  bullets: ["Real-time telemetry and event streaming", "Quality drift detection and alerting", "Performance dashboards and analytics", "Evidence-based retraining recommendations"],
  icon: <BarChart3 className="text-primary-foreground" size={24} />,
  animation: <ChartAnimation />,
  videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
  githubUrl: "https://github.com/COSS-India/observe",
  discussUrl: "https://github.com/COSS-India/observe/discussions",
  blockLink: "/building-blocks#observe"
}, {
  title: "AI4I-Contribute",
  description: "A community-powered application for collecting, validating, and improving language datasets across regions, accents, and domains. It turns data creation into a participatory public good.",
  bullets: ["Mobile-first offline data collection", "Built-in validation workflows", "Domain-specific campaign support", "Dialect and accent coverage tracking"],
  icon: <Users className="text-primary-foreground" size={24} />,
  animation: <MicrophoneAnimation />,
  videoUrl: "https://www.youtube.com/embed/_0KqImO7GMs",
  githubUrl: "https://github.com/COSS-India/ai4i-contribute",
  discussUrl: "https://github.com/COSS-India/ai4i-contribute/discussions",
  blockLink: "/building-blocks#contribute"
}];
const Home = () => {
  return <div className="min-h-screen">
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
            {featureBlocks.map((block, i) => <FeatureBlock key={block.title} {...block} reversed={i % 2 === 1} />)}
          </div>
        </div>
      </section>

      {/* What AI4Inclusion Enables - Solar System Visualization */}
      <SolarSystemVisualization />

      {/* Architecture Teaser */}
      <ArchitectureTeaser />

      {/* Key Capabilities Grid */}
      <KeyCapabilities />

      {/* Media Strip */}
      <MediaStrip />

      {/* Quick Start / Adoption Paths */}
      <QuickStart />

      {/* Trust & Governance Strip */}
      <TrustStrip />

      {/* Resources & Community */}
      <ResourcesCommunity />
    </div>;
};
export default Home;
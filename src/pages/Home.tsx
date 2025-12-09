import { motion } from "framer-motion";
import { Globe, BarChart3, Users, ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { AnimatedHeroBanner } from "@/components/AnimatedHeroBanner";
import OfferingTile from "@/components/home/OfferingTile";
import CapabilityMatrix from "@/components/home/CapabilityMatrix";
import FeatureBlock from "@/components/home/FeatureBlock";
import ArchitectureTeaser from "@/components/home/ArchitectureTeaser";
import KeyCapabilities from "@/components/home/KeyCapabilities";
import MediaStrip from "@/components/home/MediaStrip";
import QuickStart from "@/components/home/QuickStart";
import TrustStrip from "@/components/home/TrustStrip";
import ResourcesCommunity from "@/components/home/ResourcesCommunity";
import AdopterLogos from "@/components/home/AdopterLogos";
import { WaveformAnimation, ChartAnimation, MicrophoneAnimation, GlobeAnimation } from "@/components/home/AnimatedVisuals";
const offerings = [{
  icon: <Globe className="text-primary-foreground" size={24} />,
  title: "AI4I Orchestrate",
  subtitle: "Runtime & Governance",
  summary: "Single API, model routing, policy control.",
  bullets: ["Unified API for all language models", "Intelligent routing based on domain", "Policy enforcement and SLA management"],
  link: "/building-blocks#ai4i-core"
}, {
  icon: <BarChart3 className="text-primary-foreground" size={24} />,
  title: "AI4I Observe",
  subtitle: "Observability & Governance",
  summary: "Telemetry, quality, drift and dashboards.",
  bullets: ["Real-time monitoring and alerting", "Quality drift detection", "Performance analytics dashboards"],
  link: "/building-blocks#observe"
}, {
  icon: <Users className="text-primary-foreground" size={24} />,
  title: "AI4I Contribute",
  subtitle: "Community Data",
  summary: "Crowdsource and validate speech datasets.",
  bullets: ["Mobile-first data collection", "Built-in validation workflows", "Community governance tools"],
  link: "/building-blocks#contribute"
}];
const featureBlocks = [{
  title: "AI4I-Orchestrate",
  description: "A unified runtime layer that routes inference requests to the best-fit models based on language, domain, cost, and policy. It provides a single API surface for all Language AI capabilities.",
  bullets: ["Multi-model inference routing with fallback chains", "Policy-based model selection and governance", "Cost-aware routing with SLA enforcement", "Ensemble support for improved accuracy"],
  icon: <Globe className="text-primary-foreground" size={24} />,
  animation: <GlobeAnimation />,
  videoUrl: "https://www.youtube.com/embed/5zLdk3-gvYU",
  docsUrl: "https://github.com/COSS-India/ai4i-core",
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
  docsUrl: "https://github.com/COSS-India/observe",
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
  docsUrl: "https://github.com/COSS-India/ai4i-contribute",
  githubUrl: "https://github.com/COSS-India/ai4i-contribute",
  discussUrl: "https://github.com/COSS-India/ai4i-contribute/discussions",
  blockLink: "/building-blocks#contribute"
}];
const Home = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-4 bg-[#0a1628] overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(216, 100%, 32%)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="hsl(205, 100%, 38%)" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            {[...Array(8)].map((_, i) => <motion.line key={i} x1={`${i * 15}%`} y1="0" x2={`${100 - i * 10}%`} y2="100%" stroke="url(#lineGradient)" strokeWidth="1" initial={{
            pathLength: 0,
            opacity: 0
          }} animate={{
            pathLength: 1,
            opacity: [0.1, 0.3, 0.1]
          }} transition={{
            pathLength: {
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            },
            opacity: {
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              repeatDelay: 1
            }
          }} />)}
          </svg>
        </div>

        {/* Language glyph particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {["अ", "க", "অ", "ا", "语", "A", "आ", "ங", "খ", "ب"].map((char, i) => <motion.span key={i} className="absolute text-white/10 font-heading select-none" style={{
          left: `${10 + i * 9}%`,
          top: `${20 + i % 3 * 25}%`,
          fontSize: `${14 + i % 3 * 4}px`
        }} animate={{
          y: [-10, -30, -10],
          opacity: [0.05, 0.15, 0.05]
        }} transition={{
          duration: 4 + i * 0.5,
          repeat: Infinity,
          delay: i * 0.3
        }}>
              {char}
            </motion.span>)}
        </div>

        {/* Ambient blue glow */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
          <div className="absolute inset-0 blur-3xl opacity-60" style={{
          background: "radial-gradient(ellipse 800px 600px at 30% 50%, hsl(210, 100%, 50%, 0.15), hsl(210, 100%, 45%, 0.08) 40%, transparent 70%)"
        }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8
          }} className="pl-4 md:pl-12">
              <motion.h1 className="font-heading font-bold leading-tight text-white" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }}>
                <span className="block text-3xl md:text-4xl leading-tight lg:text-7xl">AI4Inclusion</span>
              </motion.h1>

              <motion.p className="text-lg md:text-xl text-gray-300 mt-6 leading-relaxed max-w-xl" initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.3
            }}>
                AI4Inclusion empowers nations to build their own Language AI DPI from citizen-sourced datasets to public serving orchestration. It enables true digital inclusion in every spoken language.
              </motion.p>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.8,
              delay: 0.4
            }} className="mt-8 flex flex-wrap gap-4">
                <button onClick={() => scrollToSection("building-blocks")} className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-medium">
                  Explore Building Blocks <ArrowDown size={18} />
                </button>
                <button onClick={() => scrollToSection("quick-start")} className="bg-transparent text-white px-6 py-3 rounded-lg font-medium border-2 border-white/50 hover:border-white hover:bg-white/10 transition-all flex items-center gap-2">
                  Get Started <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }} className="hidden md:block">
              <AnimatedHeroBanner />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Offerings Strip */}
      <section className="py-8 px-4 bg-background border-b border-border/50 -mt-8 relative z-20">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:justify-center md:flex-wrap">
            {offerings.map((offering, i) => <OfferingTile key={i} {...offering} />)}
          </div>
        </div>
      </section>

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

      {/* Interactive Capability Matrix */}
      <CapabilityMatrix />

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

      {/* Adopter Logos */}
      <AdopterLogos />
    </div>;
};
export default Home;
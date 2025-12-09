import { motion, useInView } from "framer-motion";
import { Globe, BarChart3, Users, Cpu, ArrowRight, ArrowDown, Eye, Settings, Database, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";
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

// Indic language glyphs for floating animation
const indicGlyphs = [
  "अ", "आ", "इ", "क", "ख", "ग", // Hindi
  "க", "ங", "ச", "த", "ப", "ம", // Tamil
  "অ", "আ", "ক", "খ", "গ", "ঘ", // Bengali
  "ا", "ب", "ت", "ث", "ج", // Arabic/Urdu
  "ಅ", "ಆ", "ಕ", "ಖ", "ಗ", // Kannada
  "అ", "ఆ", "క", "ఖ", "గ", // Telugu
  "അ", "ആ", "ക", "ഖ", "ഗ", // Malayalam
];

const offerings = [
  {
    icon: <Cpu className="text-primary-foreground" size={24} />,
    title: "AI4I Core",
    subtitle: "Hosting & Orchestration",
    summary: "Host, scale, and serve language AI models.",
    bullets: [
      "Deploy ASR, TTS, NMT, and LLM models",
      "Auto-scaling with load balancing",
      "Multi-tenant architecture",
    ],
    link: "/building-blocks#ai4i-core",
  },
  {
    icon: <Globe className="text-primary-foreground" size={24} />,
    title: "AI4I Orchestrate",
    subtitle: "Runtime & Governance",
    summary: "Single API, model routing, policy control.",
    bullets: [
      "Unified API for all language models",
      "Intelligent routing based on domain",
      "Policy enforcement and SLA management",
    ],
    link: "/building-blocks#ai4i-core",
  },
  {
    icon: <BarChart3 className="text-primary-foreground" size={24} />,
    title: "AI4I Observe",
    subtitle: "Observability & Governance",
    summary: "Telemetry, quality, drift and dashboards.",
    bullets: [
      "Real-time monitoring and alerting",
      "Quality drift detection",
      "Performance analytics dashboards",
    ],
    link: "/building-blocks#observe",
  },
  {
    icon: <Users className="text-primary-foreground" size={24} />,
    title: "AI4I Contribute",
    subtitle: "Community Data",
    summary: "Crowdsource and validate speech datasets.",
    bullets: [
      "Mobile-first data collection",
      "Built-in validation workflows",
      "Community governance tools",
    ],
    link: "/building-blocks#contribute",
  },
];

const featureBlocks = [
  {
    title: "AI4I-Orchestrate",
    description: "A unified runtime layer that routes inference requests to the best-fit models based on language, domain, cost, and policy. It provides a single API surface for all Language AI capabilities.",
    bullets: [
      "Multi-model inference routing with fallback chains",
      "Policy-based model selection and governance",
      "Cost-aware routing with SLA enforcement",
      "Ensemble support for improved accuracy",
    ],
    icon: <Globe className="text-primary-foreground" size={24} />,
    animation: <GlobeAnimation />,
    videoUrl: "https://www.youtube.com/embed/5zLdk3-gvYU",
    docsUrl: "https://github.com/COSS-India/ai4i-core",
    githubUrl: "https://github.com/COSS-India/ai4i-core",
    discussUrl: "https://github.com/COSS-India/ai4i-core/discussions",
    blockLink: "/building-blocks#ai4i-core",
  },
  {
    title: "AI4I-Observe",
    description: "A comprehensive observability platform that monitors Language AI model performance in production. It captures telemetry, detects quality drift, and provides actionable insights.",
    bullets: [
      "Real-time telemetry and event streaming",
      "Quality drift detection and alerting",
      "Performance dashboards and analytics",
      "Evidence-based retraining recommendations",
    ],
    icon: <BarChart3 className="text-primary-foreground" size={24} />,
    animation: <ChartAnimation />,
    videoUrl: "https://www.youtube.com/embed/i7Tv5sLzic8",
    docsUrl: "https://github.com/COSS-India/observe",
    githubUrl: "https://github.com/COSS-India/observe",
    discussUrl: "https://github.com/COSS-India/observe/discussions",
    blockLink: "/building-blocks#observe",
  },
  {
    title: "AI4I-Contribute",
    description: "A community-powered application for collecting, validating, and improving language datasets across regions, accents, and domains. It turns data creation into a participatory public good.",
    bullets: [
      "Mobile-first offline data collection",
      "Built-in validation workflows",
      "Domain-specific campaign support",
      "Dialect and accent coverage tracking",
    ],
    icon: <Users className="text-primary-foreground" size={24} />,
    animation: <MicrophoneAnimation />,
    videoUrl: "https://www.youtube.com/embed/_0KqImO7GMs",
    docsUrl: "https://github.com/COSS-India/ai4i-contribute",
    githubUrl: "https://github.com/COSS-India/ai4i-contribute",
    discussUrl: "https://github.com/COSS-India/ai4i-contribute/discussions",
    blockLink: "/building-blocks#contribute",
  },
];

// Value strip items
const valueStripItems = [
  { icon: Cpu, label: "AI4I Core", desc: "Host & orchestrate language AI models" },
  { icon: Eye, label: "AI4I Observe", desc: "Monitor model quality & system performance" },
  { icon: Settings, label: "AI4I Orchestrate", desc: "Policy-driven runtime & governance" },
  { icon: Users, label: "AI4I Contribute", desc: "Community-powered data collection" },
];

const Home = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Global flowing gradient curves */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curveGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(216, 100%, 32%)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="hsl(205, 100%, 38%)" stopOpacity="0.03" />
            </linearGradient>
            <linearGradient id="curveGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(205, 100%, 38%)" stopOpacity="0.04" />
              <stop offset="100%" stopColor="hsl(216, 100%, 32%)" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <motion.path
            d="M0,200 Q400,100 800,300 T1600,200 T2400,400"
            fill="none"
            stroke="url(#curveGradient1)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          <motion.path
            d="M0,600 Q300,400 700,500 T1400,400 T2100,600"
            fill="none"
            stroke="url(#curveGradient2)"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3.5, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

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
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${i * 15}%`}
                y1="0"
                x2={`${100 - i * 10}%`}
                y2="100%"
                stroke="url(#lineGradient)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: [0.1, 0.3, 0.1] }}
                transition={{
                  pathLength: { duration: 3, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 },
                  opacity: { duration: 3, delay: i * 0.2, repeat: Infinity, repeatDelay: 1 },
                }}
              />
            ))}
          </svg>
        </div>

        {/* Enhanced floating Indic language glyphs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {indicGlyphs.slice(0, 18).map((char, i) => (
            <motion.span
              key={i}
              className="absolute text-white/[0.06] font-heading select-none"
              style={{
                left: `${5 + (i * 5.2) % 90}%`,
                top: `${10 + ((i * 17) % 75)}%`,
                fontSize: `${12 + (i % 4) * 5}px`,
              }}
              animate={{
                y: [-5, -25, -5],
                x: [0, (i % 2 === 0 ? 8 : -8), 0],
                opacity: [0.04, 0.12, 0.04],
                rotate: [0, (i % 2 === 0 ? 5 : -5), 0],
              }}
              transition={{
                duration: 5 + i * 0.4,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* Ambient blue glow - left side */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
          <div
            className="absolute inset-0 blur-3xl opacity-60"
            style={{
              background: "radial-gradient(ellipse 800px 600px at 30% 50%, hsl(210, 100%, 50%, 0.15), hsl(210, 100%, 45%, 0.08) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Radial glow behind globe - right side */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full pointer-events-none">
          <motion.div
            className="absolute inset-0 blur-3xl"
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              background: "radial-gradient(ellipse 600px 500px at 70% 50%, hsl(216, 100%, 45%, 0.2), hsl(205, 100%, 50%, 0.1) 50%, transparent 75%)",
            }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="px-4 md:pl-12"
            >
              <motion.h1
                className="font-heading font-bold leading-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
                  AI4Inclusion: Language AI Infrastructure for the World
                </span>
              </motion.h1>

              <motion.p
                className="text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                AI4Inclusion empowers nations to build their own Language AI DPI from citizen-sourced datasets to public serving orchestration. It enables true digital inclusion in every spoken language.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <button
                  onClick={() => scrollToSection("building-blocks")}
                  className="bg-primary text-primary-foreground px-5 sm:px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 button-glow transition-all shadow-medium"
                >
                  Explore Building Blocks <ArrowDown size={18} />
                </button>
                <button
                  onClick={() => scrollToSection("quick-start")}
                  className="bg-transparent text-white px-5 sm:px-6 py-3 rounded-lg font-medium border-2 border-white/50 hover:border-white hover:bg-white/10 hover:shadow-[0_0_20px_hsl(0,0%,100%,0.15)] transition-all flex items-center justify-center gap-2"
                >
                  Get Started <ArrowRight size={18} />
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block relative"
            >
              {/* Globe pulse glow effect */}
              <motion.div
                className="absolute inset-0 rounded-full blur-2xl"
                animate={{
                  opacity: [0.15, 0.35, 0.15],
                  scale: [0.95, 1.02, 0.95],
                }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  background: "radial-gradient(circle at center, hsl(216, 100%, 50%, 0.3), transparent 60%)",
                }}
              />
              <AnimatedHeroBanner />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clear Value Strip */}
      <section className="py-6 px-4 bg-gradient-to-b from-[#0a1628] to-background relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {valueStripItems.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center text-center p-4 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:border-primary/30 hover:shadow-[0_0_24px_hsl(216,100%,32%,0.15)] transition-all duration-300 cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 group-hover:shadow-[0_0_16px_hsl(216,100%,32%,0.25)] transition-all duration-300">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Offerings Strip */}
      <section className="py-8 px-4 bg-background border-b border-border/50 relative z-20">
        <div className="container mx-auto">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide md:justify-center md:flex-wrap">
            {offerings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <OfferingTile {...offering} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature & Offerings Grid */}
      <section className="py-20 px-4 relative z-10" id="building-blocks">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            {/* Mini-heading for clarity */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-sm text-primary/80 font-medium tracking-wide uppercase mb-3"
            >
              Three building blocks, one unified Language AI Infrastructure
            </motion.p>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Explore Building Blocks
              <motion.span
                className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: "180px" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Modular, open-source components that work together to power the complete Language AI lifecycle
            </p>
          </motion.div>

          <div className="space-y-20 max-w-6xl mx-auto">
            {featureBlocks.map((block, i) => (
              <motion.div
                key={block.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <FeatureBlock {...block} reversed={i % 2 === 1} />
              </motion.div>
            ))}
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
    </div>
  );
};

export default Home;

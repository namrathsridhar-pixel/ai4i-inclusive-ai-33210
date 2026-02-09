import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Globe, BarChart3, Users, CheckCircle, Database, GitBranch, Shield, MessageCircle, 
  ArrowRight, Activity, Maximize2, Layers, Route, Gauge, Eye, RefreshCcw,
  AlertTriangle, TrendingUp, Zap, Network, Share2, FileCheck, Users2, 
  Building2, Workflow, Sparkles, Target
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { PreloadedImage } from "@/components/ui/preloaded-image";

// Import new architecture images
import orchestrateArchitectureNew from "@/assets/orchestrate-architecture-new.png";
import observeArchitectureNew from "@/assets/observe-architecture-new.png";
import contributeArchitectureNew from "@/assets/contribute-architecture-new.png";
import orchestrateHowItWorks from "@/assets/orchestrate-how-it-works.png";
import observeInfographic from "@/assets/observe-infographic.png";
import contributeHowItWorks from "@/assets/contribute-how-it-works.png";

// Preload images for immediate display
const preloadImages = [
  orchestrateArchitectureNew, observeArchitectureNew, contributeArchitectureNew,
  orchestrateHowItWorks, observeInfographic, contributeHowItWorks
];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});

const BuildingBlocks = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("ai4i-orchestrate");
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'ai4i-orchestrate' || id === 'observe' || id === 'contribute') {
        setActiveSection(id);
      }
    }
  }, [location.hash]);

  // Why Orchestrate Matters - Feature Cards
  const orchestrateMattersCards = [
    {
      icon: <Layers size={24} />,
      title: "Unified AI Control Layer",
      description: "One governed runtime for all Language AI models—speech, translation, LLMs, OCR—eliminating fragmentation."
    },
    {
      icon: <Shield size={24} />,
      title: "Policy & Compliance",
      description: "Enforce national policies, data access rules, and usage quotas across the entire AI ecosystem."
    },
    {
      icon: <Route size={24} />,
      title: "Intelligent Model Routing",
      description: "Route requests to optimal models based on language, domain, cost, and performance requirements."
    },
    {
      icon: <Gauge size={24} />,
      title: "Operational Reliability",
      description: "Consistent quality, predictable latency, and scalable infrastructure for national-scale deployments."
    },
    {
      icon: <Network size={24} />,
      title: "Vendor Agnostic",
      description: "Integrate models from multiple providers without lock-in, maintaining flexibility and choice."
    }
  ];

  // Why Observe Matters - Feature Cards
  const observeMattersCards = [
    {
      icon: <Globe size={24} />,
      title: "Multilingual Complexity",
      description: "Each language and dialect behaves differently, requiring specialized quality monitoring."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Model Degradation Detection",
      description: "Models drift over time—continual evaluation prevents quality decay before users notice."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Operational Risk Detection",
      description: "Catch latency spikes, error surges, and capacity issues early with proactive alerting."
    },
    {
      icon: <Shield size={24} />,
      title: "Governance Transparency",
      description: "Auditable, evidence-driven insights ensure policy compliance and build stakeholder trust."
    },
    {
      icon: <Share2 size={24} />,
      title: "Scalable Telemetry",
      description: "Shared telemetry enables cross-adopter benchmarking, insights reuse, and ecosystem learning."
    }
  ];

  // Why Contribute Matters - Feature Cards
  const contributeMattersCards = [
    {
      icon: <Database size={24} />,
      title: "Data Foundation Gap",
      description: "Most global languages lack sufficient training data—limiting AI accuracy and coverage."
    },
    {
      icon: <Users2 size={24} />,
      title: "Regional & Dialect Diversity",
      description: "Accents, dialects, and domain-specific terminology are rarely included in standard datasets."
    },
    {
      icon: <Building2 size={24} />,
      title: "Institutional Participation",
      description: "Citizens, governments, and organizations collectively build inclusive language resources."
    },
    {
      icon: <FileCheck size={24} />,
      title: "Quality Assurance",
      description: "Built-in validation workflows ensure data meets accuracy, clarity, and pronunciation standards."
    },
    {
      icon: <Target size={24} />,
      title: "Participatory Public Good",
      description: "Data creation becomes a community-driven effort powering better AI for everyone."
    }
  ];

  // Observe capability cards
  const observeCapabilityCards = [
    {
      icon: <Activity size={24} />,
      title: "Real-time visibility into system & model health",
      description: "CPU/GPU load, inference latency, throughput, error rates, and more."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Automated model quality evaluation",
      description: "Across NMT, ASR, TTS, NER, LLMs — with BLEU, WER, hallucination rate, semantic accuracy."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Feedback-driven improvement loops",
      description: "Explicit, implicit, and governance feedback feed directly into retraining pipelines."
    },
    {
      icon: <Shield size={24} />,
      title: "Drift & bias detection",
      description: "Monitors domain shifts, dialect patterns, fairness across groups, and vocabulary evolution."
    },
    {
      icon: <Database size={24} />,
      title: "Scalable telemetry collection",
      description: "Billions of events processed reliably: user interactions, model switches, errors, session drops."
    },
    {
      icon: <GitBranch size={24} />,
      title: "A/B testing, canary releases & safe deployment",
      description: "Compare baseline vs new models, shadow mode evaluations, human-in-the-loop validation."
    },
    {
      icon: <Users size={24} />,
      title: "Unified dashboards for all stakeholders",
      description: "Engineers, ML researchers, administrators, communities, product owners."
    }
  ];

  // Ecosystem Flow Steps
  const orchestrateEcosystemFlow = [
    { icon: <Users size={20} />, label: "Applications", description: "Send AI requests" },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Routes, governs, manages models", highlight: true },
    { icon: <Eye size={20} />, label: "Observe", description: "Monitors performance & drift" },
    { icon: <Database size={20} />, label: "Contribute", description: "Feeds data for improvements" }
  ];

  const observeEcosystemFlow = [
    { icon: <Zap size={20} />, label: "AI Systems", description: "Generate telemetry data" },
    { icon: <Eye size={20} />, label: "Observe", description: "Collects, analyzes, alerts", highlight: true },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Receives quality signals" },
    { icon: <Database size={20} />, label: "Contribute", description: "Guided by quality insights" }
  ];

  const contributeEcosystemFlow = [
    { icon: <Users2 size={20} />, label: "Communities", description: "Record & validate speech" },
    { icon: <Database size={20} />, label: "Contribute", description: "Packages quality datasets", highlight: true },
    { icon: <Workflow size={20} />, label: "Model Training", description: "ASR, TTS, NMT, LLMs" },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Hosts & routes models" }
  ];

  // Reusable SaaS Feature Grid Component
  const SaaSFeatureGrid = ({ cards, accentColor = "primary" }: { cards: typeof orchestrateMattersCards, accentColor?: string }) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Card className="h-full group bg-gradient-to-br from-card to-accent/5 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardContent className="pt-6 pb-6">
              <div className={`w-12 h-12 rounded-xl bg-${accentColor}/10 flex items-center justify-center mb-4 text-${accentColor} group-hover:bg-${accentColor} group-hover:text-${accentColor}-foreground transition-colors`}>
                {card.icon}
              </div>
              <h4 className="font-heading font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  // Reusable Ecosystem Flow Component
  const EcosystemFlow = ({ steps, finalOutcome }: { steps: typeof orchestrateEcosystemFlow, finalOutcome: string }) => (
    <div className="space-y-8">
      {/* Flow Steps */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center gap-2 lg:gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`
                flex flex-col items-center p-4 lg:p-6 rounded-2xl border min-w-[140px] lg:min-w-[160px]
                ${step.highlight 
                  ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 shadow-lg' 
                  : 'bg-card/50 border-border/50 hover:border-primary/20 transition-colors'
                }
              `}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-3 ${step.highlight ? 'bg-primary text-primary-foreground' : 'bg-accent text-accent-foreground'}`}>
                {step.icon}
              </div>
              <h5 className={`font-heading font-semibold text-sm mb-1 ${step.highlight ? 'text-primary' : ''}`}>
                {step.label}
              </h5>
              <p className="text-xs text-muted-foreground text-center">{step.description}</p>
            </motion.div>
            
            {index < steps.length - 1 && (
              <ArrowRight className="text-muted-foreground/50 hidden lg:block flex-shrink-0" size={20} />
            )}
          </div>
        ))}
      </div>

      {/* Final Outcome */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-xl mx-auto"
      >
        <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20 shadow-lg">
          <CardContent className="py-6 text-center">
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="text-primary" size={20} />
              <span className="font-heading font-bold text-lg text-foreground">{finalOutcome}</span>
              <Sparkles className="text-primary" size={20} />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* AI4I Orchestrate */}
        {activeSection === "ai4i-orchestrate" && (
          <section className="pt-32 pb-20 px-4" id="ai4i-orchestrate">
            <div className="container mx-auto max-w-6xl">
              {/* Hero Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <Globe className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Orchestrate</h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A unified orchestration layer that delivers secure, governed, high-quality Language AI for every application.
                </p>
              </motion.div>

              {/* SECTION 1 — How AI4I-Orchestrate Powers Every Language AI Request */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">How AI4I-Orchestrate Powers Every Language AI Request</h3>
                <p className="text-muted-foreground mb-6">Reliable runtime foundation for national-scale Language AI.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 bg-card">
                      <CardContent className="pt-6 relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                            <Maximize2 size={14} />
                            Click to expand
                          </div>
                        </div>
                        <PreloadedImage
                          src={orchestrateHowItWorks}
                          alt="How AI4I-Orchestrate Works"
                          className="rounded-lg"
                          containerClassName="rounded-lg"
                          aspectRatio="16/9"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>How AI4I-Orchestrate Powers Every Language AI Request</DialogTitle>
                      <DialogDescription>Visual diagram showing the orchestration workflow</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-4">
                      <img src={orchestrateHowItWorks} alt="How AI4I-Orchestrate Works" className="w-full h-auto" loading="eager" style={{ imageRendering: 'crisp-edges' }} />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 2 — Why Orchestrate Matters - SaaS Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Why Orchestrate Matters</h3>
                  <p className="text-muted-foreground">Reliable runtime foundation for national-scale Language AI.</p>
                </div>
                <SaaSFeatureGrid cards={orchestrateMattersCards} />
              </motion.div>

              {/* SECTION 3 — Architecture Diagram (moved before What Orchestrate Enables) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">AI4I-Orchestrate: The Smart Control Plane for Language AI</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 bg-card p-2 md:p-4">
                      <CardContent className="p-0 relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                            <Maximize2 size={14} />
                            Click to expand
                          </div>
                        </div>
                        <div className="w-full overflow-hidden rounded-lg bg-card/50">
                          <PreloadedImage
                            src={orchestrateArchitectureNew}
                            alt="AI4I-Orchestrate Architecture"
                            className="rounded-lg object-contain"
                            containerClassName="rounded-lg"
                            aspectRatio="16/9"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>AI4I-Orchestrate: The Smart Control Plane for Language AI</DialogTitle>
                      <DialogDescription>Architecture diagram showing the smart control plane</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-6">
                      <img 
                        src={orchestrateArchitectureNew} 
                        alt="AI4I-Orchestrate Architecture" 
                        className="w-full h-auto"
                        loading="eager"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — What Orchestrate Enables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Orchestrate Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Layers size={24} />, title: "Unified APIs", description: "One consistent API for all Language AI services—speech, translation, LLMs, OCR—simplifying integration across applications." },
                    { icon: <Route size={24} />, title: "Smart Model Routing", description: "Intelligently routes requests to the best model based on language, domain, cost, and performance requirements." },
                    { icon: <Shield size={24} />, title: "Governance & Policy Control", description: "Enforces rules on data access, usage quotas, compliance, and national policies across the entire ecosystem." },
                    { icon: <Gauge size={24} />, title: "Metering & Quotas", description: "Tracks usage, enforces rate limits, and provides cost visibility for sustainable AI operations." },
                    { icon: <Eye size={24} />, title: "Observability & Quality Monitoring", description: "Real-time visibility into model health, quality metrics, and system performance across all services." },
                    { icon: <RefreshCcw size={24} />, title: "Continuous Improvement Loop", description: "Feedback from users and quality monitoring automatically feeds back to improve models over time." }
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="h-full group hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {card.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading font-semibold mb-1">{card.title}</h4>
                              <p className="text-sm text-muted-foreground">{card.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 5 — Orchestrate in the AI4Inclusion Ecosystem - Visual Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Orchestrate in the AI4Inclusion Ecosystem</h3>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">See how Orchestrate connects with other building blocks to form a complete Language AI infrastructure.</p>
                </div>
                <EcosystemFlow 
                  steps={orchestrateEcosystemFlow} 
                  finalOutcome="A Trusted National Language AI Infrastructure" 
                />
              </motion.div>

              {/* SECTION 6 — Video Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Explore More About Orchestrate</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jEuKOasl0ws"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* SECTION 7 — Unified CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/10"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Ready to explore AI4I-Orchestrate?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Learn how to implement unified Language AI orchestration in your applications.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/ai4i-core" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Learn More
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/ai4i-core/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <MessageCircle size={16} />
                        Discuss
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Observe - Enriched Section */}
        {activeSection === "observe" && (
          <section className="pt-32 pb-20 px-4" id="observe">
            <div className="container mx-auto max-w-6xl">
              {/* Hero Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <BarChart3 className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Observe</h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A unified observability and analytics layer that ensures trustworthy, high-quality, continuously improving Language AI systems at scale.
                </p>
              </motion.div>

              {/* SECTION 1 — How AI4I-Observe Ensures Quality, Reliability & Governance */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">How AI4I-Observe Ensures Quality, Reliability & Governance</h3>
                <p className="text-muted-foreground mb-6">Complete visibility into AI system health and performance.</p>
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4">
                  <PreloadedImage
                    src={observeInfographic}
                    alt="AI4I-Observe: Unified Telemetry & Governance Architecture"
                    className="rounded-xl"
                    containerClassName="rounded-xl"
                    aspectRatio="16/9"
                  />
                </div>
              </motion.div>

              {/* SECTION 2 — Why Observe Matters - SaaS Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Why Observe Matters</h3>
                  <p className="text-muted-foreground">Intelligence and governance layer for reliable AI operations.</p>
                </div>
                <SaaSFeatureGrid cards={observeMattersCards} />
              </motion.div>

              {/* SECTION 3 — Architecture Diagram (moved after Why Observe Matters) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">AI4I-Observe: The Feedback Engine for Language AI</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 bg-card">
                      <CardContent className="pt-6 relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                            <Maximize2 size={14} />
                            Click to expand
                          </div>
                        </div>
                        <PreloadedImage
                          src={observeArchitectureNew}
                          alt="AI4I-Observe System Architecture"
                          className="rounded-lg"
                          containerClassName="rounded-lg"
                          aspectRatio="16/9"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>AI4I-Observe: The Feedback Engine for Language AI</DialogTitle>
                      <DialogDescription>Architecture diagram showing the feedback engine</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-4">
                      <img 
                        src={observeArchitectureNew} 
                        alt="AI4I-Observe System Architecture" 
                        className="w-full h-auto"
                        loading="eager"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — What Observe Enables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Observe Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {observeCapabilityCards.map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="h-full group hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {card.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading font-semibold mb-1">{card.title}</h4>
                              <p className="text-sm text-muted-foreground">{card.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 5 — Observe in the AI4Inclusion Ecosystem - Visual Flow (moved after What Observe Enables) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Observe in the AI4Inclusion Ecosystem</h3>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">Observe acts as the intelligence layer, strengthening the entire ecosystem.</p>
                </div>
                <EcosystemFlow 
                  steps={observeEcosystemFlow} 
                  finalOutcome="Transparent, Reliable & Continuously Improving AI" 
                />
              </motion.div>

              {/* SECTION 6 — Video Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">See It In Action</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/i7Tv5sLzic8?si=Ov-z55igMU-RluLW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* SECTION 7 — Unified CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/10"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Ready to explore AI4I-Observe?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Learn how to implement comprehensive observability in your AI systems.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/observe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Learn More
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/observe/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <MessageCircle size={16} />
                        Discuss
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* Contribute */}
        {activeSection === "contribute" && (
          <section className="pt-32 pb-20 px-4" id="contribute">
            <div className="container mx-auto max-w-6xl">
              {/* Hero Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <Users className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Contribute</h2>
                </div>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A Digital Public Good for Multilingual Data Ingestion, Annotation & Quality Assurance
                </p>
              </motion.div>

              {/* SECTION 1 — How AI4I-Contribute Builds High-Quality Language Datasets */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">How AI4I-Contribute Builds High-Quality Language Datasets</h3>
                <p className="text-muted-foreground mb-6">Community-powered data collection for inclusive AI.</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 bg-card">
                      <CardContent className="pt-6 relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                            <Maximize2 size={14} />
                            Click to expand
                          </div>
                        </div>
                        <PreloadedImage
                          src={contributeHowItWorks}
                          alt="How AI4I-Contribute Works"
                          className="rounded-lg"
                          containerClassName="rounded-lg"
                          aspectRatio="16/9"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>How AI4I-Contribute Builds High-Quality Language Datasets</DialogTitle>
                      <DialogDescription>Visual diagram showing the data contribution workflow</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-4">
                      <img src={contributeHowItWorks} alt="How AI4I-Contribute Works" className="w-full h-auto" loading="eager" />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 2 — Why Contribute Matters - SaaS Feature Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Why Contribute Matters</h3>
                  <p className="text-muted-foreground">Building inclusive datasets as a participatory public good.</p>
                </div>
                <SaaSFeatureGrid cards={contributeMattersCards} />
              </motion.div>

              {/* SECTION 3 — Architecture Diagram (moved after Why Contribute Matters) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">AI4I-Contribute: The Data Factory for Sovereign Language AI</h3>
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="cursor-pointer group hover:shadow-lg transition-all duration-300 bg-card p-2 md:p-4">
                      <CardContent className="p-0 relative">
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                            <Maximize2 size={14} />
                            Click to expand
                          </div>
                        </div>
                        <div className="w-full overflow-hidden rounded-lg bg-card/50">
                          <PreloadedImage
                            src={contributeArchitectureNew}
                            alt="AI4I-Contribute Architecture"
                            className="rounded-lg object-contain"
                            containerClassName="rounded-lg"
                            aspectRatio="16/9"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>AI4I-Contribute: The Data Factory for Sovereign Language AI</DialogTitle>
                      <DialogDescription>Architecture diagram showing the data factory</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-6">
                      <img 
                        src={contributeArchitectureNew} 
                        alt="AI4I-Contribute Architecture" 
                        className="w-full h-auto"
                        loading="eager"
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — What Contribute Enables */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Contribute Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Users size={24} />, title: "Community Voice Collection", description: "Citizens record speech or read curated sentences to build diverse language datasets." },
                    { icon: <CheckCircle size={24} />, title: "Built-in Validation Workflows", description: "Validators review recordings for accuracy, clarity, pronunciation, and noise quality." },
                    { icon: <Database size={24} />, title: "Dataset Governance", description: "Track contributors, validation history, dataset maturity, and quality metadata." },
                    { icon: <Globe size={24} />, title: "Domain-Specific Campaigns", description: "Organizations can launch campaigns for agriculture, education, healthcare, financial inclusion, etc." },
                    { icon: <Activity size={24} />, title: "Dialect & Accent Coverage", description: "Capture speech variations across regions to improve model performance and inclusivity." },
                    { icon: <RefreshCcw size={24} />, title: "Seamless Model Improvement Loop", description: "Validated datasets feed into model training pipelines and become available to Orchestrate and Observe." }
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                    >
                      <Card className="h-full group hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                              {card.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-heading font-semibold mb-1">{card.title}</h4>
                              <p className="text-sm text-muted-foreground">{card.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 4 — What Contribute Powers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Visualize What Contribute Powers</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <BarChart3 size={32} />, title: "Better ASR (Speech-to-Text) Models", description: "Shows improved recognition accuracy across dialects." },
                    { icon: <Globe size={32} />, title: "Stronger Translation & Multilingual LLMs", description: "Enables models to learn real expressions from real speakers." },
                    { icon: <Users size={32} />, title: "Inclusive Public Service Applications", description: "Voice-based helplines, IVRs, chatbots, ed-tech platforms, agricultural apps, etc." },
                    { icon: <Database size={32} />, title: "Local Language Preservation", description: "Stores community voices and linguistic diversity for future datasets and research." }
                  ].map((card, index) => (
                    <motion.div
                      key={card.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Card className="h-full group hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5">
                        <CardContent className="pt-8 pb-8 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {card.icon}
                          </div>
                          <h4 className="font-heading font-bold text-lg mb-2">{card.title}</h4>
                          <p className="text-sm text-muted-foreground">{card.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* SECTION 5 — Contribute in the AI4Inclusion Ecosystem - Visual Flow */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-heading font-bold mb-2">Contribute in the AI4Inclusion Ecosystem</h3>
                  <p className="text-muted-foreground text-center max-w-2xl mx-auto">Contribute acts as the data backbone fueling continuous improvement of Language AI.</p>
                </div>
                <EcosystemFlow 
                  steps={contributeEcosystemFlow} 
                  finalOutcome="Citizen-Facing Services in Every Language" 
                />
              </motion.div>

              {/* SECTION 7 — Video Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Explore More About Contribute</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/_0KqImO7GMs?si=XtYl6ESXYjnYWGK2"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </motion.div>

              {/* SECTION 8 — Unified CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/10"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Ready to explore AI4I-Contribute?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Learn how to build inclusive language datasets with community participation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/ai4i-contribute" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        Learn More
                        <ArrowRight size={16} />
                      </a>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                      <a href="https://github.com/COSS-India/ai4i-contribute/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                        <MessageCircle size={16} />
                        Discuss
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BuildingBlocks;

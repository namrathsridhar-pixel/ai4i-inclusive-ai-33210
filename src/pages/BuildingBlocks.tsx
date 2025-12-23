import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Globe, BarChart3, Users, CheckCircle, Database, GitBranch, Shield, MessageCircle, 
  ArrowRight, Activity, Maximize2, Layers, Route, Gauge, Eye, RefreshCcw,
  AlertTriangle, TrendingUp, Zap, Network, Share2, FileCheck, Users2, 
  Building2, Workflow, Sparkles, Target, ChevronDown, ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

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
  const [activeSection, setActiveSection] = useState("ai4i-core");
  const [expandedCapabilities, setExpandedCapabilities] = useState<string[]>([]);
  const [showArchitecture, setShowArchitecture] = useState(false);
  
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'ai4i-core' || id === 'observe' || id === 'contribute') {
        setActiveSection(id);
      }
    }
  }, [location.hash]);

  const toggleCapability = (id: string) => {
    setExpandedCapabilities(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  // Why Orchestrate Matters - Executive Cards
  const orchestrateMattersCards = [
    {
      icon: <Layers size={28} />,
      title: "Unified AI Control Layer",
      description: "One governed runtime for all Language AI models—speech, translation, LLMs, OCR—eliminating fragmentation."
    },
    {
      icon: <Shield size={28} />,
      title: "Policy & Compliance",
      description: "Enforce national policies, data access rules, and usage quotas across the entire AI ecosystem."
    },
    {
      icon: <Route size={28} />,
      title: "Intelligent Model Routing",
      description: "Route requests to optimal models based on language, domain, cost, and performance requirements."
    },
    {
      icon: <Gauge size={28} />,
      title: "Operational Reliability",
      description: "Consistent quality, predictable latency, and scalable infrastructure for national-scale deployments."
    },
    {
      icon: <Network size={28} />,
      title: "Vendor Agnostic",
      description: "Integrate models from multiple providers without lock-in, maintaining flexibility and choice."
    }
  ];

  // Why Observe Matters - Executive Cards
  const observeMattersCards = [
    {
      icon: <Eye size={28} />,
      title: "Transparency & Accountability",
      description: "Clear visibility into how Language AI systems behave in real-world usage."
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Quality & Performance Monitoring",
      description: "Track accuracy, latency, drift, and degradation across languages and models."
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "Operational Confidence",
      description: "Detect failures early and maintain reliable AI services at scale."
    },
    {
      icon: <RefreshCcw size={28} />,
      title: "Feedback-Driven Improvement",
      description: "Insights from usage and quality feed continuous system improvement."
    }
  ];

  // Why Contribute Matters - Executive Cards
  const contributeMattersCards = [
    {
      icon: <Globe size={28} />,
      title: "Inclusive Language Coverage",
      description: "Expand Language AI to represent diverse languages and dialects."
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Quality by Design",
      description: "Structured validation ensures reliable and usable data."
    },
    {
      icon: <Users2 size={28} />,
      title: "Community Participation",
      description: "Enable institutions and communities to contribute responsibly."
    },
    {
      icon: <FileCheck size={28} />,
      title: "Recognition & Trust",
      description: "Transparent contribution processes with attribution and certification."
    }
  ];

  // What Orchestrate Enables - Collapsible items
  const orchestrateCapabilities = [
    { id: "unified-apis", title: "Unified APIs", description: "One consistent API for all Language AI services—speech, translation, LLMs, OCR—simplifying integration across applications." },
    { id: "smart-routing", title: "Smart Model Routing", description: "Intelligently routes requests to the best model based on language, domain, cost, and performance requirements." },
    { id: "governance", title: "Governance & Policy Control", description: "Enforces rules on data access, usage quotas, compliance, and national policies across the entire ecosystem." },
    { id: "metering", title: "Metering & Quotas", description: "Tracks usage, enforces rate limits, and provides cost visibility for sustainable AI operations." },
    { id: "observability", title: "Observability & Quality Monitoring", description: "Real-time visibility into model health, quality metrics, and system performance across all services." },
    { id: "improvement", title: "Continuous Improvement Loop", description: "Feedback from users and quality monitoring automatically feeds back to improve models over time." }
  ];

  // What Observe Enables - Collapsible items
  const observeCapabilities = [
    { id: "usage", title: "Usage & Traffic Monitoring", description: "Full visibility into system usage patterns, request volumes, and resource consumption across all services." },
    { id: "quality", title: "Quality Metrics", description: "Track accuracy, BLEU scores, word error rates, and user satisfaction across languages and models." },
    { id: "health", title: "Model Health Tracking", description: "Monitor model performance, inference latency, throughput, and error rates in real-time." },
    { id: "drift", title: "Drift Detection", description: "Detect model degradation, data drift, and vocabulary evolution before they impact users." },
    { id: "alerts", title: "Alerts & Dashboards", description: "Proactive notifications and unified dashboards for engineers, ML researchers, and administrators." },
    { id: "feedback", title: "Feedback Signals", description: "Explicit, implicit, and governance feedback feed directly into retraining pipelines." }
  ];

  // What Contribute Enables - Collapsible items
  const contributeCapabilities = [
    { id: "speech", title: "Speech Data", description: "Citizens record speech or read curated sentences to build diverse language datasets across dialects and accents." },
    { id: "text", title: "Text Data", description: "Contribute text corpora, translations, and multilingual content for training and evaluation." },
    { id: "annotations", title: "Annotations", description: "Add labels, metadata, and quality markers to improve dataset usability." },
    { id: "evaluation", title: "Evaluation Datasets", description: "Create benchmark datasets for measuring model performance and quality." },
    { id: "feedback-signals", title: "Feedback Signals", description: "Provide corrections, ratings, and improvement suggestions from real-world usage." }
  ];

  // Ecosystem Flow Steps
  const orchestrateEcosystemFlow = [
    { icon: <Users size={20} />, label: "Applications", description: "Send AI requests" },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Routes, governs, manages models", highlight: true },
    { icon: <Eye size={20} />, label: "Observe", description: "Monitors performance & drift" },
    { icon: <Database size={20} />, label: "Contribute", description: "Feeds data for improvements" }
  ];

  const observeEcosystemFlow = [
    { icon: <Eye size={20} />, label: "Observe", description: "Insights & signals", highlight: true },
    { icon: <Database size={20} />, label: "Contribute", description: "Data & improvements" },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Runtime control" }
  ];

  const contributeEcosystemFlow = [
    { icon: <Database size={20} />, label: "Contribute", description: "Data & improvements", highlight: true },
    { icon: <Layers size={20} />, label: "Orchestrate", description: "Routes & hosts models" },
    { icon: <Eye size={20} />, label: "Observe", description: "Monitors quality" },
    { icon: <Database size={20} />, label: "Contribute", description: "Guided by insights" }
  ];

  // Reusable Executive Card Grid
  const ExecutiveCardGrid = ({ cards }: { cards: typeof orchestrateMattersCards }) => (
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.08 }}
        >
          <Card className="h-full bg-gradient-to-br from-card to-accent/5 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
            <CardContent className="pt-8 pb-8">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 text-primary">
                {card.icon}
              </div>
              <h4 className="font-heading font-bold text-xl mb-3">{card.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{card.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );

  // Reusable Collapsible Capabilities
  const CollapsibleCapabilities = ({ capabilities, currentExpanded }: { capabilities: typeof orchestrateCapabilities, currentExpanded: string[] }) => (
    <div className="grid md:grid-cols-2 gap-4">
      {capabilities.map((cap, index) => (
        <Collapsible
          key={cap.id}
          open={currentExpanded.includes(cap.id)}
          onOpenChange={() => toggleCapability(cap.id)}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <CollapsibleTrigger asChild>
              <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                <CardContent className="py-4 px-5 flex items-center justify-between">
                  <span className="font-heading font-semibold">{cap.title}</span>
                  <ChevronDown 
                    size={18} 
                    className={`text-muted-foreground transition-transform duration-200 ${currentExpanded.includes(cap.id) ? 'rotate-180' : ''}`} 
                  />
                </CardContent>
              </Card>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="px-5 py-4 text-sm text-muted-foreground bg-accent/30 rounded-b-lg border-x border-b border-border/50 -mt-1">
                {cap.description}
              </div>
            </CollapsibleContent>
          </motion.div>
        </Collapsible>
      ))}
    </div>
  );

  // Reusable Ecosystem Flow Component
  const EcosystemFlow = ({ steps }: { steps: typeof orchestrateEcosystemFlow }) => (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
      {steps.map((step, index) => (
        <div key={`${step.label}-${index}`} className="flex items-center gap-2 lg:gap-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`
              flex flex-col items-center p-5 lg:p-6 rounded-2xl border min-w-[140px] lg:min-w-[160px]
              ${step.highlight 
                ? 'bg-gradient-to-br from-primary/20 to-primary/5 border-primary/30 shadow-lg' 
                : 'bg-card/50 border-border/50'
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
  );

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* AI4I Orchestrate */}
        {activeSection === "ai4i-core" && (
          <section className="pt-32 pb-20 px-4" id="ai4i-core">
            <div className="container mx-auto max-w-6xl">
              {/* SECTION 1 — Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <Globe className="text-primary-foreground" size={28} />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">AI4I-Orchestrate</h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-3 max-w-3xl">
                  A unified orchestration layer that delivers secure, governed, high-quality Language AI for every application.
                </p>
                <p className="text-lg text-muted-foreground/80 mb-8">
                  Reliable runtime foundation for national-scale Language AI.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="font-medium" onClick={() => document.getElementById('how-orchestrate-works')?.scrollIntoView({ behavior: 'smooth' })}>
                    How AI4I-Orchestrate Works
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium" onClick={() => setShowArchitecture(true)}>
                    Explore Technical Architecture
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.div>

              {/* SECTION 2 — Why Orchestrate Matters (Executive Scan) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Why Orchestrate Matters</h2>
                </div>
                <ExecutiveCardGrid cards={orchestrateMattersCards} />
              </motion.div>

              {/* SECTION 3 — Core System Story */}
              <motion.div
                id="how-orchestrate-works"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">How AI4I-Orchestrate Powers Every Language AI Request</h2>
                <p className="text-muted-foreground mb-8">Reliable runtime foundation for national-scale Language AI.</p>
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
                        <img 
                          src={orchestrateHowItWorks} 
                          alt="How AI4I-Orchestrate Works" 
                          className="w-full h-auto rounded-lg"
                          loading="eager"
                          fetchPriority="high"
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
                      <img src={orchestrateHowItWorks} alt="How AI4I-Orchestrate Works" className="w-full h-auto" loading="eager" />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — What Orchestrate Enables (Progressive Disclosure) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What Orchestrate Enables</h2>
                <CollapsibleCapabilities capabilities={orchestrateCapabilities} currentExpanded={expandedCapabilities} />
              </motion.div>

              {/* SECTION 5 — Architecture (De-emphasized, Click to Expand) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20"
              >
                <Collapsible open={showArchitecture} onOpenChange={setShowArchitecture}>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                      <CardContent className="py-6 px-6 flex items-center justify-between">
                        <div>
                          <h2 className="text-xl md:text-2xl font-heading font-bold">AI4I-Orchestrate Architecture</h2>
                          <p className="text-sm text-muted-foreground mt-1">Click to explore the technical architecture</p>
                        </div>
                        <ChevronDown 
                          size={24} 
                          className={`text-muted-foreground transition-transform duration-200 ${showArchitecture ? 'rotate-180' : ''}`} 
                        />
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
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
                                <img 
                                  src={orchestrateArchitectureNew} 
                                  alt="AI4I-Orchestrate Architecture" 
                                  className="w-full h-auto object-contain rounded-lg"
                                  loading="lazy"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                          <VisuallyHidden>
                            <DialogTitle>AI4I-Orchestrate Architecture</DialogTitle>
                            <DialogDescription>Architecture diagram showing the smart control plane</DialogDescription>
                          </VisuallyHidden>
                          <div className="p-6">
                            <img 
                              src={orchestrateArchitectureNew} 
                              alt="AI4I-Orchestrate Architecture" 
                              className="w-full h-auto"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>

              {/* SECTION 6 — Orchestrate in the AI4Inclusion Ecosystem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Orchestrate in the AI4Inclusion Ecosystem</h2>
                </div>
                <EcosystemFlow steps={orchestrateEcosystemFlow} />
              </motion.div>

              {/* SECTION 7 — Trust Anchor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="text-center py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl border border-primary/10">
                  <div className="flex justify-center gap-4 mb-6">
                    <Shield size={32} className="text-primary" />
                    <Sparkles size={32} className="text-primary" />
                    <Globe size={32} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">A Trusted National Language AI Infrastructure</h2>
                </div>
              </motion.div>

              {/* SECTION 8 — Final CTA */}
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

        {/* AI4I Observe */}
        {activeSection === "observe" && (
          <section className="pt-32 pb-20 px-4" id="observe">
            <div className="container mx-auto max-w-6xl">
              {/* SECTION 1 — Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <BarChart3 className="text-primary-foreground" size={28} />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">AI4I-Observe</h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-3 max-w-3xl">
                  A public-grade observability layer for monitoring quality, performance, and reliability of Language AI systems.
                </p>
                <p className="text-lg text-muted-foreground/80 mb-8">
                  Ensuring accountability and trust across national-scale Language AI deployments.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="font-medium" onClick={() => document.getElementById('how-observe-works')?.scrollIntoView({ behavior: 'smooth' })}>
                    See How Observe Works
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium" onClick={() => setShowArchitecture(true)}>
                    View Metrics & Dashboards
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.div>

              {/* SECTION 2 — Why Observe Matters (Executive Scan) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Why Observe Matters</h2>
                </div>
                <ExecutiveCardGrid cards={observeMattersCards} />
              </motion.div>

              {/* SECTION 3 — Simple Observability Story */}
              <motion.div
                id="how-observe-works"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">How AI4I-Observe Monitors Language AI</h2>
                <p className="text-muted-foreground mb-8">Continuous visibility across models, applications, and languages.</p>
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4">
                  <img 
                    src={observeInfographic} 
                    alt="AI4I-Observe: Unified Telemetry & Governance Architecture" 
                    className="w-full h-auto rounded-xl"
                    loading="eager"
                    fetchPriority="high"
                  />
                </div>
              </motion.div>

              {/* SECTION 4 — What Observe Enables (Progressive Disclosure) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What Observe Enables</h2>
                <CollapsibleCapabilities capabilities={observeCapabilities} currentExpanded={expandedCapabilities} />
              </motion.div>

              {/* SECTION 5 — Dashboards & Metrics (De-emphasized) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20"
              >
                <Collapsible open={showArchitecture} onOpenChange={setShowArchitecture}>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                      <CardContent className="py-6 px-6 flex items-center justify-between">
                        <div>
                          <h2 className="text-xl md:text-2xl font-heading font-bold">Observe Dashboards</h2>
                          <p className="text-sm text-muted-foreground mt-1">Click to explore dashboard views and architecture</p>
                        </div>
                        <ChevronDown 
                          size={24} 
                          className={`text-muted-foreground transition-transform duration-200 ${showArchitecture ? 'rotate-180' : ''}`} 
                        />
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
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
                              <img 
                                src={observeArchitectureNew} 
                                alt="AI4I-Observe System Architecture" 
                                className="w-full h-auto rounded-lg"
                                loading="lazy"
                              />
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                          <VisuallyHidden>
                            <DialogTitle>AI4I-Observe System Architecture</DialogTitle>
                            <DialogDescription>Architecture diagram showing the feedback engine</DialogDescription>
                          </VisuallyHidden>
                          <div className="p-4">
                            <img 
                              src={observeArchitectureNew} 
                              alt="AI4I-Observe System Architecture" 
                              className="w-full h-auto"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>

              {/* SECTION 6 — Observe in the AI4Inclusion Ecosystem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Observe in the AI4Inclusion Ecosystem</h2>
                </div>
                <EcosystemFlow steps={observeEcosystemFlow} />
              </motion.div>

              {/* SECTION 7 — Trust Anchor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="text-center py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl border border-primary/10">
                  <div className="flex justify-center gap-4 mb-6">
                    <Eye size={32} className="text-primary" />
                    <Shield size={32} className="text-primary" />
                    <TrendingUp size={32} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">Built for Public-Scale Accountability</h2>
                </div>
              </motion.div>

              {/* SECTION 8 — Final CTA */}
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
                    See how observability builds trust and reliability in Language AI systems.
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

        {/* AI4I Contribute */}
        {activeSection === "contribute" && (
          <section className="pt-32 pb-20 px-4" id="contribute">
            <div className="container mx-auto max-w-6xl">
              {/* SECTION 1 — Hero */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                    <Users className="text-primary-foreground" size={28} />
                  </div>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">AI4I-Contribute</h1>
                </div>
                <p className="text-xl md:text-2xl text-muted-foreground mb-3 max-w-3xl">
                  A structured contribution layer for building inclusive, high-quality Language AI.
                </p>
                <p className="text-lg text-muted-foreground/80 mb-8">
                  Enabling communities, institutions, and ecosystems to strengthen Language AI responsibly.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="font-medium" onClick={() => document.getElementById('how-contribute-works')?.scrollIntoView({ behavior: 'smooth' })}>
                    See How Contribution Works
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                  <Button size="lg" variant="outline" className="font-medium">
                    View Contribution Guidelines
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </motion.div>

              {/* SECTION 2 — Why Contribute Matters (Executive Scan) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Why Contribute Matters</h2>
                </div>
                <ExecutiveCardGrid cards={contributeMattersCards} />
              </motion.div>

              {/* SECTION 3 — Simple Contribution Story */}
              <motion.div
                id="how-contribute-works"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20 scroll-mt-32"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">How AI4I-Contribute Works</h2>
                <p className="text-muted-foreground mb-8">A guided process for creating and improving Language AI assets.</p>
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
                        <img 
                          src={contributeHowItWorks} 
                          alt="How AI4I-Contribute Works" 
                          className="w-full h-auto rounded-lg"
                          loading="eager"
                          fetchPriority="high"
                        />
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <VisuallyHidden>
                      <DialogTitle>How AI4I-Contribute Works</DialogTitle>
                      <DialogDescription>Visual diagram showing the contribution workflow</DialogDescription>
                    </VisuallyHidden>
                    <div className="p-4">
                      <img src={contributeHowItWorks} alt="How AI4I-Contribute Works" className="w-full h-auto" loading="eager" />
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — What Can Be Contributed (Progressive Disclosure) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What Can Be Contributed</h2>
                <CollapsibleCapabilities capabilities={contributeCapabilities} currentExpanded={expandedCapabilities} />
              </motion.div>

              {/* SECTION 5 — Governance & Quality (De-emphasized) */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-20"
              >
                <Collapsible open={showArchitecture} onOpenChange={setShowArchitecture}>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                      <CardContent className="py-6 px-6 flex items-center justify-between">
                        <div>
                          <h2 className="text-xl md:text-2xl font-heading font-bold">Quality, Validation & Governance</h2>
                          <p className="text-sm text-muted-foreground mt-1">Click to explore validation workflows and architecture</p>
                        </div>
                        <ChevronDown 
                          size={24} 
                          className={`text-muted-foreground transition-transform duration-200 ${showArchitecture ? 'rotate-180' : ''}`} 
                        />
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="mt-4">
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
                                <img 
                                  src={contributeArchitectureNew} 
                                  alt="AI4I-Contribute Architecture" 
                                  className="w-full h-auto object-contain rounded-lg"
                                  loading="lazy"
                                />
                              </div>
                            </CardContent>
                          </Card>
                        </DialogTrigger>
                        <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                          <VisuallyHidden>
                            <DialogTitle>AI4I-Contribute Architecture</DialogTitle>
                            <DialogDescription>Architecture diagram showing the data factory</DialogDescription>
                          </VisuallyHidden>
                          <div className="p-6">
                            <img 
                              src={contributeArchitectureNew} 
                              alt="AI4I-Contribute Architecture" 
                              className="w-full h-auto"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>

              {/* SECTION 6 — Contribute in the AI4Inclusion Ecosystem */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="mb-10 text-center">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Contribute in the AI4Inclusion Ecosystem</h2>
                </div>
                <EcosystemFlow steps={contributeEcosystemFlow} />
              </motion.div>

              {/* SECTION 7 — Trust Anchor */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-20"
              >
                <div className="text-center py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl border border-primary/10">
                  <div className="flex justify-center gap-4 mb-6">
                    <Users2 size={32} className="text-primary" />
                    <Globe size={32} className="text-primary" />
                    <CheckCircle size={32} className="text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">A Responsible Path to Inclusive Language AI</h2>
                </div>
              </motion.div>

              {/* SECTION 8 — Final CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/10"
              >
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                    Ready to contribute to AI4Inclusion?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-8">
                    Join the ecosystem shaping inclusive, high-quality Language AI.
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
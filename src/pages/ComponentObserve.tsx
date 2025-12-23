import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, Eye, Shield, TrendingUp, ArrowRight, 
  Activity, AlertTriangle, Database, Bell,
  MessageSquare, CheckCircle, RefreshCcw, ChevronDown,
  Maximize2, ExternalLink, Sparkles, Users, Globe
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

import { DocsLayout } from "@/components/docs/DocsLayout";
import { DocSection } from "@/components/docs/DocSection";

import observeInfographic from "@/assets/observe-infographic.png";
import observeArchitecture from "@/assets/observe-architecture.png";

const ComponentObserve = () => {
  const [expandedCapabilities, setExpandedCapabilities] = useState<string[]>([]);
  const [showDashboards, setShowDashboards] = useState(false);

  const toggleCapability = (id: string) => {
    setExpandedCapabilities(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

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

  // What Observe Enables - Collapsible items
  const observeCapabilities = [
    { id: "usage", title: "Usage & Traffic Monitoring", description: "Full visibility into system usage patterns, request volumes, and resource consumption across all services." },
    { id: "quality", title: "Quality Metrics", description: "Track accuracy, BLEU scores, word error rates, and user satisfaction across languages and models." },
    { id: "health", title: "Model Health Tracking", description: "Monitor model performance, inference latency, throughput, and error rates in real-time." },
    { id: "drift", title: "Drift Detection", description: "Detect model degradation, data drift, and vocabulary evolution before they impact users." },
    { id: "alerts", title: "Alerts & Dashboards", description: "Proactive notifications and unified dashboards for engineers, ML researchers, and administrators." },
    { id: "feedback", title: "Feedback Signals", description: "Explicit, implicit, and governance feedback feed directly into retraining pipelines." }
  ];

  // Ecosystem Flow Steps
  const ecosystemFlow = [
    { icon: <Eye size={20} />, label: "Observe", description: "Insights & signals", highlight: true },
    { icon: <Database size={20} />, label: "Contribute", description: "Data & improvements" },
    { icon: <Globe size={20} />, label: "Orchestrate", description: "Runtime control" }
  ];

  return (
    <DocsLayout>
      {/* Hero Banner */}
      <div className="border-b border-border bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-medium">
                <BarChart3 className="text-primary-foreground" size={28} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              AI4I-Observe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-3 leading-relaxed">
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
              <Button size="lg" variant="outline" className="font-medium" onClick={() => setShowDashboards(true)}>
                View Metrics & Dashboards
                <ExternalLink className="ml-2" size={16} />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* SECTION 2 — Why Observe Matters (Executive Scan) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">Why Observe Matters</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {observeMattersCards.map((card, index) => (
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
            </motion.div>
          </DocSection>

          {/* SECTION 3 — Simple Observability Story */}
          <DocSection>
            <motion.div
              id="how-observe-works"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-mt-32"
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">How AI4I-Observe Monitors Language AI</h2>
              <p className="text-muted-foreground mb-8">Continuous visibility across models, applications, and languages.</p>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4">
                <img 
                  src={observeInfographic} 
                  alt="AI4I-Observe: Unified Telemetry & Governance Architecture" 
                  className="w-full h-auto rounded-xl"
                  loading="eager"
                />
              </div>
            </motion.div>
          </DocSection>

          {/* SECTION 4 — What Observe Enables (Progressive Disclosure) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What Observe Enables</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {observeCapabilities.map((cap, index) => (
                  <Collapsible
                    key={cap.id}
                    open={expandedCapabilities.includes(cap.id)}
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
                              className={`text-muted-foreground transition-transform duration-200 ${expandedCapabilities.includes(cap.id) ? 'rotate-180' : ''}`} 
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
            </motion.div>
          </DocSection>

          {/* SECTION 5 — Dashboards & Metrics (De-emphasized) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Collapsible open={showDashboards} onOpenChange={setShowDashboards}>
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                    <CardContent className="py-6 px-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl md:text-2xl font-heading font-bold">Observe Dashboards</h2>
                        <p className="text-sm text-muted-foreground mt-1">Click to explore dashboard views and architecture</p>
                      </div>
                      <ChevronDown 
                        size={24} 
                        className={`text-muted-foreground transition-transform duration-200 ${showDashboards ? 'rotate-180' : ''}`} 
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
                              src={observeArchitecture} 
                              alt="AI4I-Observe Operational Architecture" 
                              className="w-full h-auto rounded-lg"
                              loading="lazy"
                            />
                          </CardContent>
                        </Card>
                      </DialogTrigger>
                      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                        <VisuallyHidden>
                          <DialogTitle>AI4I-Observe Operational Architecture</DialogTitle>
                          <DialogDescription>Detailed architecture diagram</DialogDescription>
                        </VisuallyHidden>
                        <div className="p-4">
                          <img 
                            src={observeArchitecture} 
                            alt="AI4I-Observe Operational Architecture" 
                            className="w-full h-auto"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </motion.div>
          </DocSection>

          {/* SECTION 6 — Observe in the AI4Inclusion Ecosystem */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Observe in the AI4Inclusion Ecosystem</h2>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
                {ecosystemFlow.map((step, index) => (
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
                    
                    {index < ecosystemFlow.length - 1 && (
                      <ArrowRight className="text-muted-foreground/50 hidden lg:block flex-shrink-0" size={20} />
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </DocSection>

          {/* SECTION 7 — Trust Anchor */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center py-16 px-8 bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl border border-primary/10">
                <div className="flex justify-center gap-4 mb-6">
                  <Eye size={32} className="text-primary" />
                  <Shield size={32} className="text-primary" />
                  <Sparkles size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">Built for Public-Scale Accountability</h2>
              </div>
            </motion.div>
          </DocSection>

          {/* SECTION 8 — Final CTA */}
          <DocSection>
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
                  <a href="https://github.com/COSS-India/observe" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="font-medium shadow-soft hover:shadow-medium transition-all w-full sm:w-auto">
                      Learn More <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </a>
                  <a href="https://github.com/COSS-India/observe/discussions" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="font-medium hover:bg-accent transition-all w-full sm:w-auto">
                      <MessageSquare className="mr-2" size={18} />
                      Discuss
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          </DocSection>
        </div>
      </div>

    </DocsLayout>
  );
};

export default ComponentObserve;
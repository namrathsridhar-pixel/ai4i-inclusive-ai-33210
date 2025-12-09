import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { 
  Globe, BarChart3, Users, CheckCircle, Database, Eye, GitBranch, Shield, 
  TrendingUp, Github, MessageCircle, ArrowRight, Activity, Bell, LineChart,
  Code2, BookOpen, ExternalLink, Maximize2, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import observeInfographic from "@/assets/observe-infographic.png";
import observeArchitecture from "@/assets/observe-architecture.png";

const BuildingBlocks = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("ai4i-core");
  const [showDeepCapabilities, setShowDeepCapabilities] = useState(false);

  useEffect(() => {
    // Handle hash navigation on initial load
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'ai4i-core' || id === 'observe' || id === 'contribute') {
        setActiveSection(id);
      }
    }
  }, [location.hash]);

  const observeCapabilityCards = [
    {
      icon: <LineChart size={24} />,
      title: "Multilingual Model Performance Tracking",
      description: "Monitor accuracy and quality across all supported languages in real-time."
    },
    {
      icon: <Activity size={24} />,
      title: "Drift & Quality Monitoring",
      description: "Detect model degradation and data drift before they impact users."
    },
    {
      icon: <Shield size={24} />,
      title: "Governance & Transparency Reporting",
      description: "Generate compliance reports and audit trails automatically."
    },
    {
      icon: <Database size={24} />,
      title: "Usage, Telemetry & Analytics Visibility",
      description: "Full visibility into system usage patterns and resource consumption."
    },
    {
      icon: <Users size={24} />,
      title: "Multi-Tenant Operational Insights",
      description: "Isolated monitoring views for each tenant with aggregated overviews."
    },
    {
      icon: <Bell size={24} />,
      title: "Alerting & Health Monitoring",
      description: "Proactive notifications when metrics exceed defined thresholds."
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Feedback-Driven Improvement Pipeline",
      description: "Integrate user feedback to continuously improve model quality."
    },
    {
      icon: <CheckCircle size={24} />,
      title: "Evidence-Based Model Evaluation",
      description: "Data-backed evaluation frameworks for model selection and deployment."
    }
  ];

  const processSteps = [
    { number: 1, title: "Collect Telemetry", icon: <Database size={20} /> },
    { number: 2, title: "Normalize & Enrich", icon: <Code2 size={20} /> },
    { number: 3, title: "Aggregate Metrics", icon: <BarChart3 size={20} /> },
    { number: 4, title: "Analyze Quality & Drift", icon: <Activity size={20} /> },
    { number: 5, title: "Alert & Notify", icon: <Bell size={20} /> },
    { number: 6, title: "Improve Models & Systems", icon: <TrendingUp size={20} /> }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* AI4I Core */}
        {activeSection === "ai4i-core" && (
          <section className="pt-32 pb-20 px-4" id="ai4i-core">
            <div className="container mx-auto max-w-6xl">
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

                <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
                  An intelligent orchestrator that routes models for domain-aware multilingual inference with policy-based selection, ensembles, scaling, and SLA-driven performance ensuring accurate, efficient, and context-sensitive inferencing across diverse AI workloads.
                </p>

                {/* Video */}
                <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/5zLdk3-gvYU?si=wTUB-wd8PPjT9kZ_"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                {/* Bottom CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-border/50">
                  <Button asChild size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/ai4i-core" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Learn more
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

                <p className="text-lg md:text-xl text-muted-foreground mb-6">
                  It is a software designed for platforms that serve AI models and need to monitor system health, model performance, and usage across multiple customer organizations. Observe provides complete visibility and control in a multi-tenant environment.
                </p>
              </motion.div>

              {/* SECTION 1 — Refined Overview with Layered Explanation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-12 space-y-6"
              >
                {/* Expandable Deep Capabilities */}
                <div 
                  className="bg-accent/20 rounded-xl p-6 border border-border cursor-pointer hover:bg-accent/30 transition-colors"
                  onClick={() => setShowDeepCapabilities(!showDeepCapabilities)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                      <Eye size={20} className="text-primary" />
                      Deep Capabilities
                    </h3>
                    <ChevronRight 
                      size={20} 
                      className={`text-muted-foreground transition-transform duration-300 ${showDeepCapabilities ? 'rotate-90' : ''}`} 
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Click to explore advanced monitoring features</p>
                  
                  <motion.div
                    initial={false}
                    animate={{ height: showDeepCapabilities ? 'auto' : 0, opacity: showDeepCapabilities ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 mt-4 border-t border-border space-y-3">
                      <p className="text-muted-foreground">
                        AI4I-Observe provides a unified telemetry infrastructure that ingests logs, metrics, traces, and feedback from all AI system components. It normalizes heterogeneous data streams, routes them to appropriate storage backends, and applies intelligent analysis for quality assessment, drift detection, and governance reporting.
                      </p>
                      <p className="text-muted-foreground">
                        The platform supports multi-tenant deployments with isolated views, configurable alerting pipelines, and integration APIs for seamless connection with existing DevOps and MLOps toolchains.
                      </p>
                    </div>
                  </motion.div>
                </div>

                {/* Outcomes Summary */}
                <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                      <TrendingUp size={20} className="text-primary" />
                      Why Observe Matters
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>Build trust in AI deployments with complete operational visibility</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>Ensure fairness and accountability across diverse user populations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>Detect and resolve issues before they impact end users</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                        <span>Drive continuous improvement with data-driven insights</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SECTION 2 — Infographic Panel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Unified Telemetry Architecture</h3>
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4">
                  <img 
                    src={observeInfographic} 
                    alt="AI4I-Observe: Unified Telemetry & Governance Architecture" 
                    className="w-full h-auto rounded-xl"
                  />
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    AI4I-Observe: Unified Telemetry & Governance Architecture
                  </p>
                </div>
              </motion.div>

              {/* SECTION 3 — Interactive Capability Grid */}
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

              {/* SECTION 4 — Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">System Architecture</h3>
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
                        />
                        <p className="text-center text-sm text-muted-foreground mt-4 italic">
                          AI4I-Observe Operational Architecture
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-4">
                      <img 
                        src={observeArchitecture} 
                        alt="AI4I-Observe Operational Architecture" 
                        className="w-full h-auto"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        AI4I-Observe Operational Architecture
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 5 — How Observe Works (Step Flow) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">How Observe Works</h3>
                <div className="relative">
                  {/* Curved connection line - decorative */}
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 hidden lg:block" style={{ transform: 'translateY(-50%)' }} />
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {processSteps.map((step, index) => (
                      <motion.div
                        key={step.number}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="relative"
                      >
                        <Card className="h-full text-center hover:shadow-medium hover:-translate-y-1 transition-all duration-300 bg-background">
                          <CardContent className="pt-6 pb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-primary">
                              {step.icon}
                            </div>
                            <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold mx-auto mb-2">
                              {step.number}
                            </div>
                            <h4 className="text-sm font-heading font-semibold">{step.title}</h4>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
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

              {/* SECTION 7 — Resources Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-16"
              >
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Resources</h3>
                <div className="grid sm:grid-cols-3 gap-4">
                  <a
                    href="https://github.com/COSS-India/observe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <GitBranch size={24} />
                        </div>
                        <h4 className="font-heading font-semibold mb-1">GitHub Repository</h4>
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          View source code <ExternalLink size={12} />
                        </p>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://docs.ai4inclusion.org/observe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <BookOpen size={24} />
                        </div>
                        <h4 className="font-heading font-semibold mb-1">Documentation</h4>
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          Read the docs <ExternalLink size={12} />
                        </p>
                      </CardContent>
                    </Card>
                  </a>

                  <a
                    href="https://github.com/COSS-India/observe/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Card className="h-full hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                      <CardContent className="pt-6 text-center">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <MessageCircle size={24} />
                        </div>
                        <h4 className="font-heading font-semibold mb-1">Discussion Forum</h4>
                        <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                          Join the conversation <ExternalLink size={12} />
                        </p>
                      </CardContent>
                    </Card>
                  </a>
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

                <p className="text-lg md:text-xl text-muted-foreground mb-8 md:mb-12">
                  It is a ready-to-use, customizable interface that connects seamlessly with the Adopter's back-end systems and carries their own branding through simple configuration.
                </p>

                {/* Video */}
                <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
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

                {/* Bottom CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 pt-8 border-t border-border/50">
                  <Button asChild size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/ai4i-contribute" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Learn more
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
              </motion.div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BuildingBlocks;

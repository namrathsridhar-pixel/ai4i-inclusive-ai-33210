import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Globe, BarChart3, Users, CheckCircle, Database, GitBranch, Shield, MessageCircle, ArrowRight, Activity, Maximize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import observeInfographic from "@/assets/observe-infographic.png";
import observeArchitecture from "@/assets/observe-system-architecture.png";
const BuildingBlocks = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("ai4i-core");
  
  useEffect(() => {
    // Handle hash navigation on initial load
    if (location.hash) {
      const id = location.hash.replace('#', '');
      if (id === 'ai4i-core' || id === 'observe' || id === 'contribute') {
        setActiveSection(id);
      }
    }
  }, [location.hash]);
  const observeCapabilityCards = [{
    icon: <Activity size={24} />,
    title: "Real-time visibility into system & model health",
    description: "CPU/GPU load, inference latency, throughput, error rates, and more."
  }, {
    icon: <CheckCircle size={24} />,
    title: "Automated model quality evaluation",
    description: "Across NMT, ASR, TTS, NER, LLMs — with BLEU, WER, hallucination rate, semantic accuracy."
  }, {
    icon: <MessageCircle size={24} />,
    title: "Feedback-driven improvement loops",
    description: "Explicit, implicit, and governance feedback feed directly into retraining pipelines."
  }, {
    icon: <Shield size={24} />,
    title: "Drift & bias detection",
    description: "Monitors domain shifts, dialect patterns, fairness across groups, and vocabulary evolution."
  }, {
    icon: <Database size={24} />,
    title: "Scalable telemetry collection",
    description: "Billions of events processed reliably: user interactions, model switches, errors, session drops."
  }, {
    icon: <GitBranch size={24} />,
    title: "A/B testing, canary releases & safe deployment",
    description: "Compare baseline vs new models, shadow mode evaluations, human-in-the-loop validation."
  }, {
    icon: <Users size={24} />,
    title: "Unified dashboards for all stakeholders",
    description: "Engineers, ML researchers, administrators, communities, product owners."
  }];
  return <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        {/* AI4I Core */}
        {activeSection === "ai4i-core" && <section className="pt-32 pb-20 px-4" id="ai4i-core">
            <div className="container mx-auto max-w-6xl">
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12">
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
                <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden" style={{
              aspectRatio: '16/9'
            }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zLdk3-gvYU?si=wTUB-wd8PPjT9kZ_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
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
          </section>}

        {/* Observe - Enriched Section */}
        {activeSection === "observe" && <section className="pt-32 pb-20 px-4" id="observe">
            <div className="container mx-auto max-w-6xl">
              {/* Hero Header */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12">
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

              {/* SECTION 1 — Infographic Panel (How Observe Works) */}
              <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="mb-16">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">How Observe Works</h3>
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4">
                  <img src={observeInfographic} alt="AI4I-Observe: Unified Telemetry & Governance Architecture" className="w-full h-auto rounded-xl" />
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    AI4I-Observe: Unified Telemetry & Governance Architecture
                  </p>
                </div>
              </motion.div>

              {/* SECTION 2 — Interactive Capability Grid */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-16">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Observe Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
                  {observeCapabilityCards.map((card, index) => <motion.div key={card.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.05
              }}>
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
                    </motion.div>)}
                </div>
              </motion.div>

              {/* SECTION 3 — Architecture Diagram */}
              <motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7
          }} className="mb-16">
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
                        <img src={observeArchitecture} alt="AI4I-Observe Operational Architecture" className="w-full h-auto rounded-lg" />
                        <p className="text-center text-sm text-muted-foreground mt-4 italic">
                          AI4I-Observe Operational Architecture
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-4">
                      <img src={observeArchitecture} alt="AI4I-Observe Operational Architecture" className="w-full h-auto" />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        AI4I-Observe Operational Architecture
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 4 — Video Demo */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-16">
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">See It In Action</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{
              aspectRatio: '16/9'
            }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/i7Tv5sLzic8?si=Ov-z55igMU-RluLW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                </div>
              </motion.div>

              {/* SECTION 5 — Unified CTA */}
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 md:p-12 border border-primary/10">
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
          </section>}

        {/* Contribute */}
        {activeSection === "contribute" && <section className="pt-32 pb-20 px-4" id="contribute">
            <div className="container mx-auto max-w-6xl">
              <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="mb-12">
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
                <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden" style={{
              aspectRatio: '16/9'
            }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_0KqImO7GMs?si=XtYl6ESXYjnYWGK2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
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
          </section>}
      </div>
    </div>;
};
export default BuildingBlocks;
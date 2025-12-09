import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Globe, BarChart3, Users, CheckCircle, Database, GitBranch, Shield, MessageCircle, ArrowRight, Activity, Maximize2, Layers, Route, Gauge, Eye, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import observeInfographic from "@/assets/observe-infographic.png";
import observeArchitecture from "@/assets/observe-system-architecture.png";
import orchestrateHowItWorks from "@/assets/orchestrate-how-it-works.png";
import orchestrateArchitecture from "@/assets/orchestrate-architecture.png";
import contributeHowItWorks from "@/assets/contribute-how-it-works.png";
import contributeArchitecture from "@/assets/contribute-architecture.png";

// Preload images for immediate display
const preloadImages = [observeInfographic, observeArchitecture, orchestrateHowItWorks, orchestrateArchitecture, contributeHowItWorks, contributeArchitecture];
preloadImages.forEach((src) => {
  const img = new Image();
  img.src = src;
});
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
        {/* AI4I Orchestrate */}
        {activeSection === "ai4i-core" && <section className="pt-32 pb-20 px-4" id="ai4i-core">
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
                    <Globe className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Orchestrate</h2>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A unified orchestration layer that delivers secure, governed, high-quality Language AI for every application.
                </p>
              </motion.div>

              {/* SECTION 1 — How Orchestrate Works */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">How Orchestrate Works</h3>
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
                        <img src={orchestrateHowItWorks} alt="How AI4I-Orchestrate Works" className="w-full h-auto rounded-lg" />
                        <p className="text-center text-sm text-muted-foreground mt-4 italic">The Problem vs The Solution: AI4I-Orchestrate's Unified Control Layer</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-4">
                      <img src={orchestrateHowItWorks} alt="How AI4I-Orchestrate Works" className="w-full h-auto" />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        The Problem vs The Solution: AI4I-Orchestrate's Unified Control Layer
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 2 — Why Orchestrate Matters */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Why Orchestrate Matters</h3>
                <Card className="bg-gradient-to-br from-background to-accent/10 border border-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      Modern multilingual applications rely on many AI models—speech, translation, OCR, LLMs, and more—often coming from different vendors and teams. Without a unified control layer, organizations face fragmentation, inconsistent quality, governance risks, and high operational burden. AI4I-Orchestrate provides one governed runtime layer that makes Language AI reliable, compliant, scalable, and easy to integrate across any department or sector. It turns diverse models into dependable digital infrastructure.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SECTION 3 — What Orchestrate Enables */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Orchestrate Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Layers size={24} />, title: "Unified APIs", description: "One consistent API for all Language AI services—speech, translation, LLMs, OCR—simplifying integration across applications." },
                    { icon: <Route size={24} />, title: "Smart Model Routing", description: "Intelligently routes requests to the best model based on language, domain, cost, and performance requirements." },
                    { icon: <Shield size={24} />, title: "Governance & Policy Control", description: "Enforces rules on data access, usage quotas, compliance, and national policies across the entire ecosystem." },
                    { icon: <Gauge size={24} />, title: "Metering & Quotas", description: "Tracks usage, enforces rate limits, and provides cost visibility for sustainable AI operations." },
                    { icon: <Eye size={24} />, title: "Observability & Quality Monitoring", description: "Real-time visibility into model health, quality metrics, and system performance across all services." },
                    { icon: <RefreshCcw size={24} />, title: "Continuous Improvement Loop", description: "Feedback from users and quality monitoring automatically feeds back to improve models over time." }
                  ].map((card, index) => <motion.div key={card.title} initial={{
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

              {/* SECTION 4 — Architecture Diagram */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">AI4I-Orchestrate Architecture</h3>
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
                            src={orchestrateArchitecture} 
                            alt="AI4I-Orchestrate Architecture" 
                            className="w-full h-auto object-contain rounded-lg"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4 italic px-4">
                          This illustrates how Orchestrate unifies ingestion, routing, intelligence, governance, and consumption layers into one runtime for Language AI.
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-6">
                      <img 
                        src={orchestrateArchitecture} 
                        alt="AI4I-Orchestrate Architecture" 
                        className="w-full h-auto"
                        loading="eager"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        AI4I-Orchestrate Architecture: Unified ingestion, routing, intelligence, governance, and consumption layers
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 5 — Orchestrate in the AI4Inclusion Ecosystem */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Orchestrate in the AI4Inclusion Ecosystem</h3>
                <Card className="bg-gradient-to-br from-background to-accent/10 border border-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      AI4I-Orchestrate is the central runtime layer in the AI4Inclusion ecosystem. It works seamlessly with AI4I-Observe for monitoring and quality assurance, and AI4I-Contribute for community-driven data collection. Together, these building blocks form a complete, open-source infrastructure for deploying trustworthy, inclusive Language AI at national scale.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SECTION 6 — Video Demo */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Explore More About Orchestrate</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{
              aspectRatio: '16/9'
            }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5zLdk3-gvYU?si=wTUB-wd8PPjT9kZ_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                </div>
              </motion.div>

              {/* SECTION 7 — Unified CTA */}
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
                        <p className="text-center text-sm text-muted-foreground mt-4 italic">AI4I-Observe System Architecture</p>
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
                    <Users className="text-primary-foreground" size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Contribute</h2>
                </div>

                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  A community-powered application for collecting, validating, and improving language datasets across regions, accents, and domains.
                </p>
              </motion.div>

              {/* SECTION 1 — How Contribute Works */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">How Contribute Works</h3>
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
                          decoding="async"
                          fetchPriority="high"
                        />
                        <p className="text-center text-sm text-muted-foreground mt-4 italic">Overcoming challenges in creating diverse, multilingual datasets with a unified, public platform as a Digital Public Good.</p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-4">
                      <img src={contributeHowItWorks} alt="How AI4I-Contribute Works" className="w-full h-auto" />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        The Challenge vs The Solution: AI4I-Contribute's Unified Data Collection Platform
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 2 — Why Contribute Matters */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Why Contribute Matters</h3>
                <Card className="bg-gradient-to-br from-background to-accent/10 border border-border">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      High-quality datasets are the foundation of accurate speech, translation, and LLM systems — but most Indian and global languages lack sufficient training data. Regional dialects, accents, domain-specific terminology, and under-represented communities are rarely included. AI4I-Contribute solves this by enabling citizens, institutions, and developers to collectively build inclusive language datasets that power better Language AI for everyone. It turns data creation into a participatory public good.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SECTION 3 — What Contribute Enables */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">What Contribute Enables</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    { icon: <Users size={24} />, title: "Community Voice Collection", description: "Citizens record speech or read curated sentences to build diverse language datasets." },
                    { icon: <CheckCircle size={24} />, title: "Built-in Validation Workflows", description: "Validators review recordings for accuracy, clarity, pronunciation, and noise quality." },
                    { icon: <Database size={24} />, title: "Dataset Governance", description: "Track contributors, validation history, dataset maturity, and quality metadata." },
                    { icon: <Globe size={24} />, title: "Domain-Specific Campaigns", description: "Organizations can launch campaigns for agriculture, education, healthcare, financial inclusion, etc." },
                    { icon: <Activity size={24} />, title: "Dialect & Accent Coverage", description: "Capture speech variations across regions to improve model performance and inclusivity." },
                    { icon: <RefreshCcw size={24} />, title: "Seamless Model Improvement Loop", description: "Validated datasets feed into model training pipelines and become available to Orchestrate and Observe." }
                  ].map((card, index) => <motion.div key={card.title} initial={{
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

              {/* SECTION 4 — What Contribute Powers */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Visualize What Contribute Powers</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {[
                    { icon: <BarChart3 size={32} />, title: "Better ASR (Speech-to-Text) Models", description: "Shows improved recognition accuracy across dialects." },
                    { icon: <Globe size={32} />, title: "Stronger Translation & Multilingual LLMs", description: "Enables models to learn real expressions from real speakers." },
                    { icon: <Users size={32} />, title: "Inclusive Public Service Applications", description: "Voice-based helplines, IVRs, chatbots, ed-tech platforms, agricultural apps, etc." },
                    { icon: <Database size={32} />, title: "Local Language Preservation", description: "Stores community voices and linguistic diversity for future datasets and research." }
                  ].map((card, index) => <motion.div key={card.title} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.4,
                delay: index * 0.1
              }}>
                      <Card className="h-full group hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5">
                        <CardContent className="pt-8 pb-8 text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                            {card.icon}
                          </div>
                          <h4 className="font-heading font-bold text-lg mb-2">{card.title}</h4>
                          <p className="text-sm text-muted-foreground">{card.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>)}
                </div>
              </motion.div>

              {/* SECTION 5 — Architecture Diagram */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Contribute Architecture Overview</h3>
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
                            src={contributeArchitecture} 
                            alt="AI4I-Contribute Architecture" 
                            className="w-full h-auto object-contain rounded-lg"
                            loading="eager"
                            decoding="async"
                            fetchPriority="high"
                          />
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-4 italic px-4">
                          This illustrates how recording tasks, validation workflows, governance metadata, and dataset packaging flow through the Contribute system.
                        </p>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-[98vw] w-[98vw] max-h-[95vh] p-0 bg-background overflow-auto">
                    <div className="p-6">
                      <img 
                        src={contributeArchitecture} 
                        alt="AI4I-Contribute Architecture" 
                        className="w-full h-auto"
                        loading="eager"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        AI4I-Contribute Architecture: Operations inputs, ingestion, routing, storage, intelligence, and consumption layers
                      </p>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>

              {/* SECTION 6 — Contribute in the AI4Inclusion Ecosystem */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Contribute in the AI4Inclusion Ecosystem</h3>
                <Card className="bg-gradient-to-br from-background to-accent/10 border border-border">
                  <CardContent className="pt-6">
                    <div className="space-y-3 text-muted-foreground leading-relaxed">
                      <p><strong className="text-foreground">Communities & Institutions</strong> → Record and validate speech</p>
                      <p><strong className="text-foreground">Contribute</strong> → Packages high-quality datasets</p>
                      <p><strong className="text-foreground">Model Developers</strong> → Train ASR, TTS, NMT, or LLM models</p>
                      <p><strong className="text-foreground">Orchestrate</strong> → Hosts and routes models for applications</p>
                      <p><strong className="text-foreground">Observe</strong> → Monitors model accuracy and drift</p>
                      <p><strong className="text-foreground">Applications</strong> → Deliver citizen-facing services in every language</p>
                      <p className="pt-3 border-t border-border/50 mt-4 font-medium text-foreground">
                        Contribute acts as the data backbone that fuels continuous improvement of Language AI.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SECTION 7 — Video Demo */}
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
                <h3 className="text-xl md:text-2xl font-heading font-bold mb-6">Explore More About Contribute</h3>
                <div className="w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-lg border border-border" style={{
              aspectRatio: '16/9'
            }}>
                  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_0KqImO7GMs?si=XtYl6ESXYjnYWGK2" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="w-full h-full" />
                </div>
              </motion.div>

              {/* SECTION 8 — Unified CTA */}
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
          </section>}
      </div>
    </div>;
};
export default BuildingBlocks;
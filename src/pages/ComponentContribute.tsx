import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Users, Database, GitBranch, Award, ArrowRight, 
  Globe, CheckCircle, Users2, FileCheck, ChevronDown,
  Maximize2, ExternalLink, MessageSquare, Sparkles, Eye, Shield
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

import contributeHowItWorks from "@/assets/contribute-how-it-works.png";
import contributeArchitecture from "@/assets/contribute-architecture-new.png";

const ComponentContribute = () => {
  const [expandedCapabilities, setExpandedCapabilities] = useState<string[]>([]);
  const [showGovernance, setShowGovernance] = useState(false);

  const toggleCapability = (id: string) => {
    setExpandedCapabilities(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

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
      icon: <Award size={28} />,
      title: "Recognition & Trust",
      description: "Transparent contribution processes with attribution and certification."
    }
  ];

  // What Can Be Contributed - Collapsible items
  const contributeCapabilities = [
    { id: "speech", title: "Speech Data", description: "Citizens record speech or read curated sentences to build diverse language datasets across dialects and accents." },
    { id: "text", title: "Text Data", description: "Contribute text corpora, translations, and multilingual content for training and evaluation." },
    { id: "annotations", title: "Annotations", description: "Add labels, metadata, and quality markers to improve dataset usability." },
    { id: "evaluation", title: "Evaluation Datasets", description: "Create benchmark datasets for measuring model performance and quality." },
    { id: "feedback", title: "Feedback Signals", description: "Provide corrections, ratings, and improvement suggestions from real-world usage." }
  ];

  // Ecosystem Flow Steps
  const ecosystemFlow = [
    { icon: <Database size={20} />, label: "Contribute", description: "Data & improvements", highlight: true },
    { icon: <Globe size={20} />, label: "Orchestrate", description: "Routes & hosts models" },
    { icon: <Eye size={20} />, label: "Observe", description: "Monitors quality" },
    { icon: <Database size={20} />, label: "Contribute", description: "Guided by insights" }
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
                <Users className="text-primary-foreground" size={28} />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              AI4I-Contribute
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-3 leading-relaxed">
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
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* SECTION 2 — Why Contribute Matters (Executive Scan) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-10">Why Contribute Matters</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {contributeMattersCards.map((card, index) => (
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

          {/* SECTION 3 — Simple Contribution Story */}
          <DocSection>
            <motion.div
              id="how-contribute-works"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="scroll-mt-32"
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
          </DocSection>

          {/* SECTION 4 — What Can Be Contributed (Progressive Disclosure) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-bold mb-8">What Can Be Contributed</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {contributeCapabilities.map((cap, index) => (
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

          {/* SECTION 5 — Governance & Quality (De-emphasized) */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <Collapsible open={showGovernance} onOpenChange={setShowGovernance}>
                <CollapsibleTrigger asChild>
                  <Card className="cursor-pointer hover:shadow-md hover:border-primary/30 transition-all duration-200">
                    <CardContent className="py-6 px-6 flex items-center justify-between">
                      <div>
                        <h2 className="text-xl md:text-2xl font-heading font-bold">Quality, Validation & Governance</h2>
                        <p className="text-sm text-muted-foreground mt-1">Click to explore validation workflows and architecture</p>
                      </div>
                      <ChevronDown 
                        size={24} 
                        className={`text-muted-foreground transition-transform duration-200 ${showGovernance ? 'rotate-180' : ''}`} 
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
                                src={contributeArchitecture} 
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
                            src={contributeArchitecture} 
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
          </DocSection>

          {/* SECTION 6 — Contribute in the AI4Inclusion Ecosystem */}
          <DocSection>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-10 text-center">
                <h2 className="text-2xl md:text-3xl font-heading font-bold mb-2">Contribute in the AI4Inclusion Ecosystem</h2>
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
                  <Users2 size={32} className="text-primary" />
                  <Globe size={32} className="text-primary" />
                  <Sparkles size={32} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold">A Responsible Path to Inclusive Language AI</h2>
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
                  Ready to contribute to AI4Inclusion?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Join the ecosystem shaping inclusive, high-quality Language AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://github.com/COSS-India/ai4i-contribute" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="font-medium shadow-soft hover:shadow-medium transition-all w-full sm:w-auto">
                      Learn More <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </a>
                  <a href="https://github.com/COSS-India/ai4i-contribute/discussions" target="_blank" rel="noopener noreferrer">
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

export default ComponentContribute;
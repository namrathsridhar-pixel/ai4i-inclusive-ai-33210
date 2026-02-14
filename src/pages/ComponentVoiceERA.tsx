import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import { 
  Shield, Zap, ArrowRight, Mic2,
  Layers, Users, Mic,
  MessageCircle, Activity, Lock, Maximize2,
  Network, Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocSection } from "@/components/docs/DocSection";

import voiceraSovereignStack from "@/assets/voicera-sovereign-stack.png";
import voiceraSovereignVoiceLayer from "@/assets/voicera-ecosystem-pillars.png";
import voiceraSovereignInfra from "@/assets/voiceera-sovereign-infrastructure.png";
import VoiceraInterestForm from "@/components/VoiceraInterestForm";


const ComponentVoiceERA = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [interestFormOpen, setInterestFormOpen] = useState(false);
  

  useEffect(() => {
    if (searchParams.get("showInterest") === "true") {
      setInterestFormOpen(true);
      searchParams.delete("showInterest");
      setSearchParams(searchParams, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const whyMattersCards = [
    {
      icon: <Activity size={24} />,
      title: "Citizen-Scale Infrastructure",
      description: "Built to power large public systems with predictable, sub-second voice performance across millions of concurrent interactions.",
    },
    {
      icon: <Shield size={24} />,
      title: "Deployment Without Dependency",
      description: "Runs fully on-premises or within national cloud environments with no mandatory third-party cloud reliance.",
    },
    {
      icon: <Zap size={24} />,
      title: "Indic-First & Inclusive",
      description: "Native support for Indian languages, accents, and code-switching, expanding access beyond text-first systems.",
    },
    {
      icon: <Network size={24} />,
      title: "Open & Interoperable Architecture",
      description: "Model-agnostic and pluggable stack enabling seamless switching between open-source and proprietary AI models.",
    },
    {
      icon: <Eye size={24} />,
      title: "Transparent & Policy-Aligned",
      description: "Clear data handling processes, embedded guardrails, and interpretability, ensuring visibility into how models operate and use data.",
    },
    {
      icon: <Layers size={24} />,
      title: "Foundational Voice Layer",
      description: "Designed to power ecosystems and platforms, not just standalone applications or chatbots.",
    },
  ];

  const enablesCards = [
    {
      icon: <Users size={24} />,
      title: "Large-Scale Voice Services",
      description: "Enables millions of users to securely access AI systems through natural voice interfaces across public and enterprise services.",
    },
    {
      icon: <Mic size={24} />,
      title: "Real-Time Multilingual Interaction",
      description: "Low-latency conversational voice experiences across Indian languages and code-switched speech.",
    },
    {
      icon: <Lock size={24} />,
      title: "Secure & Controlled Deployment",
      description: "Operates fully within regulated, on-premise, or air-gapped environments.",
    },
    {
      icon: <Network size={24} />,
      title: "Model Portability & Ecosystem Growth",
      description: "Allows adopters to switch AI providers without losing learnings while benefiting from open-source improvements.",
    },
    {
      icon: <Layers size={24} />,
      title: "Voice as Digital Public Infrastructure",
      description: "Establishes voice as a foundational infrastructure layer that public systems and national platforms can build upon.",
    },
    {
      icon: <Eye size={24} />,
      title: "Interpretability & Data Transparency",
      description: "Ensures clear visibility into how raw data is processed, stored, and used within the voice stack, enabling institutions to understand model behavior, enforce guardrails, and maintain trust in AI-driven systems.",
    },
  ];


  return (
    <DocsLayout>
      {/* Hero Banner */}
      <div className="border-b border-border bg-gradient-to-b from-accent/30 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-medium">
                <Mic2 className="text-primary-foreground" size={24} />
              </div>
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                Component
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
              AI4I-<span className="font-gonzaga">VoicERA</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              Where a policy-governed voice stack powers real-time conversations.
            </p>
            <div className="flex gap-3">
              <Button size="lg" onClick={() => setInterestFormOpen(true)}>
                Show Interest
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">

          {/* How AI4I-VoicERA Enables Sovereign Voice AI at National Scale */}
          <DocSection>
            <SectionHeading id="overview" level={2}>
              How AI4I-VoicERA Enables Sovereign Voice AI at National Scale
            </SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Real-time, multilingual voice systems built for India's public and enterprise platforms.
            </p>
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
                    <div style={{ aspectRatio: "16/9" }} className="w-full overflow-hidden rounded-lg bg-muted/20">
                      <img
                        src={voiceraSovereignStack}
                        alt="VoicERA: Creating a Sovereign Stack for Open Voice AI"
                        className="w-full h-full object-contain rounded-lg"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                <VisuallyHidden>
                  <DialogTitle>VoicERA: Creating a Sovereign Stack for Open Voice AI</DialogTitle>
                  <DialogDescription>Overview diagram of VoicERA architecture and capabilities</DialogDescription>
                </VisuallyHidden>
                <div className="p-4">
                  <img 
                    src={voiceraSovereignStack} 
                    alt="VoicERA: Creating a Sovereign Stack for Open Voice AI" 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </DocSection>

          {/* Why VoicERA Matters */}
          <DocSection>
            <SectionHeading id="why-voiceera-matters" level={2}>
              Why AI4I-VoicERA Matters
            </SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Citizen-scale, real-time voice AI designed for secure and scalable public systems.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {whyMattersCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full group bg-gradient-to-br from-card to-accent/5 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6 pb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {card.icon}
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">{card.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* AI4I-VoicERA: The Sovereign Voice Layer for Language AI */}
          <DocSection>
            <SectionHeading id="capabilities" level={2}>
              AI4I-VoicERA: The Sovereign Voice Layer for Language AI
            </SectionHeading>
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
                    <div style={{ aspectRatio: "16/9" }} className="w-full overflow-hidden rounded-lg bg-muted/20">
                      <img
                        src={voiceraSovereignVoiceLayer}
                        alt="VoicERA: India's Sovereign Voice Infrastructure"
                        className="w-full h-full object-contain rounded-lg"
                        loading="eager"
                        decoding="sync"
                        fetchPriority="high"
                      />
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                <VisuallyHidden>
                  <DialogTitle>VoicERA: India's Sovereign Voice Infrastructure</DialogTitle>
                  <DialogDescription>Infrastructure diagram showing VoicERA's architecture and performance</DialogDescription>
                </VisuallyHidden>
                <div className="p-4">
                    <img 
                      src={voiceraSovereignVoiceLayer}
                    alt="VoicERA: India's Sovereign Voice Infrastructure" 
                    className="w-full h-auto"
                    loading="eager"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </DocSection>

          {/* What VoicERA Enables */}
          <DocSection>
            <SectionHeading id="what-enables" level={2}>
              What AI4I-VoicERA Enables
            </SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {enablesCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <Card className="h-full group bg-gradient-to-br from-card to-accent/5 border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6 pb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {card.icon}
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">{card.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* Explore More About VoicERA - Video */}
          <DocSection>
            <SectionHeading id="demo" level={2}>
              Explore More About AI4I-VoicERA
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-border"
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/PFPzxniv1p8"
                title="VoicERA Overview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          </DocSection>

          {/* Final CTA */}
          <DocSection>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ready to explore AI4I-VoicERA?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn how to implement sovereign voice AI in your applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="min-w-[160px]" onClick={() => setInterestFormOpen(true)}>
                    Show Interest
                  </Button>
                  <Button asChild size="lg" variant="outline" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/voicera_mono_repository" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DocSection>

          {/* VoicERA Interest Form Dialog */}
          <Dialog open={interestFormOpen} onOpenChange={setInterestFormOpen}>
            <DialogContent className="max-w-lg p-0 bg-background overflow-auto max-h-[90vh]">
              <VisuallyHidden>
                <DialogTitle>Show Interest in VoicERA</DialogTitle>
                <DialogDescription>Register your interest in VoicERA</DialogDescription>
              </VisuallyHidden>
              <div className="p-1">
                <VoiceraInterestForm />
              </div>
            </DialogContent>
          </Dialog>

        </div>
      </div>
    </DocsLayout>
  );
};

export default ComponentVoiceERA;

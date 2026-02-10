import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Shield, Zap, ArrowRight, 
  Play, Layers, Radio, Users, Mic,
  MessageCircle, Activity, Lock, Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { DocSection } from "@/components/docs/DocSection";
import { PreloadedImage } from "@/components/ui/preloaded-image";
import voiceraOverview from "@/assets/voiceera-overview.png";
import voiceraSovereignInfra from "@/assets/voiceera-sovereign-infrastructure.png";

const ComponentVoiceERA = () => {
  const [videoModal, setVideoModal] = useState(false);

  const whyMattersCards = [
    {
      icon: <Activity size={24} />,
      title: "National-Scale Reliability",
      description: "Built to support millions of concurrent voice interactions with predictable, sub-second performance across public and enterprise systems.",
    },
    {
      icon: <Shield size={24} />,
      title: "Sovereign by Design",
      description: "Runs fully on-premises with no mandatory cloud dependency, ensuring compliance with India's data protection and security requirements.",
    },
    {
      icon: <Radio size={24} />,
      title: "Indic-First Voice Access",
      description: "Native support for Indian languages, accents, and code-switching enables inclusive access beyond text-first interfaces.",
    },
    {
      icon: <Layers size={24} />,
      title: "Foundational Infrastructure",
      description: "A core voice layer designed to power ecosystems and platforms—not just individual applications or chatbots.",
    },
  ];

  const enablesCards = [
    {
      icon: <Users size={24} />,
      title: "Citizen-Scale Voice Services",
      description: "Enables millions of users to access AI systems through natural voice interfaces across public and enterprise services.",
    },
    {
      icon: <Mic size={24} />,
      title: "Real-Time Multilingual Interaction",
      description: "Supports low-latency, conversational voice interactions across Indian languages and code-switched speech.",
    },
    {
      icon: <Lock size={24} />,
      title: "Sovereign & Secure Deployment",
      description: "Allows voice AI systems to run fully on-premises, including in air-gapped and regulated environments.",
    },
    {
      icon: <Layers size={24} />,
      title: "Voice as Digital Public Infrastructure",
      description: "Establishes voice as a foundational layer that other AI4I components and ecosystems can build upon.",
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
                <Phone className="text-primary-foreground" size={24} />
              </div>
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                Component
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              VoiceERA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              A production-grade, open-source Voice Operating System built for citizen-scale, real-time, multilingual voice services—designed to run on-premises with full data sovereignty.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">

          {/* How AI4I-VoiceERA Enables Sovereign Voice AI at National Scale */}
          <DocSection>
            <SectionHeading id="overview" level={2}>
              How AI4I-VoiceERA Enables Sovereign Voice AI at National Scale
            </SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Real-time, multilingual voice infrastructure built for India's public and enterprise systems.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
                        src={voiceraOverview}
                        alt="VoiceERA: India's Sovereign Voice Operating System"
                        className="rounded-lg"
                        containerClassName="rounded-lg"
                        aspectRatio="16/9"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                  <VisuallyHidden>
                    <DialogTitle>VoiceERA: India's Sovereign Voice Operating System</DialogTitle>
                    <DialogDescription>Overview diagram of VoiceERA architecture and capabilities</DialogDescription>
                  </VisuallyHidden>
                  <div className="p-4">
                    <img 
                      src={voiceraOverview} 
                      alt="VoiceERA: India's Sovereign Voice Operating System" 
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </DocSection>

          {/* Why VoiceERA Matters */}
          <DocSection>
            <SectionHeading id="why-voiceera-matters" level={2}>
              Why VoiceERA Matters
            </SectionHeading>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sovereign voice infrastructure for citizen-scale, real-time AI systems.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6">
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

          {/* AI4I-VoiceERA: The Sovereign Voice Layer for Language AI */}
          <DocSection>
            <SectionHeading id="capabilities" level={2}>
              AI4I-VoiceERA: The Sovereign Voice Layer for Language AI
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
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
                        src={voiceraSovereignInfra}
                        alt="VoiceERA: India's Sovereign Voice Infrastructure"
                        className="rounded-lg"
                        containerClassName="rounded-lg"
                        aspectRatio="16/9"
                      />
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-background overflow-auto">
                  <VisuallyHidden>
                    <DialogTitle>VoiceERA: India's Sovereign Voice Infrastructure</DialogTitle>
                    <DialogDescription>Infrastructure diagram showing VoiceERA's sovereign architecture and performance</DialogDescription>
                  </VisuallyHidden>
                  <div className="p-4">
                    <img 
                      src={voiceraSovereignInfra} 
                      alt="VoiceERA: India's Sovereign Voice Infrastructure" 
                      className="w-full h-auto"
                      loading="eager"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </DocSection>

          {/* What VoiceERA Enables */}
          <DocSection>
            <SectionHeading id="what-enables" level={2}>
              What VoiceERA Enables
            </SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {enablesCards.map((card, index) => (
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
          </DocSection>

          {/* Explore More About VoiceERA - Video */}
          <DocSection>
            <SectionHeading id="demo" level={2}>
              Explore More About VoiceERA
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="w-full aspect-video bg-muted rounded-xl overflow-hidden border border-border shadow-soft flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Play size={28} className="text-primary ml-1" />
                  </div>
                  <p className="text-muted-foreground text-sm">Video coming soon</p>
                </div>
              </Card>
            </motion.div>
          </DocSection>

          {/* Final CTA */}
          <DocSection>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ready to explore VoiceERA?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn how to implement sovereign voice infrastructure in your applications.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/voicera_mono_repository" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/voicera_mono_repository/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      <MessageCircle size={16} />
                      Discuss
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </DocSection>
        </div>
      </div>
    </DocsLayout>
  );
};

export default ComponentVoiceERA;

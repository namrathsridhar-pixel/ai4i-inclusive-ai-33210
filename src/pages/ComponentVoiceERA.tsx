import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mic, Shield, Zap, Server, Globe, ArrowRight, 
  BookOpen, Code2, Play, CheckCircle, XCircle, 
  Layers, Gauge, Radio, Brain, Database, Box,
  Building2, Siren, Headphones, GraduationCap, Lock,
  Rocket, MessageCircle, GitBranch, Container, Maximize2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSection } from "@/components/docs/DocSection";

const ComponentVoiceERA = () => {
  const [videoModal, setVideoModal] = useState(false);

  const whatItIs = [
    "A Voice Operating System, not a chatbot",
    "A Voice-in-a-Box appliance with no mandatory cloud dependency",
    "Full-stack control over Telephony, STT, LLM, and TTS",
    "Indic-first engineering with native Indian language support",
    "A Digital Public Infrastructure governed as open source",
  ];

  const whatItIsNot = [
    "Not a SaaS platform",
    "Not cloud-only",
    "Not a black-box API",
    "Not a demo or prototype system",
  ];

  const problemPoints = [
    "Cloud-only voice platforms violate sovereignty and DPDP norms",
    "Per-minute pricing causes runaway costs at scale",
    "Poor handling of Indian accents and code-switching",
    "High and unpredictable voice latency",
    "Zero transparency or control over AI behavior",
  ];

  const indiaStackLayers = [
    { label: "VoiceERA", sublabel: "Voice Layer", highlight: true },
    { label: "DEPA", sublabel: "Data Layer", highlight: false },
    { label: "UPI", sublabel: "Payments", highlight: false },
    { label: "Aadhaar", sublabel: "Identity", highlight: false },
  ];

  const capabilities = {
    realtime: [
      { title: "Streaming STT & TTS", description: "No buffering—real-time speech processing" },
      { title: "Barge-in Support", description: "Interrupt mid-sentence, just like a real conversation" },
      { title: "Full-duplex Audio", description: "Simultaneous send and receive for natural interaction" },
    ],
    intelligence: [
      { title: "Multi-turn Reasoning", description: "Conversational context maintained across turns" },
      { title: "Native Code-switching", description: "Hinglish, Tanglish, and other mixed-language patterns" },
      { title: "Retrieval-Augmented Generation", description: "Ground responses in domain-specific knowledge" },
    ],
    infrastructure: [
      { title: "SIP / PSTN / VoIP", description: "Full telephony protocol support" },
      { title: "Horizontally Scalable", description: "Scale from 10 to 10,000 concurrent calls" },
      { title: "Enterprise Integrations", description: "CRM, ERP, and custom API connectors" },
    ],
  };

  const performanceMetrics = [
    { label: "End-to-end Latency", value: "500–800 ms", description: "Sub-second voice response" },
    { label: "Pipeline", value: "Streaming", description: "ASR → LLM → TTS streaming pipeline" },
    { label: "Stability", value: "P95/P99", description: "Optimized for tail-latency stability" },
  ];

  const architectureComponents = [
    { icon: <Phone size={20} />, label: "Telephony Gateway" },
    { icon: <Layers size={20} />, label: "Voice Orchestration" },
    { icon: <Server size={20} />, label: "Backend APIs" },
    { icon: <Database size={20} />, label: "Storage" },
    { icon: <Mic size={20} />, label: "STT Service" },
    { icon: <Brain size={20} />, label: "LLM / RAG" },
    { icon: <Radio size={20} />, label: "TTS Service" },
  ];

  const useCases = [
    { icon: <Building2 size={24} />, sector: "Government", items: ["Emergency services (112)", "Welfare and grievance systems"] },
    { icon: <Headphones size={24} />, sector: "Enterprise", items: ["Voice banking", "BPO automation"] },
    { icon: <Lock size={24} />, sector: "Strategic", items: ["Defense & secure communications", "Startup ecosystem enablement"] },
    { icon: <GraduationCap size={24} />, sector: "Education", items: ["Assessments", "Voice-based learning"] },
  ];

  const comparisonRows = [
    { dimension: "Deployment", saas: "Cloud-only", voiceera: "On-prem / hybrid / edge" },
    { dimension: "Cost Model", saas: "OpEx per minute", voiceera: "CapEx one-time" },
    { dimension: "Language Focus", saas: "English-first", voiceera: "Bharat-native" },
    { dimension: "Transparency", saas: "Black-box", voiceera: "Fully transparent" },
    { dimension: "Connectivity", saas: "Internet-dependent", voiceera: "Air-gapped capable" },
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 leading-tight">
              VoiceERA
            </h1>
            <p className="text-lg md:text-xl text-primary/80 font-medium mb-4">
              India's Sovereign Voice Operating System
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-6">
              A production-grade, open-source Voice Operating System built for citizen-scale, real-time, multilingual voice services—designed to run on-premises with full data sovereignty.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Sovereign", "On-Premises", "Open Source"].map((badge) => (
                <span key={badge} className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">

          {/* What VoiceERA Is / Is Not */}
          <DocSection>
            <SectionHeading id="what-it-is" level={2}>
              What VoiceERA Is
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-background">
                <CardHeader>
                  <CardTitle className="text-lg font-heading flex items-center gap-2">
                    <CheckCircle size={20} className="text-primary" /> What It Is
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {whatItIs.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle size={16} className="text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
              <Card className="border-destructive/20 bg-gradient-to-br from-destructive/5 to-background">
                <CardHeader>
                  <CardTitle className="text-lg font-heading flex items-center gap-2">
                    <XCircle size={20} className="text-destructive" /> What It Is Not
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {whatItIsNot.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <XCircle size={16} className="text-destructive mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </DocSection>

          {/* Problem Section */}
          <DocSection>
            <SectionHeading id="problem" level={2}>
              Why Existing Voice Systems Fail
            </SectionHeading>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {problemPoints.map((point, index) => (
                  <motion.div
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                  >
                    <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border-border/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-destructive/10 rounded-lg flex items-center justify-center text-destructive flex-shrink-0">
                            <XCircle size={16} />
                          </div>
                          <p className="text-sm text-muted-foreground">{point}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* The Gap Callout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border-primary/20 shadow-lg">
                  <CardContent className="py-6 text-center">
                    <p className="text-lg font-heading font-bold text-foreground">
                      What's missing is <span className="text-primary">voice infrastructure</span>, not another API.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </DocSection>

          {/* Why It Matters - India Stack */}
          <DocSection>
            <SectionHeading id="why-it-matters" level={2}>
              Why VoiceERA Matters
            </SectionHeading>
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  India's first sovereign voice infrastructure layer—designed as the Voice Layer of India Stack. Full compliance with DPDP and sensitive-sector requirements. Eliminates foreign cloud dependency for voice AI.
                </p>
              </div>

              {/* India Stack Diagram */}
              <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
                {indiaStackLayers.map((layer, index) => (
                  <motion.div
                    key={layer.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="w-full"
                  >
                    <Card className={`${layer.highlight
                      ? 'bg-gradient-to-r from-primary/20 to-primary/5 border-primary/30 shadow-lg'
                      : 'bg-card/50 border-border/50'
                    }`}>
                      <CardContent className="py-4 flex items-center justify-between">
                        <span className={`font-heading font-bold ${layer.highlight ? 'text-primary text-lg' : 'text-foreground'}`}>
                          {layer.label}
                        </span>
                        <span className="text-sm text-muted-foreground">{layer.sublabel}</span>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </DocSection>

          {/* Core Capabilities */}
          <DocSection>
            <SectionHeading id="capabilities" level={2}>
              Core Capabilities
            </SectionHeading>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Real-Time Voice", icon: <Radio size={24} />, items: capabilities.realtime },
                { title: "Intelligence", icon: <Brain size={24} />, items: capabilities.intelligence },
                { title: "Infrastructure", icon: <Server size={24} />, items: capabilities.infrastructure },
              ].map((category, catIdx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                >
                  <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-primary">
                        {category.icon}
                      </div>
                      <CardTitle className="text-lg font-heading">{category.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {category.items.map((item) => (
                        <div key={item.title}>
                          <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                          <p className="text-xs text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* Performance */}
          <DocSection>
            <SectionHeading id="performance" level={2}>
              Performance
            </SectionHeading>
            <div className="grid sm:grid-cols-3 gap-6">
              {performanceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5">
                    <CardContent className="pt-8 pb-8">
                      <p className="text-3xl font-heading font-bold text-primary mb-2">{metric.value}</p>
                      <p className="font-semibold text-sm mb-1">{metric.label}</p>
                      <p className="text-xs text-muted-foreground">{metric.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* Technical Architecture */}
          <DocSection>
            <SectionHeading id="architecture" level={2}>
              Technical Architecture
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              {/* Architecture placeholder diagram using component cards */}
              <Card className="bg-card p-6">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                    {architectureComponents.map((comp, index) => (
                      <motion.div
                        key={comp.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex flex-col items-center p-4 rounded-xl border border-border/50 bg-gradient-to-br from-accent/10 to-background hover:border-primary/30 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                          {comp.icon}
                        </div>
                        <span className="text-xs font-medium text-center">{comp.label}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3 justify-center">
                    {["Provider-agnostic", "100% open protocols", "Dockerized deployment"].map((tag) => (
                      <span key={tag} className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground mt-4 italic">
                    Architecture diagram — placeholder (final image pending)
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </DocSection>

          {/* Hardware & Deployment */}
          <DocSection>
            <SectionHeading id="deployment" level={2}>
              Voice-in-a-Box Deployment
            </SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: <Zap size={24} />, title: "Rapid Deployment", description: "30–60 minutes from unbox to production" },
                { icon: <Shield size={24} />, title: "Air-gapped Capable", description: "No internet required after setup" },
                { icon: <Server size={24} />, title: "On-prem / Hybrid / Edge", description: "Deploy anywhere—data center, edge, or field" },
                { icon: <Container size={24} />, title: "Dockerized", description: "Containerized services for portability" },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {item.icon}
                      </div>
                      <h4 className="font-heading font-semibold text-sm mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* Use Cases */}
          <DocSection>
            <SectionHeading id="use-cases" level={2}>
              Use Cases
            </SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {useCases.map((uc, index) => (
                <motion.div
                  key={uc.sector}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full group hover:shadow-lg hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-gradient-to-br from-card to-accent/5">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        {uc.icon}
                      </div>
                      <h4 className="font-heading font-bold text-base mb-3">{uc.sector}</h4>
                      <ul className="space-y-1.5">
                        {uc.items.map((item) => (
                          <li key={item} className="text-xs text-muted-foreground flex items-start gap-2">
                            <CheckCircle size={12} className="text-primary mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* Comparison */}
          <DocSection>
            <SectionHeading id="comparison" level={2}>
              Cloud SaaS vs VoiceERA
            </SectionHeading>
            <Card>
              <CardContent className="pt-6 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-heading font-semibold text-muted-foreground">Dimension</th>
                      <th className="text-left py-3 px-4 font-heading font-semibold text-muted-foreground">Cloud SaaS</th>
                      <th className="text-left py-3 px-4 font-heading font-semibold text-primary">VoiceERA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => (
                      <tr key={row.dimension} className="border-b border-border/50 last:border-0">
                        <td className="py-3 px-4 font-medium">{row.dimension}</td>
                        <td className="py-3 px-4 text-muted-foreground">{row.saas}</td>
                        <td className="py-3 px-4 text-primary font-medium">{row.voiceera}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </DocSection>

          {/* Video Placeholder */}
          <DocSection>
            <SectionHeading id="demo" level={2}>
              See It In Action
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

          {/* Getting Started */}
          <DocSection>
            <SectionHeading id="getting-started" level={2}>
              Getting Started
            </SectionHeading>
            <div className="space-y-6">
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: <GitBranch size={20} />, title: "Git-based Setup", description: "Clone the repository and configure your environment" },
                  { icon: <Container size={20} />, title: "Docker Deployment", description: "Deploy with Docker Compose in minutes" },
                  { icon: <CheckCircle size={20} />, title: "Production Checklist", description: "Verify readiness with the production checklist" },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="pt-6">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-3">
                          {step.icon}
                        </div>
                        <h4 className="font-heading font-semibold text-sm mb-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <CodeBlock
                code={`# Clone the repository
git clone https://github.com/COSS-India/voiceera.git
cd voiceera

# Deploy with Docker
docker-compose up -d

# Verify deployment
curl http://localhost:8080/health`}
                language="bash"
                title="Quick Start"
              />
            </div>
          </DocSection>

          {/* Final CTA */}
          <DocSection>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Voice for Every Voice.
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  VoiceERA is a foundational national voice layer—sovereign, open, and built for Bharat.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/voiceera" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                      Learn More
                      <ArrowRight size={16} />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="min-w-[160px]">
                    <a href="https://github.com/COSS-India/voiceera/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
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

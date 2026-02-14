
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  BarChart3, Eye, Shield, TrendingUp, ArrowRight, Code2, Zap, 
  Activity, AlertTriangle, LineChart, Users, Database, Bell,
  MessageSquare, CheckCircle, GitBranch, BookOpen, ExternalLink,
  Maximize2, X, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSection } from "@/components/docs/DocSection";

import observeInfographic from "@/assets/observe-infographic.png";
import observeArchitecture from "@/assets/observe-architecture.png";
import { PreloadedImage } from "@/components/ui/preloaded-image";

const ComponentObserve = () => {
  const [showDeepCapabilities, setShowDeepCapabilities] = useState(false);

  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: "Performance Monitoring",
      description: "Real-time tracking of model accuracy, latency, and throughput across all language services.",
    },
    {
      icon: <Shield size={32} />,
      title: "Fairness Analysis",
      description: "Detect and measure bias across demographic groups to ensure equitable AI performance.",
    },
    {
      icon: <Eye size={32} />,
      title: "Transparency Dashboards",
      description: "Comprehensive visibility into model behavior, decisions, and data provenance.",
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Quality Metrics",
      description: "Track key indicators like BLEU scores, word error rates, and user satisfaction metrics.",
    },
  ];

  const capabilityCards = [
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
      icon: <MessageSquare size={24} />,
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
              <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shadow-medium">
                <BarChart3 className="text-secondary-foreground" size={24} />
              </div>
              <span className="text-sm font-medium text-secondary px-3 py-1 bg-secondary/10 rounded-full">
                Component
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Observe
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Comprehensive observability platform for tracking AI model performance, fairness, and transparency in language services.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* SECTION 1 — Refined Overview */}
          <DocSection>
            <SectionHeading id="overview" level={2}>
              Overview
            </SectionHeading>
            <div className="space-y-6">
              {/* Plain-language explanation */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Observe ensures that AI systems remain accountable, fair, and transparent. By providing comprehensive monitoring and analytics capabilities, we empower organizations to build trust in their AI deployments and continuously improve model performance across diverse user populations.
                </p>
              </div>

              {/* Layered overview - expandable */}
              <motion.div 
                className="bg-accent/20 rounded-xl p-6 border border-border cursor-pointer hover:bg-accent/30 transition-colors"
                onClick={() => setShowDeepCapabilities(!showDeepCapabilities)}
                whileHover={{ scale: 1.005 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-heading font-semibold flex items-center gap-2">
                    <Eye size={20} className="text-secondary" />
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
              </motion.div>

              {/* Outcomes summary */}
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-heading font-semibold mb-3 flex items-center gap-2">
                    <TrendingUp size={20} className="text-primary" />
                    Why AI4I-Observe Matters
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
            </div>
          </DocSection>

          {/* Key Features */}
          <DocSection>
            <SectionHeading id="features" level={2}>
              Key Features
            </SectionHeading>
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardHeader>
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4 text-accent-foreground">
                        {feature.icon}
                      </div>
                      <CardTitle className="text-xl font-heading">{feature.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </DocSection>

          {/* SECTION 2 — Infographic Panel */}
          <DocSection>
            <SectionHeading id="telemetry-architecture" level={2}>
              Unified Telemetry Architecture
            </SectionHeading>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-2xl overflow-hidden bg-gradient-to-br from-background to-accent/10 border border-border p-4"
            >
              <PreloadedImage
                src={observeInfographic}
                alt="AI4I-Observe: Unified Telemetry & Governance Architecture"
                className="rounded-xl"
                containerClassName="rounded-xl"
                aspectRatio="16/9"
              />
              <p className="text-center text-sm text-muted-foreground mt-4 italic">
                AI4I-Observe: Unified Telemetry & Governance Architecture
              </p>
            </motion.div>
          </DocSection>

          {/* SECTION 3 — Interactive Capability Grid */}
          <DocSection>
            <SectionHeading id="capabilities" level={2}>
              What AI4I-Observe Enables
            </SectionHeading>
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {capabilityCards.map((card, index) => (
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
                        <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
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

          {/* SECTION 4 — Architecture Diagram */}
          <DocSection>
            <SectionHeading id="system-architecture" level={2}>
              System Architecture
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
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border">
                          <Maximize2 size={14} />
                          Click to expand
                        </div>
                      </div>
                      <PreloadedImage
                        src={observeArchitecture}
                        alt="AI4I-Observe Operational Architecture"
                        className="rounded-lg"
                        containerClassName="rounded-lg"
                        aspectRatio="16/9"
                      />
                      <p className="text-center text-sm text-muted-foreground mt-4 italic">
                        AI4I-Observe Operational Architecture
                      </p>
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
                    <p className="text-center text-sm text-muted-foreground mt-4 italic">
                      AI4I-Observe Operational Architecture
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
            </motion.div>
          </DocSection>

          {/* SECTION 5 — How Observe Works (Step Flow) */}
          <DocSection>
            <SectionHeading id="how-it-works" level={2}>
              How Observe Works
            </SectionHeading>
            <div className="relative">
              {/* Curved connection line - decorative */}
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-secondary/40 to-primary/20 hidden lg:block" style={{ transform: 'translateY(-50%)' }} />
              
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
          </DocSection>

          {/* SECTION: Why Observe Matters */}
          <DocSection>
            <SectionHeading id="why-observe-matters" level={2}>
              Why AI4I-Observe Matters
            </SectionHeading>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Language AI systems are powerful but fragile: models degrade, dialects vary, and real-world usage evolves. Observe ensures reliability, transparency and continuous improvement.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Multilingual AI is complex. Each language and dialect behaves differently.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Models degrade over time. Continual evaluation is required.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Operational risks must be detected early (latency, errors, capacity).</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Governance demands transparent, auditable evidence for policy compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Scalable telemetry enables cross-adopter insights and reuse.</span>
                </li>
              </ul>
            </div>
          </DocSection>

          {/* SECTION: Observe in the AI4Inclusion Ecosystem */}
          <DocSection>
            <SectionHeading id="observe-ecosystem" level={2}>
              AI4I-Observe in the AI4Inclusion Ecosystem
            </SectionHeading>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Observe acts as the intelligence and governance layer of AI4Inclusion. It strengthens AI4I-Orchestrate, guides AI4I-Contribute, and ensures the entire ecosystem remains transparent, reliable, and continuously improving.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <Eye size={24} className="text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">Visibility Across All AI Workloads</h4>
                      <p className="text-sm text-muted-foreground">Monitor every model, service, and API running on Orchestrate with unified dashboards, metrics, and alerts.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <Activity size={24} className="text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">Quality & Performance Assurance</h4>
                      <p className="text-sm text-muted-foreground">Track latency, accuracy, drift, failures, and language-level variations for reliable large-scale AI systems.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <Card className="h-full hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                        <TrendingUp size={24} className="text-secondary" />
                      </div>
                      <h4 className="font-heading font-semibold text-lg mb-2">Governance & Continuous Improvement</h4>
                      <p className="text-sm text-muted-foreground">Provide usage analytics, compliance insights, and model health trends to support evidence-based improvement.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </DocSection>

          {/* Quick Start */}
          <DocSection>
            <SectionHeading id="quick-start" level={2}>
              Quick Start
            </SectionHeading>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Zap size={20} className="text-secondary" />
                  Installation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Install the Observe SDK to start monitoring your AI models:
                </p>
                <CodeBlock
                  code="npm install @ai4i/observe"
                  language="bash"
                  title="Install via npm"
                />
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Code2 size={20} className="text-secondary" />
                  Basic Usage
                </h3>
                <p className="text-muted-foreground mb-4">
                  Here's how to integrate observability into your AI service:
                </p>
                <CodeBlock
                  code={`import { Observer } from '@ai4i/observe';

// Initialize observer
const observer = new Observer({
  apiKey: process.env.AI4I_API_KEY,
  projectId: 'your-project-id'
});

// Track a prediction
await observer.track({
  modelId: 'translation-model-v1',
  input: { text: 'Hello', sourceLang: 'en' },
  output: { text: 'नमस्ते', targetLang: 'hi' },
  metadata: {
    latency: 120,
    confidence: 0.95
  }
});

// Query metrics
const metrics = await observer.getMetrics({
  modelId: 'translation-model-v1',
  timeRange: '7d'
});`}
                  language="javascript"
                  title="Example: Tracking predictions"
                />
              </div>
            </div>
          </DocSection>

          {/* SECTION 6 — Video Demo */}
          <DocSection>
            <SectionHeading id="demo" level={2}>
              Explore More About AI4I-Observe
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
                src="https://www.youtube.com/embed/i7Tv5sLzic8?si=Ov-z55igMU-RluLW"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0"
              />
            </motion.div>
          </DocSection>

          {/* Monitoring Capabilities */}
          <DocSection>
            <SectionHeading id="monitoring" level={2}>
              Monitoring Capabilities
            </SectionHeading>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Comprehensive Analytics</CardTitle>
                  <CardDescription>Track every aspect of your AI system's performance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <BarChart3 size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Performance Monitoring</h4>
                      <p className="text-sm text-muted-foreground">Real-time tracking of accuracy, latency, and throughput metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Shield size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Fairness Analysis</h4>
                      <p className="text-sm text-muted-foreground">Detect and measure bias across demographic groups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Eye size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Transparency Dashboards</h4>
                      <p className="text-sm text-muted-foreground">Complete visibility into model behavior and decisions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp size={20} className="text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Quality Metrics</h4>
                      <p className="text-sm text-muted-foreground">BLEU scores, WER, and user satisfaction tracking</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DocSection>

          {/* SECTION 7 — Resources Section */}
          <DocSection>
            <SectionHeading id="resources" level={2}>
              Resources
            </SectionHeading>
            <div className="grid sm:grid-cols-3 gap-4">
              <motion.a
                href="https://github.com/COSS-India/observe"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
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
              </motion.a>

              <motion.a
                href="https://docs.ai4inclusion.org/observe"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
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
              </motion.a>

              <motion.a
                href="https://github.com/COSS-India/observe/discussions"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="block"
              >
                <Card className="h-full hover:shadow-medium hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <CardContent className="pt-6 text-center">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <MessageSquare size={24} />
                    </div>
                    <h4 className="font-heading font-semibold mb-1">Discussion Forum</h4>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      Join the conversation <ExternalLink size={12} />
                    </p>
                  </CardContent>
                </Card>
              </motion.a>
            </div>
          </DocSection>

          {/* SECTION 8 — Unified CTA */}
          <DocSection>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-secondary/10"
            >
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ready to explore AI4I-Observe?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn how to implement comprehensive observability in your AI systems.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://ai4inclusion.gitbook.io/ai4i-observe" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="font-medium shadow-soft hover:shadow-medium transition-all w-full sm:w-auto">
                      <BookOpen className="mr-2" size={20} />
                      📘 View Technical Documentation on GitBook
                    </Button>
                  </a>
                  <a href="https://github.com/COSS-India/observe/discussions" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="font-medium hover:bg-accent transition-all w-full sm:w-auto">
                      Discuss <ArrowRight className="ml-2" size={20} />
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

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Eye, Shield, TrendingUp, ArrowRight, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoModal from "@/components/VideoModal";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSection } from "@/components/docs/DocSection";

const ComponentObserve = () => {
  const [videoModal, setVideoModal] = useState(false);

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
        <div className="max-w-4xl">
          {/* Overview */}
          <DocSection>
            <SectionHeading id="overview" level={2}>
              Overview
            </SectionHeading>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Observe ensures that AI systems remain accountable, fair, and transparent. By providing comprehensive monitoring and analytics capabilities, we empower organizations to build trust in their AI deployments and continuously improve model performance across diverse user populations.
              </p>
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

          {/* Video Demo */}
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
              <button
                onClick={() => setVideoModal(true)}
                className="relative w-full aspect-video bg-muted rounded-xl overflow-hidden group cursor-pointer border border-border shadow-soft hover:shadow-medium transition-all"
                aria-label="Play Observe overview video"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <svg className="text-secondary-foreground ml-1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
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

          {/* Get Started CTA */}
          <DocSection>
            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-secondary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Learn how to implement comprehensive observability in your AI systems.
                </p>
                <a href="https://docs.ai4inclusion.org" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-medium shadow-soft hover:shadow-medium transition-all">
                    View Full Documentation <ArrowRight className="ml-2" size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </DocSection>
        </div>
      </div>

      <VideoModal
        isOpen={videoModal}
        onClose={() => setVideoModal(false)}
        videoSrc="/videos/observe.mp4"
        title="Observe Overview"
      />
    </DocsLayout>
  );
};

export default ComponentObserve;

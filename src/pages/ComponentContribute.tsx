import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Database, GitBranch, Award, ArrowRight, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoModal from "@/components/VideoModal";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSection } from "@/components/docs/DocSection";

const ComponentContribute = () => {
  const [videoModal, setVideoModal] = useState(false);

  const features = [
    {
      icon: <Database size={32} />,
      title: "Dataset Sharing",
      description: "Contribute and access high-quality language datasets for training and evaluation.",
    },
    {
      icon: <GitBranch size={32} />,
      title: "Model Collaboration",
      description: "Share trained models and collaborate on improving AI performance across languages.",
    },
    {
      icon: <Award size={32} />,
      title: "Quality Validation",
      description: "Community-driven review and validation ensures data quality and model reliability.",
    },
    {
      icon: <Users size={32} />,
      title: "Open Community",
      description: "Join a vibrant ecosystem of researchers, developers, and language experts.",
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
                <Users className="text-primary-foreground" size={24} />
              </div>
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                Component
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Contribute
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              An open collaboration platform enabling communities to share datasets, models, and insights for advancing inclusive language AI.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Overview */}
          <DocSection>
            <SectionHeading id="overview" level={2}>
              Overview
            </SectionHeading>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Contribute empowers communities to collaboratively build and improve language AI resources. By fostering open participation and knowledge sharing, we accelerate innovation and ensure that AI benefits all languages and cultures, especially those traditionally underserved by technology.
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
                  <Zap size={20} className="text-primary" />
                  Installation
                </h3>
                <p className="text-muted-foreground mb-4">
                  Install the Contribute SDK to start sharing datasets and models:
                </p>
                <CodeBlock
                  code="npm install @ai4i/contribute"
                  language="bash"
                  title="Install via npm"
                />
              </div>

              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 flex items-center gap-2">
                  <Code2 size={20} className="text-primary" />
                  Basic Usage
                </h3>
                <p className="text-muted-foreground mb-4">
                  Here's how to contribute a dataset to the platform:
                </p>
                <CodeBlock
                  code={`import { Contributor } from '@ai4i/contribute';

// Initialize contributor
const contributor = new Contributor({
  apiKey: process.env.AI4I_API_KEY
});

// Upload a dataset
const dataset = await contributor.uploadDataset({
  name: 'Hindi-English Translation Pairs',
  language: ['hi', 'en'],
  type: 'translation',
  data: [
    { source: 'Hello', target: 'नमस्ते' },
    { source: 'Thank you', target: 'धन्यवाद' }
  ],
  metadata: {
    license: 'CC-BY-4.0',
    contributors: ['Your Name']
  }
});

console.log('Dataset uploaded:', dataset.id);`}
                  language="javascript"
                  title="Example: Dataset contribution"
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
                aria-label="Play Contribute overview video"
              >
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-glow">
                    <svg className="text-primary-foreground ml-1" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </button>
            </motion.div>
          </DocSection>

          {/* Contribution Types */}
          <DocSection>
            <SectionHeading id="contribution-types" level={2}>
              Ways to Contribute
            </SectionHeading>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Open Collaboration</CardTitle>
                  <CardDescription>Multiple ways to advance inclusive language AI</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Database size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Dataset Sharing</h4>
                      <p className="text-sm text-muted-foreground">Contribute high-quality language datasets for training and evaluation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <GitBranch size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Model Collaboration</h4>
                      <p className="text-sm text-muted-foreground">Share trained models and collaborate on improvements</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Award size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Quality Validation</h4>
                      <p className="text-sm text-muted-foreground">Community-driven review ensures data quality</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Community Engagement</h4>
                      <p className="text-sm text-muted-foreground">Join researchers, developers, and language experts</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </DocSection>

          {/* Get Started CTA */}
          <DocSection>
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-primary/10">
              <div className="text-center max-w-2xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4">
                  Ready to Contribute?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Join our community and start contributing to inclusive AI development.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="https://docs.ai4inclusion.org" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="font-medium shadow-soft hover:shadow-medium transition-all">
                      View Full Documentation <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </a>
                  <a href="/get-involved">
                    <Button size="lg" variant="outline" className="font-medium hover:bg-accent">
                      Get Involved
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </DocSection>
        </div>
      </div>

      <VideoModal
        isOpen={videoModal}
        onClose={() => setVideoModal(false)}
        videoSrc="/videos/contribute.mp4"
        title="Contribute Overview"
      />
    </DocsLayout>
  );
};

export default ComponentContribute;

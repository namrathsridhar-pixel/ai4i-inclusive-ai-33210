import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Languages, Mic, FileText, ArrowRight, Code2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import VideoModal from "@/components/VideoModal";
import { DocsLayout } from "@/components/docs/DocsLayout";
import { SectionHeading } from "@/components/docs/SectionHeading";
import { CodeBlock } from "@/components/docs/CodeBlock";
import { DocSection } from "@/components/docs/DocSection";

const ComponentCore = () => {
  const [videoModal, setVideoModal] = useState(false);

  const features = [
    {
      icon: <Languages size={32} />,
      title: "Translation & Transliteration",
      description: "Seamless translation across 100+ languages with support for transliteration between different scripts.",
    },
    {
      icon: <Mic size={32} />,
      title: "Speech Recognition",
      description: "Advanced ASR capabilities for multiple Indian languages and dialects with high accuracy.",
    },
    {
      icon: <FileText size={32} />,
      title: "Optical Character Recognition",
      description: "Extract text from images and documents in multiple languages and formats.",
    },
    {
      icon: <Globe size={32} />,
      title: "Language Detection",
      description: "Automatically identify the language of input text or speech for intelligent routing.",
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
                <Globe className="text-primary-foreground" size={24} />
              </div>
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full">
                Component
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              AI4I Core
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              The foundational building block that powers inclusive language AI services across translation, speech recognition, OCR, and more.
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
                AI4I Core democratizes access to powerful language AI capabilities, ensuring that language barriers don't limit digital participation. By providing open, scalable, and interoperable language services, we enable governments, organizations, and developers to build truly inclusive digital experiences.
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
                  Install the AI4I Core SDK to start integrating language AI capabilities into your application:
                </p>
                <CodeBlock
                  code="npm install @ai4i/core"
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
                  Here's a simple example of using the translation service:
                </p>
                <CodeBlock
                  code={`import { AI4ICore } from '@ai4i/core';

// Initialize the client
const ai4i = new AI4ICore({
  apiKey: process.env.AI4I_API_KEY
});

// Translate text
const result = await ai4i.translate({
  text: 'Hello, world!',
  sourceLang: 'en',
  targetLang: 'hi'
});

console.log(result.translatedText);
// Output: "नमस्ते दुनिया!"`}
                  language="javascript"
                  title="Example: Translation"
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
                aria-label="Play AI4I Core overview video"
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

          {/* API Reference */}
          <DocSection>
            <SectionHeading id="api-reference" level={2}>
              API Reference
            </SectionHeading>
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg font-heading">Available Services</CardTitle>
                  <CardDescription>Comprehensive language AI capabilities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Languages size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Translation & Transliteration</h4>
                      <p className="text-sm text-muted-foreground">100+ language pairs with script conversion support</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <Mic size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Speech Recognition (ASR)</h4>
                      <p className="text-sm text-muted-foreground">Real-time and batch audio processing</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 pb-4 border-b border-border last:border-0 last:pb-0">
                    <FileText size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Optical Character Recognition</h4>
                      <p className="text-sm text-muted-foreground">Multi-language document and image text extraction</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe size={20} className="text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium mb-1">Language Detection</h4>
                      <p className="text-sm text-muted-foreground">Automatic language identification for text and speech</p>
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
                  Ready to Get Started?
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Explore our comprehensive documentation to integrate AI4I Core into your applications.
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
        videoSrc="/videos/core.mp4"
        title="AI4I Core Overview"
      />
    </DocsLayout>
  );
};

export default ComponentCore;

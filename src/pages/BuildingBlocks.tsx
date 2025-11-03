import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Globe, BarChart3, Users, CheckCircle, Database, Eye, GitBranch, Shield, TrendingUp, Smartphone, Github, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
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
  return <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <div className="flex-1">
          {/* Hero Section */}
          

      {/* AI4I Core */}
      {activeSection === "ai4i-core" && <section className="py-20 px-4" id="ai4i-core">
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

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">An intelligent orchestrator that routes models for domain-aware multilingual inference with policy-based selection, ensembles, scaling, and SLA-driven performance ensuring accurate, efficient, and context-sensitive inferencing across diverse AI workloads.</p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <a href="https://github.com/COSS-India/ai4i-core" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer">
                Learn more &gt;
              </a>
              <a href="https://github.com/COSS-India/ai4i-core/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 cursor-pointer">
                Discuss &gt;
              </a>
            </div>

            {/* Video Placeholder */}
            <div className="rounded-lg bg-muted/50 border-2 border-dashed border-muted-foreground/20 w-full max-w-2xl mx-auto" style={{
              aspectRatio: '16/9'
            }}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <p className="text-muted-foreground text-center text-sm md:text-base">Video coming soon</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>}

      {/* Observe */}
      {activeSection === "observe" && <section className="py-20 px-4" id="observe">
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
                <BarChart3 className="text-primary-foreground" size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">AI4I-Observe</h2>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              It is a software designed for platforms that serve AI models and need to monitor system health, model performance, and usage across multiple customer organizations. Observe provides complete visibility and control in a multi-tenant environment.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <a href="https://github.com/COSS-India/observe" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer">
                Learn more &gt;
              </a>
              <a href="https://github.com/COSS-India/observe/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 cursor-pointer">
                Discuss &gt;
              </a>
            </div>

            {/* Video Placeholder */}
            <div className="rounded-lg bg-muted/50 border-2 border-dashed border-muted-foreground/20 w-full max-w-2xl mx-auto" style={{
              aspectRatio: '16/9'
            }}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <p className="text-muted-foreground text-center text-sm md:text-base">Video coming soon</p>
              </div>
            </div>
          </motion.div>

          

          
        </div>
      </section>}

      {/* Contribute */}
      {activeSection === "contribute" && <section className="py-20 px-4" id="contribute">
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

            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              It is a ready-to-use, customizable interface that connects seamlessly with the Adopter's back-end systems and carries their own branding through simple configuration.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-8 md:mb-12">
              <a href="https://github.com/COSS-India/ai4i-contribute" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-primary/60 hover:text-primary transition-colors duration-300 cursor-pointer">
                Learn more &gt;
              </a>
              <a href="https://github.com/COSS-India/ai4i-contribute/discussions" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-foreground/60 hover:text-foreground transition-colors duration-300 cursor-pointer">
                Discuss &gt;
              </a>
            </div>

            {/* Video Placeholder */}
            <div className="rounded-lg bg-muted/50 border-2 border-dashed border-muted-foreground/20 w-full max-w-2xl mx-auto" style={{
              aspectRatio: '16/9'
            }}>
              <div className="w-full h-full flex items-center justify-center p-4">
                <p className="text-muted-foreground text-center text-sm md:text-base">Video coming soon</p>
              </div>
            </div>
          </motion.div>

          

          
        </div>
      </section>}

      </div>
      
      <Footer />
    </div>;
};
export default BuildingBlocks;
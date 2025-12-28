import { motion } from "framer-motion";
import { 
  Shield, 
  Route, 
  BarChart3, 
  Users, 
  RefreshCw, 
  Globe, 
  Lock, 
  GitBranch, 
  Smartphone 
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const capabilities: Capability[] = [
  {
    icon: <Shield size={24} />,
    title: "Multi-tenant governance & RBAC",
    description: "Fine-grained access control and role-based permissions for enterprise deployments"
  },
  {
    icon: <Route size={24} />,
    title: "Model routing & cost-aware selection",
    description: "Intelligent routing to optimal models based on cost, latency, and quality requirements"
  },
  {
    icon: <BarChart3 size={24} />,
    title: "Scalable telemetry pipelines",
    description: "Real-time monitoring and analytics for language AI performance at scale"
  },
  {
    icon: <Users size={24} />,
    title: "Human-in-the-loop validation",
    description: "Integrated workflows for human review and quality assurance of AI outputs"
  },
  {
    icon: <RefreshCw size={24} />,
    title: "Evidence-driven retraining",
    description: "Automated feedback loops for continuous model improvement based on real usage"
  },
  {
    icon: <Globe size={24} />,
    title: "Single uniform API surface",
    description: "Consistent API interface across all language models and providers"
  },
  {
    icon: <Lock size={24} />,
    title: "Privacy & data-local deployment",
    description: "Deploy on-premise or in sovereign clouds with complete data residency control"
  },
  {
    icon: <GitBranch size={24} />,
    title: "Open-source & GitHub-first",
    description: "Fully open-source with transparent development and community contributions"
  },
  {
    icon: <Smartphone size={24} />,
    title: "Offline & mobile-first collection",
    description: "Data collection capabilities that work offline and on mobile devices"
  },
];

const KeyCapabilities = () => {
  return (
    <section className="py-16 px-4 bg-muted/30" id="capabilities">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Platform Highlights
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "120px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Key capabilities that power the AI4Inclusion ecosystem
          </p>
        </motion.div>

        <TooltipProvider>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {capabilities.map((cap, i) => (
              <Tooltip key={cap.title}>
                <TooltipTrigger asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="bg-card rounded-lg p-4 shadow-soft border border-border/50 cursor-pointer transition-all hover:shadow-medium hover:border-primary/30"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-primary">{cap.icon}</div>
                      <span className="text-sm font-medium leading-tight">{cap.title}</span>
                    </div>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent side="top" className="max-w-xs">
                  <p>{cap.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default KeyCapabilities;

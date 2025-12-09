import { motion } from "framer-motion";
import { 
  Layers, 
  Users, 
  GitFork, 
  Activity, 
  UserCheck, 
  Smartphone, 
  Brain, 
  Lock, 
  Github 
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
}

const capabilities: Capability[] = [
  {
    icon: <Layers size={24} />,
    title: "Single uniform API surface",
    description: "One API to access all Language AI models — ASR, TTS, NMT, LLM — regardless of underlying provider.",
    link: "#",
  },
  {
    icon: <Users size={24} />,
    title: "Multi-tenant governance & RBAC",
    description: "Role-based access control with organization-level isolation and policy management.",
    link: "#",
  },
  {
    icon: <GitFork size={24} />,
    title: "Model routing & cost-aware selection",
    description: "Intelligent routing based on language, domain, cost, and performance requirements.",
    link: "#",
  },
  {
    icon: <Activity size={24} />,
    title: "Scalable telemetry pipelines",
    description: "High-throughput event collection for real-time monitoring and analytics.",
    link: "#",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Human-in-the-loop validation",
    description: "Built-in workflows for quality assurance with human feedback loops.",
    link: "#",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Offline & mobile-first collection",
    description: "Data collection apps that work offline and sync when connected.",
    link: "#",
  },
  {
    icon: <Brain size={24} />,
    title: "Evidence-driven retraining",
    description: "Continuous model improvement based on production feedback and drift detection.",
    link: "#",
  },
  {
    icon: <Lock size={24} />,
    title: "Privacy & data-local deployment",
    description: "Deploy on-premise or in sovereign cloud with full data residency control.",
    link: "#",
  },
  {
    icon: <Github size={24} />,
    title: "Open-source & GitHub-first",
    description: "Fully open-source with transparent development and community contributions.",
    link: "https://github.com/COSS-India",
  },
];

const KeyCapabilities = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
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
              whileInView={{ width: "140px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {capabilities.map((cap, i) => (
            <Tooltip key={i}>
              <TooltipTrigger asChild>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="bg-card rounded-lg p-4 shadow-soft hover:shadow-medium transition-all cursor-pointer border border-border/30 flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                    {cap.icon}
                  </div>
                  <span className="text-sm font-medium text-foreground">{cap.title}</span>
                </motion.div>
              </TooltipTrigger>
              <TooltipContent side="top" className="max-w-xs">
                <p className="text-sm">{cap.description}</p>
                {cap.link && cap.link !== "#" && (
                  <a
                    href={cap.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary mt-1 inline-block hover:underline"
                  >
                    Learn more →
                  </a>
                )}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;

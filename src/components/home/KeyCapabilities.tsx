import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { 
  Layers, 
  Users, 
  GitFork, 
  Activity, 
  UserCheck, 
  Smartphone, 
  Brain, 
  Lock, 
  Github,
  Shield,
  Eye,
  Database,
  Zap
} from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface Capability {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
}

interface CategoryNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
  capabilities: Capability[];
}

const categoryNodes: CategoryNode[] = [
  {
    id: "governance",
    name: "Governance",
    icon: <Shield size={20} />,
    color: "from-violet-500 to-purple-600",
    capabilities: [
      {
        icon: <Users size={18} />,
        title: "Multi-tenant governance & RBAC",
        description: "Role-based access control with organization-level isolation and policy management.",
        category: "governance"
      }
    ]
  },
  {
    id: "routing",
    name: "Routing",
    icon: <GitFork size={20} />,
    color: "from-blue-500 to-cyan-600",
    capabilities: [
      {
        icon: <GitFork size={18} />,
        title: "Model routing & cost-aware selection",
        description: "Intelligent routing based on language, domain, cost, and performance requirements.",
        category: "routing"
      }
    ]
  },
  {
    id: "observability",
    name: "Observability",
    icon: <Eye size={20} />,
    color: "from-cyan-500 to-teal-600",
    capabilities: [
      {
        icon: <Activity size={18} />,
        title: "Scalable telemetry pipelines",
        description: "High-throughput event collection for real-time monitoring and analytics.",
        category: "observability"
      }
    ]
  },
  {
    id: "dataQuality",
    name: "Data Quality",
    icon: <Database size={20} />,
    color: "from-green-500 to-emerald-600",
    capabilities: [
      {
        icon: <UserCheck size={18} />,
        title: "Human-in-the-loop validation",
        description: "Built-in workflows for quality assurance with human feedback loops.",
        category: "dataQuality"
      },
      {
        icon: <Brain size={18} />,
        title: "Evidence-driven retraining",
        description: "Continuous model improvement based on production feedback and drift detection.",
        category: "dataQuality"
      }
    ]
  },
  {
    id: "interoperability",
    name: "Interoperability",
    icon: <Zap size={20} />,
    color: "from-orange-500 to-amber-600",
    capabilities: [
      {
        icon: <Layers size={18} />,
        title: "Single uniform API surface",
        description: "One API to access all Language AI models — ASR, TTS, NMT, LLM — regardless of underlying provider.",
        category: "interoperability"
      },
      {
        icon: <Lock size={18} />,
        title: "Privacy & data-local deployment",
        description: "Deploy on-premise or in sovereign cloud with full data residency control.",
        category: "interoperability"
      },
      {
        icon: <Github size={18} />,
        title: "Open-source & GitHub-first",
        description: "Fully open-source with transparent development and community contributions.",
        category: "interoperability"
      },
      {
        icon: <Smartphone size={18} />,
        title: "Offline & mobile-first collection",
        description: "Data collection apps that work offline and sync when connected.",
        category: "interoperability"
      }
    ]
  }
];

const KeyCapabilities = () => {
  const [expandedNode, setExpandedNode] = useState<string | null>(null);
  const [hoveredCapability, setHoveredCapability] = useState<string | null>(null);

  const toggleNode = (nodeId: string) => {
    setExpandedNode(expandedNode === nodeId ? null : nodeId);
  };

  // Calculate positions for nodes around the center
  const getNodePosition = (index: number, total: number, radius: number) => {
    const angle = (index * 360 / total - 90) * (Math.PI / 180);
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

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
          <p className="text-muted-foreground max-w-xl mx-auto">
            Click on any capability area to explore its features
          </p>
        </motion.div>

        {/* Mind-Map Visualization */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop Mind-Map */}
          <div className="hidden md:block relative h-[500px]">
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--secondary))" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              {categoryNodes.map((node, i) => {
                const pos = getNodePosition(i, categoryNodes.length, 180);
                return (
                  <motion.line
                    key={node.id}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${pos.x}px)`}
                    y2={`calc(50% + ${pos.y}px)`}
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Central Node */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg">
                <div className="text-center text-primary-foreground">
                  <Layers size={28} className="mx-auto mb-1" />
                  <span className="text-xs font-semibold">AI4Inclusion</span>
                </div>
              </div>
            </motion.div>

            {/* Category Nodes */}
            {categoryNodes.map((node, i) => {
              const pos = getNodePosition(i, categoryNodes.length, 180);
              const isExpanded = expandedNode === node.id;
              
              return (
                <motion.div
                  key={node.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        onClick={() => toggleNode(node.id)}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg cursor-pointer transition-all ${isExpanded ? 'ring-4 ring-white/30' : ''}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <div className="text-white">
                          {node.icon}
                        </div>
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p className="font-medium">{node.name}</p>
                      <p className="text-xs opacity-80">Click to expand</p>
                    </TooltipContent>
                  </Tooltip>
                  
                  <p className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-foreground whitespace-nowrap">
                    {node.name}
                  </p>

                  {/* Expanded Sub-nodes */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-10 w-64 bg-card rounded-xl shadow-large border border-border p-4 z-30"
                      >
                        <h4 className="font-semibold text-sm mb-3 text-foreground">{node.name} Capabilities</h4>
                        <div className="space-y-2">
                          {node.capabilities.map((cap, j) => (
                            <Tooltip key={j}>
                              <TooltipTrigger asChild>
                                <motion.div
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: j * 0.1 }}
                                  className="flex items-center gap-2 p-2 rounded-lg bg-muted/50 hover:bg-muted cursor-pointer transition-colors"
                                  onMouseEnter={() => setHoveredCapability(cap.title)}
                                  onMouseLeave={() => setHoveredCapability(null)}
                                >
                                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white flex-shrink-0`}>
                                    {cap.icon}
                                  </div>
                                  <span className="text-xs font-medium text-foreground line-clamp-2">{cap.title}</span>
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent side="right" className="max-w-xs">
                                <p className="text-sm">{cap.description}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Layout - Simplified grid */}
          <div className="md:hidden space-y-4">
            {categoryNodes.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => toggleNode(node.id)}
                  className={`w-full flex items-center gap-4 p-4 transition-colors ${expandedNode === node.id ? 'bg-muted/50' : ''}`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${node.color} flex items-center justify-center text-white flex-shrink-0`}>
                    {node.icon}
                  </div>
                  <span className="font-semibold text-foreground">{node.name}</span>
                  <motion.span
                    className="ml-auto text-muted-foreground"
                    animate={{ rotate: expandedNode === node.id ? 180 : 0 }}
                  >
                    ▼
                  </motion.span>
                </button>
                
                <AnimatePresence>
                  {expandedNode === node.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2">
                        {node.capabilities.map((cap, j) => (
                          <Tooltip key={j}>
                            <TooltipTrigger asChild>
                              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center text-white flex-shrink-0`}>
                                  {cap.icon}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground">{cap.title}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{cap.description}</p>
                                </div>
                              </div>
                            </TooltipTrigger>
                          </Tooltip>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
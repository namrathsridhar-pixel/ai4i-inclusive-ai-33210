import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Cpu, BarChart3, Database, Shield, Scaling, Plug } from "lucide-react";

interface Cluster {
  id: string;
  label: string;
  icon: React.ReactNode;
  color: string;
  benefits: string[];
  angle: number;
}

const clusters: Cluster[] = [
  {
    id: "runtime",
    label: "Runtime",
    icon: <Cpu size={20} />,
    color: "from-blue-500 to-blue-600",
    benefits: ["Multi-model inference routing", "Low-latency serving", "Auto-scaling endpoints"],
    angle: 0,
  },
  {
    id: "observability",
    label: "Observability",
    icon: <BarChart3 size={20} />,
    color: "from-emerald-500 to-emerald-600",
    benefits: ["Real-time telemetry", "Quality drift detection", "Performance dashboards"],
    angle: 60,
  },
  {
    id: "data",
    label: "Data",
    icon: <Database size={20} />,
    color: "from-purple-500 to-purple-600",
    benefits: ["Crowdsourced collection", "Validation workflows", "Dataset versioning"],
    angle: 120,
  },
  {
    id: "governance",
    label: "Governance",
    icon: <Shield size={20} />,
    color: "from-amber-500 to-amber-600",
    benefits: ["Policy enforcement", "Audit trails", "Access control"],
    angle: 180,
  },
  {
    id: "scale",
    label: "Scale",
    icon: <Scaling size={20} />,
    color: "from-rose-500 to-rose-600",
    benefits: ["Horizontal scaling", "Multi-tenant support", "Cost optimization"],
    angle: 240,
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: <Plug size={20} />,
    color: "from-cyan-500 to-cyan-600",
    benefits: ["OpenAI-compatible API", "Webhooks & callbacks", "SDK support"],
    angle: 300,
  },
];

const CapabilityMatrix = () => {
  const [activeCluster, setActiveCluster] = useState<string | null>(null);
  const radius = 140;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What AI4Inclusion Enables
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "180px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A unified platform powering the complete Language AI lifecycle
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Interactive Radial Diagram */}
          <div className="relative w-[360px] h-[360px] flex-shrink-0">
            {/* Center Node */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-large z-10"
              animate={{
                boxShadow: [
                  "0 0 20px hsl(216 100% 32% / 0.3)",
                  "0 0 40px hsl(216 100% 32% / 0.5)",
                  "0 0 20px hsl(216 100% 32% / 0.3)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-primary-foreground font-heading font-bold text-xs text-center leading-tight">
                AI4I<br />Engine
              </span>
            </motion.div>

            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              {clusters.map((cluster) => {
                const x = 180 + radius * Math.cos((cluster.angle * Math.PI) / 180);
                const y = 180 + radius * Math.sin((cluster.angle * Math.PI) / 180);
                return (
                  <motion.line
                    key={cluster.id}
                    x1="180"
                    y1="180"
                    x2={x}
                    y2={y}
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                    strokeOpacity={activeCluster === cluster.id ? 0.8 : 0.2}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                );
              })}
            </svg>

            {/* Cluster Nodes */}
            {clusters.map((cluster, i) => {
              const x = radius * Math.cos((cluster.angle * Math.PI) / 180);
              const y = radius * Math.sin((cluster.angle * Math.PI) / 180);
              return (
                <motion.div
                  key={cluster.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="absolute left-1/2 top-1/2 cursor-pointer"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
                  onMouseEnter={() => setActiveCluster(cluster.id)}
                  onMouseLeave={() => setActiveCluster(null)}
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`w-16 h-16 bg-gradient-to-br ${cluster.color} rounded-full flex items-center justify-center shadow-medium text-white`}
                    animate={{
                      boxShadow: activeCluster === cluster.id
                        ? "0 0 20px rgba(0,0,0,0.3)"
                        : "0 4px 16px rgba(0,0,0,0.1)",
                    }}
                  >
                    {cluster.icon}
                  </motion.div>
                  <p className="text-xs font-medium text-center mt-2 text-foreground">{cluster.label}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Benefits Panel */}
          <div className="w-full max-w-md">
            <AnimatePresence mode="wait">
              {activeCluster ? (
                <motion.div
                  key={activeCluster}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-card rounded-xl p-6 shadow-medium border border-border/50"
                >
                  {(() => {
                    const cluster = clusters.find((c) => c.id === activeCluster);
                    if (!cluster) return null;
                    return (
                      <>
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${cluster.color} rounded-lg flex items-center justify-center text-white`}>
                            {cluster.icon}
                          </div>
                          <h3 className="font-heading font-bold text-lg">{cluster.label}</h3>
                        </div>
                        <ul className="space-y-2">
                          {cluster.benefits.map((benefit, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-center gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                              {benefit}
                            </motion.li>
                          ))}
                        </ul>
                      </>
                    );
                  })()}
                </motion.div>
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-card/50 rounded-xl p-6 border border-dashed border-border text-center"
                >
                  <p className="text-muted-foreground text-sm">
                    Hover over a capability cluster to explore its features
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityMatrix;

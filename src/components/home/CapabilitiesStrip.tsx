import { motion } from "framer-motion";
import { 
  Shield, Route, BarChart3, Globe, Lock, GitBranch, Smartphone 
} from "lucide-react";

const capabilities = [
  { icon: <Shield size={16} />, label: "Multi-tenant RBAC" },
  { icon: <Route size={16} />, label: "Smart Routing" },
  { icon: <BarChart3 size={16} />, label: "Telemetry Pipelines" },
  { icon: <Globe size={16} />, label: "Unified API" },
  { icon: <Lock size={16} />, label: "Data Sovereignty" },
  { icon: <GitBranch size={16} />, label: "Open Source" },
  { icon: <Smartphone size={16} />, label: "Offline-First" },
];

const CapabilitiesStrip = () => {
  return (
    <section className="py-8 px-4 bg-muted/50 border-y border-border/30">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3">
          {capabilities.map((cap, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-foreground/70"
            >
              <span className="text-primary">{cap.icon}</span>
              <span>{cap.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesStrip;

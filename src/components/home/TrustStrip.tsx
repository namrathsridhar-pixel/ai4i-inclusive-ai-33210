import { motion } from "framer-motion";
import { Scale, Globe, FileCheck, ClipboardList, Accessibility } from "lucide-react";

const trustItems = [
  { icon: <Scale size={18} />, label: "Open-source License" },
  { icon: <Globe size={18} />, label: "Data Sovereignty" },
  { icon: <FileCheck size={18} />, label: "Policy-Mechanism Mapping" },
  { icon: <ClipboardList size={18} />, label: "Audit Trails" },
  { icon: <Accessibility size={18} />, label: "WCAG 2.1 AA" },
];

const TrustStrip = () => {
  return (
    <section className="py-8 px-4 bg-primary/5 border-y border-border/30">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-sm text-foreground/70"
            >
              <span className="text-primary">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;

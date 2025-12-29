import { motion } from "framer-motion";
import { Scale, Globe, FileCheck, Accessibility } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const trustItems = [
  { icon: <Scale size={16} />, label: "Apache 2.0 License" },
  { icon: <Globe size={16} />, label: "Data Sovereignty" },
  { icon: <FileCheck size={16} />, label: "Audit Trails" },
  { icon: <Accessibility size={16} />, label: "WCAG 2.1 AA" },
];

const TrustFooter = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-muted/50 to-background">
      <div className="container mx-auto max-w-4xl">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {trustItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="text-primary">{item.icon}</span>
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="font-heading font-bold text-2xl mb-3">
            Ready to build inclusive Language AI?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Connect with us to explore partnership and adoption opportunities.
          </p>
          <Button asChild size="lg">
            <Link to="/join-us">
              Connect With Us
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustFooter;

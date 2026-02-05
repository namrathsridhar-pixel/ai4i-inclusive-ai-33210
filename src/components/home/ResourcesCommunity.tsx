import { motion, AnimatePresence } from "framer-motion";
import { Github, MessageSquare, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const ResourcesCommunity = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Resources & Community
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "180px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
        </motion.div>

        {/* Main Resource Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <motion.a
            href="https://github.com/COSS-India"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            <Github size={18} /> GitHub
          </motion.a>
          <motion.a
            href="https://github.com/COSS-India/ai4i-core/discussions"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/90 transition-colors"
          >
            <MessageSquare size={18} /> Discuss
          </motion.a>
          <Link to="/join-us">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors cursor-pointer"
            >
              <Mail size={18} /> Join Us
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;

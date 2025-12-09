import { motion } from "framer-motion";
import { Github, MessageSquare, Mail, Users } from "lucide-react";
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
        </div>

        {/* CTA Cards */}
        <div className="grid md:grid-cols-2 gap-6">
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-medium border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                <Mail size={20} />
              </div>
              <h3 className="font-heading font-bold text-lg">Connect With Us</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Be part of the AI4Inclusion movement. Reach out to collaborate, contribute, or explore how you can participate in shaping inclusive Language AI.
            </p>
            <Link to="/join-us">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors text-sm"
              >
                Join Us
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-xl p-6 shadow-medium border border-border/50"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary">
                <Users size={20} />
              </div>
              <h3 className="font-heading font-bold text-lg">Join a Campaign</h3>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Participate in community data collection campaigns. Help build inclusive datasets.
            </p>
            <a
              href="https://github.com/COSS-India/ai4i-contribute"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-secondary text-secondary-foreground py-2.5 rounded-lg font-medium hover:bg-secondary/90 transition-colors text-sm"
              >
                Explore Campaigns
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesCommunity;

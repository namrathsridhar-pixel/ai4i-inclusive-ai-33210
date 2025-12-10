import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import aiLifecycleEcosystem from "@/assets/ai-lifecycle-ecosystem.png";

const ArchitectureTeaser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-large group cursor-pointer"
            onClick={() => setIsOpen(true)}
          >
            <img
              src={aiLifecycleEcosystem}
              alt="The Continuous AI Lifecycle for Language Ecosystems"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 px-4 text-center">
              <h3 className="text-white font-heading font-bold text-xl md:text-2xl mb-2">
                The Continuous AI Lifecycle for Language Ecosystems
              </h3>
              <p className="text-white/80 text-sm mb-4 max-w-xl">
                From data creation to model serving — see how AI4Inclusion components work together in a self-improving cycle
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white text-foreground px-5 py-2.5 rounded-lg font-medium text-sm shadow-medium hover:bg-white/90 transition-colors"
              >
                <Maximize2 size={16} /> View Full Screen
              </motion.button>
            </div>
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[98vw] w-[98vw] h-[95vh] p-0 bg-background overflow-hidden">
          <div className="relative w-full h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-heading font-bold">The Continuous AI Lifecycle for Language Ecosystems</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-auto p-4 flex items-center justify-center">
              <img
                src={aiLifecycleEcosystem}
                alt="The Continuous AI Lifecycle for Language Ecosystems"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ArchitectureTeaser;

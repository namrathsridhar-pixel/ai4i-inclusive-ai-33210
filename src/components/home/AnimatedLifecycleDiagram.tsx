import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import aiLifecycleImage from "@/assets/ai-lifecycle-ecosystem.png";

const AnimatedLifecycleDiagram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-8 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-large group cursor-pointer bg-white"
            onClick={() => setIsOpen(true)}
          >
            {/* Static image */}
            <img
              src={aiLifecycleImage}
              alt="The Continuous AI Lifecycle for Language Ecosystems"
              className="w-full h-auto object-contain"
              loading="eager"
              fetchPriority="high"
            />
            
            {/* Hover overlay with expand button */}
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300 flex items-end justify-end p-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-lg font-medium text-sm shadow-medium"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                <Maximize2 size={16} /> Expand
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full screen dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[98vw] w-[98vw] h-[95vh] p-0 bg-white overflow-hidden [&>button]:hidden flex flex-col">
          <VisuallyHidden>
            <DialogTitle>The Continuous AI Lifecycle for Language Ecosystems</DialogTitle>
            <DialogDescription>Diagram showing the AI lifecycle from data creation to model serving</DialogDescription>
          </VisuallyHidden>
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0">
            <h3 className="font-heading font-bold text-base md:text-lg">
              The Continuous AI Lifecycle for Language Ecosystems
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 flex items-center justify-center min-h-0 bg-white">
            <img
              src={aiLifecycleImage}
              alt="The Continuous AI Lifecycle for Language Ecosystems"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimatedLifecycleDiagram;

import { motion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import aiLifecycleImage from "@/assets/ai-lifecycle-ecosystem.png";
import { PreloadedImage } from "@/components/ui/preloaded-image";

const AnimatedLifecycleDiagram = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="py-6 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-xl overflow-hidden group cursor-pointer bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={() => setIsOpen(true)}
          >
            <PreloadedImage
              src={aiLifecycleImage}
              alt="The Continuous AI Lifecycle for Language Ecosystems"
              className="contrast-110 saturate-110"
              containerClassName="w-full"
              aspectRatio="16/9"
            />
            
            {/* Hover overlay with shadow effect and expand button */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-end justify-end p-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white text-foreground px-3 py-1.5 rounded-lg font-medium text-xs shadow-lg"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(true);
                }}
              >
                <Maximize2 size={14} /> Expand
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
          <div className="flex items-center justify-between p-3 border-b border-border shrink-0">
            <h3 className="font-heading font-semibold text-sm md:text-base text-foreground">
              The Continuous AI Lifecycle for Language Ecosystems
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 p-3 flex items-center justify-center min-h-0 bg-white">
            <img
              src={aiLifecycleImage}
              alt="The Continuous AI Lifecycle for Language Ecosystems"
              className="max-w-full max-h-full object-contain contrast-110 saturate-110"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimatedLifecycleDiagram;

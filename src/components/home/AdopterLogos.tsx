import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

interface Adopter {
  name: string;
  logo?: string;
  description: string;
}

const adopters: Adopter[] = [
  {
    name: "Bhashini",
    description: "India's national language translation platform uses AI4I infrastructure for multilingual NLP services.",
  },
  {
    name: "IIIT Hyderabad",
    description: "Research institution leveraging AI4I for language AI research and model development.",
  },
  {
    name: "AI4Bharat",
    description: "Open-source initiative building AI models for Indian languages using AI4I tools.",
  },
  {
    name: "COSS India",
    description: "Centre for Open Source Solutions supporting AI4I development and deployment.",
  },
  {
    name: "NIC",
    description: "National Informatics Centre deploying AI4I for government digital services.",
  },
];

const AdopterLogos = () => {
  const [selectedAdopter, setSelectedAdopter] = useState<Adopter | null>(null);

  return (
    <section className="py-12 px-4 bg-muted/50">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          Trusted by leading institutions
        </motion.p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {adopters.map((adopter, i) => (
            <motion.button
              key={adopter.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedAdopter(adopter)}
              className="flex items-center justify-center h-12 px-4 bg-card rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-shadow cursor-pointer"
            >
              <span className="font-medium text-foreground/70 text-sm">{adopter.name}</span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAdopter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-foreground/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedAdopter(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-xl p-6 max-w-sm w-full shadow-large relative"
            >
              <button
                onClick={() => setSelectedAdopter(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-heading font-bold text-lg mb-3">{selectedAdopter.name}</h3>
              <p className="text-muted-foreground text-sm">{selectedAdopter.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default AdopterLogos;

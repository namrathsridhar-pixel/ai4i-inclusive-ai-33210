import { motion } from "framer-motion";

interface Adopter {
  name: string;
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

const AdopterCarousel = () => {
  return (
    <section className="py-12 px-4 bg-muted/50" aria-label="Trusted partners">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-6"
        >
          Trusted by leading institutions
        </motion.p>

        <div 
          className="flex flex-wrap justify-center gap-4"
          role="list"
          aria-label="Partner organizations"
        >
          {adopters.map((adopter) => (
            <motion.div
              key={adopter.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center justify-center h-12 px-6 bg-card rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-shadow"
              role="listitem"
              title={adopter.description}
            >
              <span className="font-medium text-foreground/70 text-sm whitespace-nowrap">
                {adopter.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdopterCarousel;

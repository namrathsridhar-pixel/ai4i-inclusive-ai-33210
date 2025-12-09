import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

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

// Duplicate adopters for seamless looping
const duplicatedAdopters = [...adopters, ...adopters, ...adopters];

const AdopterCarousel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent, name: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      // Could open modal or show details
    }
  };

  // Static scrollable view for reduced motion
  if (prefersReducedMotion) {
    return (
      <section className="py-12 px-4 bg-muted/50" aria-label="Trusted partners">
        <div className="container mx-auto">
          <p className="text-center text-sm text-muted-foreground mb-6">
            Trusted by leading institutions
          </p>
          <div 
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            role="list"
            aria-label="Partner organizations"
          >
            {adopters.map((adopter) => (
              <button
                key={adopter.name}
                className="flex-shrink-0 flex items-center justify-center h-12 px-6 bg-card rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label={`${adopter.name}: ${adopter.description}`}
                tabIndex={0}
              >
                <span className="font-medium text-foreground/70 text-sm whitespace-nowrap">
                  {adopter.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="py-12 px-4 bg-muted/50 overflow-hidden" 
      aria-label="Trusted partners carousel"
    >
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
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-muted/50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-muted/50 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-6 md:gap-8"
            animate={{
              x: isPaused ? undefined : [0, -((adopters.length) * 160)],
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              },
            }}
            style={{ willChange: "transform" }}
            role="list"
            aria-label="Partner organizations"
          >
            {duplicatedAdopters.map((adopter, i) => (
              <motion.button
                key={`${adopter.name}-${i}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="flex-shrink-0 flex items-center justify-center h-12 px-4 sm:px-6 bg-card rounded-lg shadow-soft border border-border/30 hover:shadow-medium transition-shadow cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label={`${adopter.name}: ${adopter.description}`}
                tabIndex={i < adopters.length ? 0 : -1}
                onKeyDown={(e) => handleKeyDown(e, adopter.name)}
                role="listitem"
              >
                <span className="font-medium text-foreground/70 text-sm whitespace-nowrap">
                  {adopter.name}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdopterCarousel;

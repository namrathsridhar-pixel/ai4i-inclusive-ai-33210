import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix, label, duration = 2000 }: CounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary tabular-nums">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground text-sm md:text-base mt-2 font-medium">{label}</p>
    </div>
  );
};

const ImpactNarrative = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-background to-background" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl">
        {/* Headline statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold leading-tight mb-6">
            <span className="text-foreground">7,000 languages.</span>{" "}
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              One open infrastructure.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Billions are excluded from the digital world because AI doesn't speak their language.
            AI4Inclusion changes that — with sovereign, modular, open-source Language AI infrastructure.
          </p>
        </motion.div>

        {/* Animated counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4"
        >
          <AnimatedCounter end={7000} suffix="+" label="Languages worldwide" />
          <AnimatedCounter end={11} suffix="" label="AI service types unified" />
          <AnimatedCounter end={4} suffix="" label="Modular building blocks" />
          <AnimatedCounter end={22} suffix="+" label="Indian languages supported" />
        </motion.div>

        {/* Divider accent */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactNarrative;

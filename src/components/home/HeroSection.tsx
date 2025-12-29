import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

// Indian language characters for network nodes
const languageChars = [
  "अ", "आ", "இ", "క", "ಅ", "അ", "অ", "ଅ", "અ", "ا",
  "த", "ఆ", "ಆ", "ആ", "আ", "ب", "క", "ங", "ಕ", "ക"
];

interface Node {
  x: number;
  y: number;
  char: string;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize fewer, cleaner nodes
    const nodeCount = 20;
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      nodesRef.current.push({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        char: languageChars[Math.floor(Math.random() * languageChars.length)],
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: 14 + Math.random() * 8,
        opacity: 0.15 + Math.random() * 0.2,
      });
    }

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      nodesRef.current.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 30 || node.x > width - 30) node.vx *= -1;
        if (node.y < 30 || node.y > height - 30) node.vy *= -1;

        ctx.font = `${node.size}px "Noto Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `hsla(210, 100%, 80%, ${node.opacity})`;
        ctx.fillText(node.char, node.x, node.y);
      });

      animationRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1a] via-[#0d1525] to-[#0a1628]">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full opacity-60" 
      />
      
      {/* Subtle gradient overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsla(210, 100%, 50%, 0.06), transparent 70%)"
        }}
      />

      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-primary/90 font-medium text-sm tracking-wide uppercase mb-4"
        >
          Open-Source Language AI Infrastructure
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6"
        >
          Language AI for
          <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Every Citizen
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Build, deploy, and govern Language AI systems at population scale. 
          Open-source building blocks for speech, translation, and multilingual understanding.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Button 
            size="lg"
            onClick={() => scrollToSection("building-blocks")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-medium"
          >
            Explore Platform
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("get-started")}
            className="border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/30 px-8 py-6 text-base"
          >
            Get Started
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;

import { ArrowRight, ArrowDown } from "lucide-react";
import { useEffect, useRef } from "react";
import CyclingSubheading from "./CyclingSubheading";

// Indian language characters for network nodes
const languageChars = [
// Hindi
"अ", "आ", "इ", "ई", "उ", "क", "ख", "ग",
// Tamil
"அ", "ஆ", "இ", "க", "ங", "ச", "த", "ந",
// Telugu
"అ", "ఆ", "ఇ", "క", "ఖ", "గ", "త", "ద",
// Kannada
"ಅ", "ಆ", "ಇ", "ಕ", "ಖ", "ಗ", "ತ", "ದ",
// Malayalam
"അ", "ആ", "ഇ", "ക", "ഖ", "ഗ", "ത", "ദ",
// Bengali
"অ", "আ", "ই", "ক", "খ", "গ", "ত", "দ",
// Odia
"ଅ", "ଆ", "ଇ", "କ", "ଖ", "ଗ", "ତ", "ଦ",
// Marathi (uses Devanagari)
"म", "रा", "ठ", "ी",
// Gujarati
"અ", "આ", "ઇ", "ક", "ખ", "ગ", "ત", "દ",
// Urdu
"ا", "ب", "پ", "ت", "ث", "ج", "چ", "ح",
// Assamese
"অ", "আ", "ই", "ক", "খ", "গ"];

interface Node {
  x: number;
  y: number;
  char: string;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  pulsePhase: number;
  connections: number[];
}

const LanguageNetworkHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationRef = useRef<number>(0);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animStarted = false;
    const startAnimation = () => {
      if (animStarted) return;
      animStarted = true;
      initAndAnimate();
    };

    // Defer heavy canvas work to avoid blocking main thread / FID
    const idleId = typeof requestIdleCallback !== "undefined"
      ? requestIdleCallback(startAnimation, { timeout: 1500 })
      : (setTimeout(startAnimation, 200) as unknown as number);

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    function initAndAnimate() {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize nodes — reduced count for lighter main-thread cost
    const nodeCount = 25;
    nodesRef.current = [];
    for (let i = 0; i < nodeCount; i++) {
      const node: Node = {
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        char: languageChars[Math.floor(Math.random() * languageChars.length)],
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: 16 + Math.random() * 12,
        opacity: 0.3 + Math.random() * 0.4,
        pulsePhase: Math.random() * Math.PI * 2,
        connections: []
      };
      nodesRef.current.push(node);
    }

    // Establish connections based on proximity
    const updateConnections = () => {
      const maxDistance = 180;
      nodesRef.current.forEach((node, i) => {
        node.connections = [];
        nodesRef.current.forEach((other, j) => {
          if (i !== j) {
            const dx = other.x - node.x;
            const dy = other.y - node.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDistance && node.connections.length < 3) {
              node.connections.push(j);
            }
          }
        });
      });
    };
    let time = 0;
    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      // Update node positions
      nodesRef.current.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 50) { node.x = 50; node.vx *= -1; }
        if (node.x > width - 50) { node.x = width - 50; node.vx *= -1; }
        if (node.y < 50) { node.y = 50; node.vy *= -1; }
        if (node.y > height - 50) { node.y = height - 50; node.vy *= -1; }
      });

      if (Math.floor(time * 10) % 30 === 0) {
        updateConnections();
      }

      // Draw connections
      nodesRef.current.forEach((node, i) => {
        node.connections.forEach(j => {
          const other = nodesRef.current[j];
          const dx = other.x - node.x;
          const dy = other.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const alpha = Math.max(0, (180 - dist) / 180) * 0.3;
          const gradient = ctx.createLinearGradient(node.x, node.y, other.x, other.y);
          gradient.addColorStop(0, `hsla(210, 100%, 60%, ${alpha})`);
          gradient.addColorStop(0.5, `hsla(200, 100%, 70%, ${alpha * 1.5})`);
          gradient.addColorStop(1, `hsla(210, 100%, 60%, ${alpha})`);
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1;
          ctx.stroke();
          const pulsePos = (Math.sin(time * 2 + i) + 1) / 2;
          const pulseX = node.x + dx * pulsePos;
          const pulseY = node.y + dy * pulsePos;
          ctx.beginPath();
          ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(200, 100%, 80%, ${alpha * 2})`;
          ctx.fill();
        });
      });

      // Draw nodes
      nodesRef.current.forEach((node, i) => {
        const pulse = Math.sin(time * 1.5 + node.pulsePhase) * 0.15 + 1;
        const currentOpacity = node.opacity * pulse;
        ctx.save();
        ctx.shadowBlur = 20;
        ctx.shadowColor = `hsla(210, 100%, 70%, ${currentOpacity * 0.5})`;
        if (i % 4 === 0) {
          const ringRadius = 25 + Math.sin(time + i) * 5;
          ctx.beginPath();
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `hsla(200, 100%, 70%, ${currentOpacity * 0.2})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.font = `${node.size}px "Noto Sans", sans-serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = `hsla(210, 100%, 85%, ${currentOpacity})`;
        ctx.fillText(node.char, node.x, node.y);
        ctx.restore();
      });

      // Draw flowing curves
      ctx.save();
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const startY = height * 0.3 + i * height * 0.2;
        ctx.moveTo(0, startY);
        for (let x = 0; x <= width; x += 20) {
          const y = startY + Math.sin(x / width * Math.PI * 2 + time + i) * 30;
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `hsla(210, 100%, 60%, ${0.05 - i * 0.01})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      ctx.restore();
      animationRef.current = requestAnimationFrame(animate);
    };
    updateConnections();
    animate();
    } // end initAndAnimate

    return () => {
      if (typeof requestIdleCallback !== "undefined") cancelIdleCallback(idleId);
      else clearTimeout(idleId);
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0f1a] via-[#0d1525] to-[#0a1628]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.9 }} />

      {/* Radial gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 50%, hsla(210, 100%, 50%, 0.08), transparent 70%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 40% at 30% 70%, hsla(200, 100%, 60%, 0.05), transparent 60%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 50% at 70% 30%, hsla(220, 100%, 50%, 0.05), transparent 60%)" }} />
      </div>

      {/* Content — CSS fade-in-up instead of framer-motion */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl group">
        <h1
          className="font-heading font-bold text-white leading-tight animate-[hero-fade-up_0.8s_ease-out_0.2s_both]"
        >
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl">AI4Inclusion</span>
          <CyclingSubheading />
        </h1>

        <p
          className="text-lg md:text-xl text-gray-300/90 mt-8 leading-relaxed max-w-3xl mx-auto animate-[hero-fade-up_0.8s_ease-out_0.4s_both]"
        >
          AI4Inclusion empowers nations to build their own Language AI DPI from citizen-sourced datasets to public-serving orchestration. It enables true digital inclusion in every spoken language.
        </p>

        <div
          className="mt-10 flex flex-wrap justify-center gap-4 animate-[hero-fade-up_0.8s_ease-out_0.6s_both]"
        >
          <button onClick={() => scrollToSection("building-blocks")} className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:scale-105">
            Explore Building Blocks <ArrowDown size={18} />
          </button>
          <button onClick={() => scrollToSection("quick-start")} className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-medium border border-white/20 hover:border-white/40 hover:bg-white/15 transition-all flex items-center gap-2 hover:scale-105">
            Get Started <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent pointer-events-none" />
    </section>
  );
};

export default LanguageNetworkHero;

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import heroBanner from "@/assets/hero-banner-final.png";

// Language scripts matching the existing banner design
const languageGlyphs = [
  "अ", "आ", "क", "ග", "த", "ಕ", "আ", // Indic scripts
  "ا", "ب", "ت", "ث", // Arabic
  "字", "語", "言", // CJK
  "A", "B", "Ω", "Σ", // Latin/Greek
];

interface FloatingGlyph {
  char: string;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  delay: number;
}

export const AnimatedHeroBanner = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Preload hero image immediately
  useEffect(() => {
    const img = new Image();
    img.src = heroBanner;
    img.loading = "eager";
    img.fetchPriority = "high";
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    
    // Create floating particles (data streams)
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
    }> = [];
    
    // Initialize particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        size: Math.random() * 2 + 1,
      });
    }
    
    let animationFrame: number;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        
        // Pulse opacity
        particle.opacity = Math.sin(Date.now() * 0.001 + particle.x) * 0.2 + 0.3;
        
        // Draw particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = "#60a5fa"; // Soft blue matching banner
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#3b82f6";
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  // Generate floating glyphs
  const floatingGlyphs: FloatingGlyph[] = languageGlyphs.map((char, i) => ({
    char,
    x: 15 + (i % 4) * 20 + Math.random() * 10,
    y: 10 + Math.floor(i / 4) * 20 + Math.random() * 10,
    size: 16 + Math.random() * 8,
    opacity: 0.2 + Math.random() * 0.3,
    speed: 20 + Math.random() * 20,
    delay: i * 0.5,
  }));
  
  return (
    <div className="absolute inset-y-0 right-0 w-2/5 pointer-events-none select-none overflow-hidden">
      {/* Background static image - preloaded with high priority */}
      <img 
        ref={imageRef}
        src={heroBanner}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-right-top brightness-105 contrast-110"
        style={{ imageRendering: 'crisp-edges' }}
        loading="eager"
        decoding="sync"
        aria-hidden="true"
      />
      
      {/* Canvas for particles and data streams */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Animated data rings orbiting the globe */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Ring 1 - Inner orbit */}
        <motion.ellipse
          cx="65"
          cy="50"
          rx="18"
          ry="12"
          fill="none"
          stroke="rgba(96, 165, 250, 0.4)"
          strokeWidth="0.3"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "65% 50%" }}
        />
        
        {/* Ring 2 - Middle orbit */}
        <motion.ellipse
          cx="65"
          cy="50"
          rx="25"
          ry="16"
          fill="none"
          stroke="rgba(251, 191, 36, 0.3)"
          strokeWidth="0.25"
          initial={{ rotate: 0 }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "65% 50%" }}
        />
        
        {/* Ring 3 - Outer orbit */}
        <motion.ellipse
          cx="65"
          cy="50"
          rx="32"
          ry="20"
          fill="none"
          stroke="rgba(96, 165, 250, 0.25)"
          strokeWidth="0.2"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "65% 50%" }}
        />
        
        {/* Glowing orbit dots */}
        <motion.circle
          cx="65"
          cy="50"
          r="1"
          fill="rgba(251, 191, 36, 0.8)"
          filter="url(#glow)"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformOrigin: "65% 50%", transform: "translate(18px, 0)" }}
        />
        
        {/* Glow filter */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>
      
      {/* Floating language glyphs */}
      {floatingGlyphs.map((glyph, i) => (
        <motion.div
          key={i}
          className="absolute text-blue-300/40 font-medium pointer-events-none"
          style={{
            left: `${glyph.x}%`,
            top: `${glyph.y}%`,
            fontSize: `${glyph.size}px`,
          }}
          initial={{ 
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, glyph.opacity, glyph.opacity, 0],
            y: [-20, -40, -60, -80],
          }}
          transition={{
            duration: glyph.speed,
            repeat: Infinity,
            delay: glyph.delay,
            ease: "easeOut",
          }}
        >
          {glyph.char}
        </motion.div>
      ))}
      
      {/* Pulsing glow effect behind globe */}
      <motion.div 
        className="absolute inset-0 blur-3xl opacity-0"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background: 'radial-gradient(ellipse at 65% 50%, rgba(96, 165, 250, 0.3), transparent 60%)',
        }}
      />
      
      {/* Gradient overlay to blend with background */}
      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#0a1628]/60" aria-hidden="true" />
    </div>
  );
};

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import aiLifecycleImage from "@/assets/ai-lifecycle-animated.png";

// Glowing arrows and flowing data waves overlay
const FlowingWaves = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      <defs>
        {/* Glow filter for arrows */}
        <filter id="arrowGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Animated gradient for flowing effect */}
        <linearGradient id="flowWave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142, 70%, 50%)" stopOpacity="0" />
          <stop offset="20%" stopColor="hsl(142, 70%, 60%)" stopOpacity="0.8" />
          <stop offset="40%" stopColor="hsl(205, 85%, 55%)" stopOpacity="1" />
          <stop offset="60%" stopColor="hsl(270, 60%, 55%)" stopOpacity="0.8" />
          <stop offset="80%" stopColor="hsl(25, 85%, 55%)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="hsl(25, 85%, 55%)" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="flowWave2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(205, 85%, 60%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(205, 85%, 70%)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="hsl(205, 85%, 60%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Main lifecycle flow path - Stage 1 to 4 */}
      <motion.path
        d="M 60 220 C 120 280, 180 340, 280 360 C 380 380, 450 350, 520 300 C 590 250, 640 200, 720 180 C 800 160, 860 160, 920 200"
        fill="none"
        stroke="url(#flowWave1)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#arrowGlow)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ 
          pathLength: { duration: 2, ease: "easeOut" },
          opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Flowing data wave particles along the path */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.circle
          key={i}
          r={4 + i * 0.5}
          fill="hsl(205, 85%, 60%)"
          filter="url(#arrowGlow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.9, 0.9, 0.9, 0],
            cx: ["60", "280", "520", "720", "920"],
            cy: ["220", "360", "300", "180", "200"]
          }}
          transition={{
            duration: 6,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Secondary wave particles for density */}
      {[0, 1, 2].map((i) => (
        <motion.circle
          key={`secondary-${i}`}
          r={3}
          fill="hsl(270, 60%, 60%)"
          filter="url(#arrowGlow)"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.7, 0.7, 0],
            cx: ["280", "520", "720", "920"],
            cy: ["360", "300", "180", "200"]
          }}
          transition={{
            duration: 4.5,
            delay: i * 1.5 + 0.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      {/* Glowing arrow heads at key points */}
      <motion.polygon
        points="280,355 290,365 295,355"
        fill="hsl(142, 70%, 55%)"
        filter="url(#arrowGlow)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.polygon
        points="520,295 530,305 535,295"
        fill="hsl(205, 85%, 55%)"
        filter="url(#arrowGlow)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.polygon
        points="720,175 730,185 735,175"
        fill="hsl(270, 60%, 55%)"
        filter="url(#arrowGlow)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.polygon
        points="900,195 910,205 915,195"
        fill="hsl(25, 85%, 55%)"
        filter="url(#arrowGlow)"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </svg>
  );
};

// Rotating settings icon in IMPROVE section
const RotatingSettingsIcon = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ right: "7%", top: "22%", width: "32px", height: "32px", zIndex: 3 }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
        <motion.path
          d="M12 15a3 3 0 100-6 3 3 0 000 6z"
          stroke="hsl(25, 85%, 55%)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.path
          d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"
          stroke="hsl(25, 85%, 55%)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>
    </motion.div>
  );
};

// Progressive glow effect following the flow
const ProgressiveGlow = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  const stages = [
    { x: "8%", y: "40%", color: "hsl(142, 70%, 50%)", delay: 0 },
    { x: "30%", y: "65%", color: "hsl(205, 85%, 55%)", delay: 1.5 },
    { x: "55%", y: "45%", color: "hsl(270, 60%, 55%)", delay: 3 },
    { x: "88%", y: "25%", color: "hsl(25, 85%, 55%)", delay: 4.5 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {stages.map((stage, index) => (
        <motion.div
          key={index}
          className="absolute w-16 h-16 rounded-full"
          style={{
            left: stage.x,
            top: stage.y,
            background: `radial-gradient(circle, ${stage.color} 0%, transparent 70%)`,
            transform: "translate(-50%, -50%)"
          }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{
            duration: 3,
            delay: stage.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const AnimatedLifecycleDiagram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const reducedMotion = prefersReducedMotion ?? false;

  return (
    <>
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden shadow-large group cursor-pointer bg-gradient-to-br from-slate-50 to-white"
            onClick={() => setIsOpen(true)}
          >
            {/* Base image */}
            <div className="relative">
              <img
                src={aiLifecycleImage}
                alt="The Continuous AI Lifecycle for Language Ecosystems"
                className="w-full h-auto object-contain"
                loading="eager"
                fetchPriority="high"
                style={{ clipPath: "inset(0 0 15% 0)" }}
              />
              
              {/* Animated overlay layers */}
              <ProgressiveGlow reducedMotion={reducedMotion} />
              <FlowingWaves reducedMotion={reducedMotion} />
              <RotatingSettingsIcon reducedMotion={reducedMotion} />
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-white/10 pointer-events-none" />
            </div>
            
            {/* Bottom bar with title and expand button */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/70 to-transparent p-6">
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-white font-heading font-bold text-lg md:text-xl mb-1">
                    The Continuous AI Lifecycle
                  </h3>
                  <p className="text-white/70 text-sm max-w-xl">
                    From data creation to model serving — a self-improving cycle
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-white text-foreground px-4 py-2 rounded-lg font-medium text-sm shadow-medium hover:bg-white/90 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(true);
                  }}
                >
                  <Maximize2 size={16} /> Expand
                </motion.button>
              </div>
            </div>
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Full screen dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-[98vw] w-[98vw] h-[95vh] p-0 bg-white overflow-hidden [&>button]:hidden flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0 bg-gradient-to-r from-slate-50 to-white">
            <div>
              <h3 className="font-heading font-bold text-base md:text-lg">
                The Continuous AI Lifecycle for Language Ecosystems
              </h3>
              <p className="text-sm text-muted-foreground">
                Watch the data flow from creation to deployment
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-1 p-4 flex items-center justify-center min-h-0 relative bg-gradient-to-br from-slate-50 to-white">
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={aiLifecycleImage}
                alt="The Continuous AI Lifecycle for Language Ecosystems"
                className="max-w-full max-h-full object-contain"
                style={{ clipPath: "inset(0 0 15% 0)" }}
              />
              
              {/* Animated overlays in fullscreen too */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <FlowingWaves reducedMotion={reducedMotion} />
                  <RotatingSettingsIcon reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimatedLifecycleDiagram;

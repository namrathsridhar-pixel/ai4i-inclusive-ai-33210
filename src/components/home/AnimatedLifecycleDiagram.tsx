import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";
import { Maximize2, X } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import aiLifecycleImage from "@/assets/ai-lifecycle-ecosystem.png";

interface StageInfo {
  id: string;
  title: string;
  description: string;
  color: string;
  position: { x: string; y: string };
}

const stages: StageInfo[] = [
  {
    id: "create",
    title: "1. CREATE",
    description: "Build the data foundation through citizen contribution",
    color: "hsl(142, 70%, 45%)", // Green
    position: { x: "8%", y: "25%" }
  },
  {
    id: "deploy",
    title: "2. DEPLOY",
    description: "Run models as infrastructure via unified API",
    color: "hsl(205, 85%, 45%)", // Blue
    position: { x: "35%", y: "65%" }
  },
  {
    id: "observe",
    title: "3. OBSERVE",
    description: "Monitor real-world performance and quality gaps",
    color: "hsl(270, 60%, 55%)", // Purple
    position: { x: "55%", y: "25%" }
  },
  {
    id: "improve",
    title: "4. IMPROVE",
    description: "Close the feedback loop for continuous learning",
    color: "hsl(25, 85%, 55%)", // Orange
    position: { x: "85%", y: "20%" }
  }
];

// Data flow particles that move along the lifecycle path
const FlowParticles = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: i * 0.7,
    duration: 8 + Math.random() * 2,
    size: 3 + Math.random() * 3,
    opacity: 0.4 + Math.random() * 0.3
  }));

  // Clockwise path around the lifecycle
  const pathPoints = [
    { x: 10, y: 35 },   // Create
    { x: 25, y: 55 },   // Flowing down
    { x: 40, y: 70 },   // Deploy
    { x: 55, y: 60 },   // Moving right
    { x: 65, y: 40 },   // Observe
    { x: 80, y: 25 },   // Moving up
    { x: 90, y: 20 },   // Improve
    { x: 85, y: 35 },   // Feedback loop
    { x: 70, y: 50 },   // Coming back
    { x: 50, y: 55 },   // Continue
    { x: 30, y: 45 },   // Almost there
    { x: 15, y: 30 },   // Back to create
  ];

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }}>
      <defs>
        <filter id="particleGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {particles.map((particle) => (
        <motion.circle
          key={particle.id}
          r={particle.size}
          fill="url(#particleGradient)"
          filter="url(#particleGlow)"
          initial={{ opacity: 0 }}
          animate={{
            x: pathPoints.map(p => `${p.x}%`),
            y: pathPoints.map(p => `${p.y}%`),
            opacity: [0, particle.opacity, particle.opacity, particle.opacity, 0]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
      
      <defs>
        <radialGradient id="particleGradient">
          <stop offset="0%" stopColor="hsl(205, 85%, 60%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(270, 60%, 55%)" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

// Animated flow arrows with gradient motion
const FlowArrows = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
      <defs>
        <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(142, 70%, 50%)" stopOpacity="0" />
          <motion.stop
            offset="50%"
            stopColor="hsl(205, 85%, 55%)"
            stopOpacity="0.6"
            animate={{ offset: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
          <stop offset="100%" stopColor="hsl(270, 60%, 55%)" stopOpacity="0" />
        </linearGradient>
        
        <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(270, 60%, 55%)" stopOpacity="0" />
          <motion.stop
            offset="50%"
            stopColor="hsl(25, 85%, 55%)"
            stopOpacity="0.6"
            animate={{ offset: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
          />
          <stop offset="100%" stopColor="hsl(142, 70%, 50%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      {/* Main flow path - clockwise */}
      <motion.path
        d="M 80 180 Q 200 350, 350 380 Q 500 400, 550 300 Q 600 200, 750 150 Q 850 120, 900 180"
        fill="none"
        stroke="url(#flowGradient1)"
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.4 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      
      {/* Feedback loop path */}
      <motion.path
        d="M 880 200 Q 850 280, 750 320 Q 600 360, 400 340 Q 200 320, 100 200"
        fill="none"
        stroke="url(#flowGradient2)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="8 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
};

// Stage indicator with pulse animation
const StageIndicator = ({ 
  stage, 
  isActive,
  onClick,
  reducedMotion
}: { 
  stage: StageInfo; 
  isActive: boolean;
  onClick: () => void;
  reducedMotion: boolean;
}) => {
  return (
    <motion.div
      className="absolute cursor-pointer z-10"
      style={{ left: stage.position.x, top: stage.position.y }}
      onClick={onClick}
      whileHover={reducedMotion ? {} : { scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Pulse ring */}
      {!reducedMotion && (
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ 
            background: stage.color,
            transform: "translate(-50%, -50%)"
          }}
          initial={{ scale: 1, opacity: 0.4 }}
          animate={{ 
            scale: [1, 1.8, 1],
            opacity: [0.4, 0, 0.4]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: stages.indexOf(stage) * 0.75
          }}
        />
      )}
      
      {/* Main indicator dot */}
      <motion.div
        className="w-4 h-4 rounded-full shadow-lg"
        style={{ 
          background: stage.color,
          boxShadow: `0 0 12px ${stage.color}`,
          transform: "translate(-50%, -50%)"
        }}
        animate={reducedMotion ? {} : {
          boxShadow: [
            `0 0 8px ${stage.color}`,
            `0 0 20px ${stage.color}`,
            `0 0 8px ${stage.color}`
          ]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Tooltip on hover */}
      <motion.div
        className="absolute left-6 top-0 bg-foreground/95 text-background px-3 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm"
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        style={{ pointerEvents: "none" }}
      >
        <div className="font-semibold">{stage.title}</div>
        <div className="text-xs opacity-80 max-w-[200px]">{stage.description}</div>
      </motion.div>
    </motion.div>
  );
};

// Animated data packets flowing through stages
const DataPackets = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  const packetTypes = [
    { label: "speech", color: "hsl(142, 70%, 50%)" },
    { label: "text", color: "hsl(205, 85%, 55%)" },
    { label: "signal", color: "hsl(25, 85%, 55%)" }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
      {packetTypes.map((packet, index) => (
        <motion.div
          key={packet.label}
          className="absolute w-2 h-2 rounded-full"
          style={{ background: packet.color }}
          initial={{ x: "5%", y: "30%", opacity: 0, scale: 0 }}
          animate={{
            x: ["5%", "35%", "60%", "85%", "70%", "40%", "5%"],
            y: ["30%", "70%", "35%", "20%", "40%", "55%", "30%"],
            opacity: [0, 0.8, 0.8, 0.8, 0.6, 0.4, 0],
            scale: [0, 1, 1, 1, 0.8, 0.6, 0]
          }}
          transition={{
            duration: 12,
            delay: index * 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Chart drawing animation for Observe stage
const ChartAnimation = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{ left: "62%", top: "30%", width: "60px", height: "30px", zIndex: 4 }}
    >
      <svg viewBox="0 0 60 30" className="w-full h-full">
        <motion.path
          d="M 0 25 Q 15 20, 20 15 T 35 18 T 50 8 L 60 5"
          fill="none"
          stroke="hsl(270, 60%, 55%)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.8, 1]
          }}
        />
      </svg>
    </motion.div>
  );
};

// Feedback loop glow effect
const FeedbackLoopGlow = ({ reducedMotion }: { reducedMotion: boolean }) => {
  if (reducedMotion) return null;

  return (
    <motion.div
      className="absolute pointer-events-none rounded-full"
      style={{ 
        right: "8%", 
        top: "15%", 
        width: "80px", 
        height: "80px",
        background: "radial-gradient(circle, hsl(25, 85%, 55%) 0%, transparent 70%)",
        zIndex: 1
      }}
      animate={{
        opacity: [0.1, 0.3, 0.1],
        scale: [0.9, 1.1, 0.9]
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

const AnimatedLifecycleDiagram = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<string | null>(null);
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
            onMouseLeave={() => setActiveStage(null)}
          >
            {/* Base image */}
            <div className="relative">
              <img
                src={aiLifecycleImage}
                alt="The Continuous AI Lifecycle for Language Ecosystems"
                className="w-full h-auto object-contain"
                loading="eager"
                fetchPriority="high"
              />
              
              {/* Animated overlay layers */}
              <FlowArrows reducedMotion={reducedMotion} />
              <FlowParticles reducedMotion={reducedMotion} />
              <DataPackets reducedMotion={reducedMotion} />
              <ChartAnimation reducedMotion={reducedMotion} />
              <FeedbackLoopGlow reducedMotion={reducedMotion} />
              
              {/* Interactive stage indicators */}
              {stages.map((stage) => (
                <StageIndicator
                  key={stage.id}
                  stage={stage}
                  isActive={activeStage === stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  reducedMotion={reducedMotion}
                />
              ))}
              
              {/* Subtle gradient overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 pointer-events-none" />
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
          <VisuallyHidden>
            <DialogTitle>The Continuous AI Lifecycle for Language Ecosystems</DialogTitle>
            <DialogDescription>Interactive diagram showing the AI lifecycle from data creation to model serving</DialogDescription>
          </VisuallyHidden>
          <div className="flex items-center justify-between p-4 border-b border-border shrink-0 bg-gradient-to-r from-slate-50 to-white">
            <div>
              <h3 className="font-heading font-bold text-base md:text-lg">
                The Continuous AI Lifecycle for Language Ecosystems
              </h3>
              <p className="text-sm text-muted-foreground">
                Click stages to learn more • Animations show continuous data flow
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
              />
              
              {/* Animated overlays in fullscreen too */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                  <FlowParticles reducedMotion={reducedMotion} />
                  <DataPackets reducedMotion={reducedMotion} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Stage legend */}
          <div className="p-4 border-t border-border bg-slate-50 shrink-0">
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              {stages.map((stage) => (
                <div key={stage.id} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full"
                    style={{ background: stage.color }}
                  />
                  <span className="text-sm font-medium">{stage.title}</span>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AnimatedLifecycleDiagram;

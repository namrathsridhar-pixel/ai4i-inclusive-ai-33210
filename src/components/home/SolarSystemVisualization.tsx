import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Mic, Globe, BarChart3, Languages, Volume2, FileText, Brain, Fingerprint, MessageSquare, Database, Zap, Eye, Users } from "lucide-react";

interface Planet {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  angle: number;
}

interface Tooltip {
  x: number;
  y: number;
  content: string;
  title: string;
}

const aiServices: Planet[] = [{
  id: "asr",
  name: "ASR",
  icon: <Mic size={16} />,
  description: "Automatic Speech Recognition - Speech-to-Text conversion",
  angle: 0
}, {
  id: "nmt",
  name: "NMT",
  icon: <Languages size={16} />,
  description: "Neural Machine Translation across languages",
  angle: 33
}, {
  id: "tts",
  name: "TTS",
  icon: <Volume2 size={16} />,
  description: "Text-to-Speech synthesis with natural voices",
  angle: 65
}, {
  id: "ocr",
  name: "OCR",
  icon: <FileText size={16} />,
  description: "Optical Character Recognition from images and documents",
  angle: 98
}, {
  id: "llm",
  name: "LLMs",
  icon: <Brain size={16} />,
  description: "Large Language Models for understanding and generation",
  angle: 130
}, {
  id: "transliteration",
  name: "Transliteration",
  icon: <MessageSquare size={16} />,
  description: "Script conversion between different writing systems",
  angle: 163
}, {
  id: "lang-detect",
  name: "Language Detection",
  icon: <Globe size={16} />,
  description: "Detect and identify text language automatically",
  angle: 196
}, {
  id: "audio-lang-detect",
  name: "Audio Language Detection",
  icon: <Mic size={16} />,
  description: "Detect language from audio input",
  angle: 229
}, {
  id: "speaker-diarization",
  name: "Speaker Diarization",
  icon: <Fingerprint size={16} />,
  description: "Identify and separate different speakers in audio",
  angle: 262
}, {
  id: "lang-diarization",
  name: "Language Diarization",
  icon: <Database size={16} />,
  description: "Identify language switches within audio",
  angle: 295
}, {
  id: "ner",
  name: "NER",
  icon: <Zap size={16} />,
  description: "Named Entity Recognition - Extract entities from text",
  angle: 327
}];

const SolarSystemVisualization = () => {
  const [hoveredElement, setHoveredElement] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip | null>(null);
  const [time, setTime] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setTime(t => t + 0.5);
    }, 50);
    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const showTooltip = (e: React.MouseEvent, title: string, content: string) => {
    setTooltip({
      x: e.clientX,
      y: e.clientY,
      content,
      title
    });
  };

  const hideTooltip = () => {
    setTooltip(null);
    setHoveredElement(null);
  };

  const coreGlowIntensity = hoveredElement ? 1.5 : 1;

  // Calculate orbit positions - properly spaced
  const innerOrbitRadius = 100; // AI Services orbit
  const midOrbitRadius = 160; // AI4I-Observe orbit
  const outerOrbitRadius = 220; // AI4I-Contribute orbit

  const getOrbitPosition = (angle: number, radius: number, speed: number = 1) => {
    const radians = (angle + (prefersReducedMotion ? 0 : time * speed)) * Math.PI / 180;
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius
    };
  };

  // Calculate satellite positions dynamically (no useMemo to ensure they update)
  const observePos = getOrbitPosition(60, midOrbitRadius, 0.12);
  const contributePos = getOrbitPosition(210, outerOrbitRadius, 0.06);

  return <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Background starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 rounded-full bg-white/30" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={prefersReducedMotion ? {} : {
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.5, 1]
      }} transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>


      <div className="container mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What AI4Inclusion Enables
            <motion.span className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto" initial={{
            width: 0
          }} whileInView={{
            width: "200px"
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.3
          }} />
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A unified ecosystem powering Language AI at population scale
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Solar System Visualization */}
          <div className="relative w-full lg:w-2/3 aspect-square max-w-[550px] mx-auto">
            {/* Orbit rings with dashed animation */}
            {[innerOrbitRadius, midOrbitRadius, outerOrbitRadius].map((radius, i) => <motion.div key={i} className="absolute rounded-full" style={{
            width: radius * 2,
            height: radius * 2,
            left: `calc(50% - ${radius}px)`,
            top: `calc(50% - ${radius}px)`,
            border: i === 0 ? '1px solid rgba(255,255,255,0.1)' : '1px dashed rgba(255,255,255,0.15)'
          }} initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: i * 0.2,
            duration: 0.6
          }} />)}

            {/* Center (Sun) - AI4I-Orchestrate */}
            <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20" onMouseEnter={e => {
            setHoveredElement("orchestrate");
            showTooltip(e, "AI4I-Orchestrate", "Hosts, scales, and governs all Language AI models. The central orchestration engine.");
          }} onMouseLeave={hideTooltip} whileHover={{
            scale: 1.1
          }}>
              <motion.div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center cursor-pointer" animate={prefersReducedMotion ? {} : {
              boxShadow: [`0 0 40px ${20 * coreGlowIntensity}px hsl(216 100% 50% / 0.4)`, `0 0 60px ${30 * coreGlowIntensity}px hsl(205 100% 50% / 0.3)`, `0 0 40px ${20 * coreGlowIntensity}px hsl(216 100% 50% / 0.4)`]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }}>
                <Globe size={48} className="text-white" />
              </motion.div>
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="text-white font-semibold text-sm">AI4I-Orchestrate</p>
                <p className="text-white/60 text-xs">The Central Engine</p>
              </div>
            </motion.div>

            {/* Inner Orbit - AI Services (Planets) */}
            {aiServices.map(service => {
            const pos = getOrbitPosition(service.angle, innerOrbitRadius, 0.15);
            const isHovered = hoveredElement === service.id;
            return <motion.div key={service.id} className="absolute z-10" style={{
              left: `calc(50% + ${pos.x}px)`,
              top: `calc(50% + ${pos.y}px)`,
              transform: "translate(-50%, -50%)"
            }} onMouseEnter={e => {
              setHoveredElement(service.id);
              showTooltip(e, service.name, service.description);
            }} onMouseLeave={hideTooltip} animate={{
              scale: isHovered ? 1.3 : 1
            }} transition={{
              duration: 0.2
            }}>
                  <div className={`w-9 h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center cursor-pointer shadow-lg ${isHovered ? 'ring-2 ring-white/50' : ''}`}>
                    {service.icon}
                  </div>
                  <p className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-[9px] whitespace-nowrap">
                    {service.name}
                  </p>
                </motion.div>;
          })}

            {/* Mid Orbit - AI4I-Observe (Satellite) */}
            <motion.div 
              className="absolute z-10" 
              style={{
                left: `calc(50% + ${observePos.x}px)`,
                top: `calc(50% + ${observePos.y}px)`,
                transform: "translate(-50%, -50%)"
              }} 
              onMouseEnter={e => {
                setHoveredElement("observe");
                showTooltip(e, "AI4I-Observe", "Real-time monitoring, telemetry, drift detection, governance dashboards.");
              }} 
              onMouseLeave={hideTooltip} 
              animate={{
                scale: hoveredElement === "observe" ? 1.2 : 1
              }}
            >
              <motion.div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center cursor-pointer shadow-lg ${hoveredElement === "observe" ? 'ring-2 ring-cyan-400/50' : ''}`}>
                <BarChart3 size={22} className="text-white" />
                {/* Satellite panels */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-sm" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2.5 h-6 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-sm" />
                {/* Scanning beam */}
                {!prefersReducedMotion && <motion.div className="absolute w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent origin-left" animate={{
                  rotate: 360
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }} />}
                {/* Orbital trail */}
                {!prefersReducedMotion && <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-cyan-400/40"
                  animate={{
                    opacity: [0.6, 0],
                    scale: [1, 0.5],
                    x: [-20, -40],
                    y: [0, 10]
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />}
              </motion.div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <p className="text-cyan-400 font-semibold text-xs">AI4I-Observe</p>
                <p className="text-white/50 text-[9px]">Analytics Satellite</p>
              </div>
            </motion.div>

            {/* Outer Orbit - AI4I-Contribute (Satellite) */}
            <motion.div 
              className="absolute z-10" 
              style={{
                left: `calc(50% + ${contributePos.x}px)`,
                top: `calc(50% + ${contributePos.y}px)`,
                transform: "translate(-50%, -50%)"
              }} 
              onMouseEnter={e => {
                setHoveredElement("contribute");
                showTooltip(e, "AI4I-Contribute", "Crowdsourced speech data, validation, and dataset expansion.");
              }} 
              onMouseLeave={hideTooltip} 
              animate={{
                scale: hoveredElement === "contribute" ? 1.2 : 1
              }}
            >
              <div className={`relative w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center cursor-pointer shadow-lg ${hoveredElement === "contribute" ? 'ring-2 ring-green-400/50' : ''}`}>
                <Users size={22} className="text-white" />
                {/* Satellite panels */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-2.5 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-sm" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-2.5 h-6 bg-gradient-to-b from-green-400 to-green-600 rounded-sm" />
                {/* Data particles flowing inward */}
                {!prefersReducedMotion && [...Array(5)].map((_, i) => <motion.div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-green-400" animate={{
                  x: [0, -60 - Math.random() * 80],
                  y: [0, Math.sin(i * 1.2) * 40],
                  opacity: [1, 0]
                }} transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.5
                }} />)}
                {/* Orbital trail */}
                {!prefersReducedMotion && <motion.div 
                  className="absolute w-3 h-3 rounded-full bg-green-400/40"
                  animate={{
                    opacity: [0.6, 0],
                    scale: [1, 0.5],
                    x: [20, 40],
                    y: [0, -10]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeOut"
                  }}
                />}
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                <p className="text-green-400 font-semibold text-xs">AI4I-Contribute</p>
                <p className="text-white/50 text-[9px]">Data Satellite</p>
              </div>
            </motion.div>

            {/* Connection lines - show on hover */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{
            overflow: 'visible'
          }}>
              <defs>
                <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(205, 100%, 50%)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Pulsing data lines from Observe to planets */}
              {hoveredElement === "observe" && aiServices.map((service, i) => {
              const servicePos = getOrbitPosition(service.angle, innerOrbitRadius, 0.15);
              return <motion.line key={`observe-${service.id}`} x1="50%" y1="50%" x2={`calc(50% + ${servicePos.x}px)`} y2={`calc(50% + ${servicePos.y}px)`} stroke="url(#lineGradientBlue)" strokeWidth="1" initial={{
                pathLength: 0,
                opacity: 0
              }} animate={{
                pathLength: 1,
                opacity: 0.5
              }} transition={{
                duration: 0.5,
                delay: i * 0.05
              }} />;
            })}
            </svg>
          </div>

          {/* Text Block */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <h3 className="text-white font-semibold">Language AI at Population Scale</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                AI models can be hosted, shared, and reused by nations, enterprises, and platforms.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.3
          }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                  <Eye size={20} className="text-cyan-400" />
                </div>
                <h3 className="text-white font-semibold">Continuous Evolution</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Observe ensures AI quality, transparency, and trustworthiness through telemetry, governance, and drift detection.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                  <Users size={20} className="text-green-400" />
                </div>
                <h3 className="text-white font-semibold">Community-Powered AI</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                Contribute enables dataset generation and dialect coverage through citizen participation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <AnimatePresence>
        {tooltip && <motion.div initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: 10
      }} className="fixed z-50 bg-foreground/95 text-background px-4 py-3 rounded-lg shadow-xl max-w-xs pointer-events-none" style={{
        left: tooltip.x + 15,
        top: tooltip.y + 15
      }}>
            <p className="font-semibold text-sm mb-1">{tooltip.title}</p>
            <p className="text-xs opacity-80">{tooltip.content}</p>
          </motion.div>}
      </AnimatePresence>
    </section>;
};

export default SolarSystemVisualization;
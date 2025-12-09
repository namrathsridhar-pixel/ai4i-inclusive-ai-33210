import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { 
  Mic, Globe, BarChart3, Languages, Volume2, FileText, 
  Brain, Fingerprint, MessageSquare, Database, Zap, Eye,
  Users, Radio, Satellite
} from "lucide-react";

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

const aiServices: Planet[] = [
  { id: "asr", name: "ASR", icon: <Mic size={16} />, description: "Speech-to-Text conversion for all languages", angle: 0 },
  { id: "tts", name: "TTS", icon: <Volume2 size={16} />, description: "Text-to-Speech synthesis with natural voices", angle: 45 },
  { id: "nmt", name: "NMT", icon: <Languages size={16} />, description: "Neural Machine Translation across languages", angle: 90 },
  { id: "ocr", name: "OCR", icon: <FileText size={16} />, description: "Text extraction from images and documents", angle: 135 },
  { id: "llm", name: "LLM", icon: <Brain size={16} />, description: "Large Language Models for understanding and generation", angle: 180 },
  { id: "voice", name: "Voice Bio", icon: <Fingerprint size={16} />, description: "Voice biometrics for secure authentication", angle: 225 },
  { id: "dialect", name: "Dialects", icon: <MessageSquare size={16} />, description: "Dialect adaptation for regional accuracy", angle: 270 },
  { id: "domain", name: "Domain AI", icon: <Database size={16} />, description: "Domain-specific models for specialized use cases", angle: 315 },
];

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
    setTooltip({ x: e.clientX, y: e.clientY, content, title });
  };

  const hideTooltip = () => {
    setTooltip(null);
    setHoveredElement(null);
  };

  const coreGlowIntensity = hoveredElement ? 1.5 : 1;

  // Calculate orbit positions
  const innerOrbitRadius = 120;
  const midOrbitRadius = 180;
  const outerOrbitRadius = 240;

  const getOrbitPosition = (angle: number, radius: number, speed: number = 1) => {
    const radians = ((angle + (prefersReducedMotion ? 0 : time * speed)) * Math.PI) / 180;
    return {
      x: Math.cos(radians) * radius,
      y: Math.sin(radians) * radius,
    };
  };

  return (
    <section className="py-20 px-4 bg-[#0a1628] relative overflow-hidden">
      {/* Background starfield */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={prefersReducedMotion ? {} : {
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            What AI4Inclusion Enables
            <motion.span
              className="block h-0.5 bg-gradient-to-r from-primary to-secondary mt-3 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: "200px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            A unified ecosystem powering Language AI at population scale
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Solar System Visualization */}
          <div className="relative w-full lg:w-2/3 aspect-square max-w-[600px] mx-auto">
            {/* Orbit rings */}
            {[innerOrbitRadius, midOrbitRadius, outerOrbitRadius].map((radius, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full border border-white/10"
                style={{
                  width: radius * 2,
                  height: radius * 2,
                  left: `calc(50% - ${radius}px)`,
                  top: `calc(50% - ${radius}px)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
              />
            ))}

            {/* Core (Sun) - AI4I Core */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              onMouseEnter={(e) => {
                setHoveredElement("core");
                showTooltip(e, "AI4I Core", "Hosts, scales, and governs all Language AI models.");
              }}
              onMouseLeave={hideTooltip}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-primary via-secondary to-primary flex items-center justify-center cursor-pointer"
                animate={prefersReducedMotion ? {} : {
                  boxShadow: [
                    `0 0 40px ${20 * coreGlowIntensity}px hsl(216 100% 50% / 0.4)`,
                    `0 0 60px ${30 * coreGlowIntensity}px hsl(205 100% 50% / 0.3)`,
                    `0 0 40px ${20 * coreGlowIntensity}px hsl(216 100% 50% / 0.4)`,
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Globe size={40} className="text-white" />
              </motion.div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">
                <p className="text-white font-semibold text-sm">AI4I Core</p>
                <p className="text-white/60 text-xs">Orchestration Engine</p>
              </div>
            </motion.div>

            {/* Inner Orbit - AI Services */}
            {aiServices.map((service) => {
              const pos = getOrbitPosition(service.angle, innerOrbitRadius, 0.2);
              const isHovered = hoveredElement === service.id;
              
              return (
                <motion.div
                  key={service.id}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${pos.x}px)`,
                    top: `calc(50% + ${pos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={(e) => {
                    setHoveredElement(service.id);
                    showTooltip(e, service.name, service.description);
                  }}
                  onMouseLeave={hideTooltip}
                  animate={{ scale: isHovered ? 1.3 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 flex items-center justify-center cursor-pointer shadow-lg ${isHovered ? 'ring-2 ring-white/50' : ''}`}>
                    {service.icon}
                  </div>
                  <p className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-white/80 text-[10px] whitespace-nowrap">
                    {service.name}
                  </p>
                </motion.div>
              );
            })}

            {/* Mid Orbit - AI4I Observe */}
            {useMemo(() => {
              const observePos = getOrbitPosition(45, midOrbitRadius, 0.1);
              const isHovered = hoveredElement === "observe";
              
              return (
                <motion.div
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${observePos.x}px)`,
                    top: `calc(50% + ${observePos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={(e) => {
                    setHoveredElement("observe");
                    showTooltip(e, "AI4I Observe", "Real-time monitoring, telemetry, drift detection, governance dashboards.");
                  }}
                  onMouseLeave={hideTooltip}
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                >
                  <motion.div 
                    className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center cursor-pointer shadow-lg ${isHovered ? 'ring-2 ring-cyan-400/50' : ''}`}
                    animate={prefersReducedMotion ? {} : { rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <BarChart3 size={24} className="text-white" />
                    {/* Scanning beam */}
                    {!prefersReducedMotion && (
                      <motion.div
                        className="absolute w-20 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent origin-left"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                  </motion.div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                    <p className="text-cyan-400 font-semibold text-xs">AI4I Observe</p>
                    <p className="text-white/50 text-[10px]">Analytics Satellite</p>
                  </div>
                </motion.div>
              );
            }, [hoveredElement, time, prefersReducedMotion])}

            {/* Outer Orbit - AI4I Contribute */}
            {useMemo(() => {
              const contributePos = getOrbitPosition(200, outerOrbitRadius, 0.05);
              const isHovered = hoveredElement === "contribute";
              
              return (
                <motion.div
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${contributePos.x}px)`,
                    top: `calc(50% + ${contributePos.y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  onMouseEnter={(e) => {
                    setHoveredElement("contribute");
                    showTooltip(e, "AI4I Contribute", "Crowdsourced speech data, validation, and dataset expansion.");
                  }}
                  onMouseLeave={hideTooltip}
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                >
                  <div className={`relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center cursor-pointer shadow-lg ${isHovered ? 'ring-2 ring-green-400/50' : ''}`}>
                    <Users size={24} className="text-white" />
                    {/* Data particles */}
                    {!prefersReducedMotion && [...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={{
                          x: [0, -50 - Math.random() * 100],
                          y: [0, Math.sin(i) * 30],
                          opacity: [1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.4,
                        }}
                      />
                    ))}
                  </div>
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
                    <p className="text-green-400 font-semibold text-xs">AI4I Contribute</p>
                    <p className="text-white/50 text-[10px]">Data Satellite</p>
                  </div>
                </motion.div>
              );
            }, [hoveredElement, time, prefersReducedMotion])}

            {/* Connection lines - only show on hover */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
              <defs>
                <linearGradient id="lineGradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="hsl(216, 100%, 50%)" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="hsl(205, 100%, 50%)" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              
              {/* Pulsing data lines from Observe to planets */}
              {hoveredElement === "observe" && aiServices.map((service, i) => {
                const servicePos = getOrbitPosition(service.angle, innerOrbitRadius, 0.2);
                const observePos = getOrbitPosition(45, midOrbitRadius, 0.1);
                return (
                  <motion.line
                    key={`observe-${service.id}`}
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${servicePos.x}px)`}
                    y2={`calc(50% + ${servicePos.y}px)`}
                    stroke="url(#lineGradientBlue)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                  />
                );
              })}
            </svg>
          </div>

          {/* Text Block */}
          <div className="lg:w-1/3 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap size={20} className="text-primary" />
                </div>
                <h3 className="text-white font-semibold">AI at Population Scale</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">
                AI models can be hosted, shared, and reused by nations, enterprises, and platforms.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
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
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="fixed z-50 bg-black/90 backdrop-blur-sm rounded-lg p-3 border border-white/20 pointer-events-none max-w-xs"
            style={{
              left: tooltip.x + 10,
              top: tooltip.y + 10,
            }}
          >
            <p className="text-white font-semibold text-sm">{tooltip.title}</p>
            <p className="text-white/70 text-xs mt-1">{tooltip.content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SolarSystemVisualization;

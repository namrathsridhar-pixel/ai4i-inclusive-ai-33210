import { motion } from "framer-motion";
import { Activity, Mic, Globe, BarChart3 } from "lucide-react";

// Waveform Animation for Core
export const WaveformAnimation = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="flex items-end gap-1 h-20">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="w-2 bg-gradient-to-t from-primary to-secondary rounded-full"
          animate={{
            height: [20, 40 + Math.random() * 40, 20],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  </div>
);

// Chart Animation for Observe
export const ChartAnimation = () => (
  <div className="w-full h-full flex items-center justify-center p-6">
    <svg viewBox="0 0 200 100" className="w-full h-full max-w-md">
      <motion.path
        d="M 0 80 Q 25 60, 50 70 T 100 50 T 150 40 T 200 20"
        fill="none"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
      />
      <motion.path
        d="M 0 90 Q 25 85, 50 80 T 100 70 T 150 65 T 200 50"
        fill="none"
        stroke="hsl(var(--secondary))"
        strokeWidth="2"
        strokeDasharray="4 4"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.3, repeat: Infinity, repeatDelay: 1 }}
      />
      {[30, 80, 130, 180].map((x, i) => (
        <motion.circle
          key={i}
          cx={x}
          cy={70 - i * 10}
          r="4"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
        />
      ))}
    </svg>
  </div>
);

// Microphone Animation for Contribute
export const MicrophoneAnimation = () => (
  <div className="w-full h-full flex flex-col items-center justify-center gap-4">
    <motion.div
      animate={{
        scale: [1, 1.1, 1],
        boxShadow: [
          "0 0 0 0 hsl(var(--primary) / 0)",
          "0 0 0 20px hsl(var(--primary) / 0.1)",
          "0 0 0 0 hsl(var(--primary) / 0)",
        ],
      }}
      transition={{ duration: 2, repeat: Infinity }}
      className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center"
    >
      <Mic size={32} className="text-primary-foreground" />
    </motion.div>
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="w-1 bg-primary rounded-full"
          animate={{
            height: [8, 24, 8],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  </div>
);

// Globe Animation for Orchestrate
export const GlobeAnimation = () => (
  <div className="w-full h-full flex items-center justify-center relative">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="relative"
    >
      <Globe size={80} className="text-primary/30" strokeWidth={1} />
    </motion.div>
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <motion.div
        key={i}
        className="absolute w-3 h-3 bg-primary rounded-full"
        style={{
          left: `calc(50% + ${Math.cos((angle * Math.PI) / 180) * 50}px)`,
          top: `calc(50% + ${Math.sin((angle * Math.PI) / 180) * 50}px)`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          delay: i * 0.3,
          repeat: Infinity,
        }}
      />
    ))}
  </div>
);

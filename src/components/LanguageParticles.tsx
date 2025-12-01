import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  char: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
}

const LanguageParticles = () => {
  const particles = useRef<Particle[]>([]);

  useEffect(() => {
    // Different language scripts for Language AI theme
    const scripts = [
      // Latin
      'A', 'B', 'C', 'D', 'E',
      // Devanagari
      'अ', 'आ', 'क', 'ख', 'ग',
      // Tamil
      'அ', 'ஆ', 'க', 'ங', 'ச',
      // Bengali
      'অ', 'আ', 'ক', 'খ', 'গ',
      // Arabic
      'ا', 'ب', 'ت', 'ث', 'ج',
      // Chinese
      '语', '言', '文', '字', '音',
    ];

    particles.current = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      char: scripts[Math.floor(Math.random() * scripts.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * 10,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none overflow-hidden z-0"
      style={{ mixBlendMode: 'overlay' }}
    >
      {particles.current.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-primary/10 font-heading select-none"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${12 + Math.random() * 8}px`,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.15, 0.25, 0.15, 0],
            y: [-20, -100],
            x: [0, (Math.random() - 0.5) * 40],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {particle.char}
        </motion.div>
      ))}
    </div>
  );
};

export default LanguageParticles;

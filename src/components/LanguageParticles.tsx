import { useEffect, useState, useMemo } from 'react';

interface Particle {
  id: number;
  char: string;
  x: number;
  y: number;
  duration: number;
  delay: number;
  fontSize: number;
}

const scripts = [
  'A', 'B', 'C', 'D', 'E',
  'अ', 'आ', 'क', 'ख', 'ग',
  'அ', 'ஆ', 'க', 'ங', 'ச',
  'অ', 'আ', 'ক', 'খ', 'গ',
  'ا', 'ب', 'ت', 'ث', 'ج',
  '语', '言', '文', '字', '音',
];

const LanguageParticles = () => {
  const [mounted, setMounted] = useState(false);

  // Defer mounting until after main content is interactive
  useEffect(() => {
    const id = requestIdleCallback
      ? requestIdleCallback(() => setMounted(true), { timeout: 3000 })
      : setTimeout(() => setMounted(true), 2000) as unknown as number;
    return () => {
      if (requestIdleCallback) cancelIdleCallback(id);
      else clearTimeout(id);
    };
  }, []);

  const particles = useMemo<Particle[]>(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      char: scripts[Math.floor(Math.random() * scripts.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 20 + Math.random() * 30,
      delay: Math.random() * 10,
      fontSize: 12 + Math.random() * 8,
    })), []);

  if (!mounted) return null;

  return (
    <>
      <style>{`
        @keyframes lp-float {
          0% { opacity: 0; transform: translateY(0) translateX(0); }
          15% { opacity: 0.15; }
          50% { opacity: 0.25; }
          85% { opacity: 0.15; }
          100% { opacity: 0; transform: translateY(-100px) translateX(var(--lp-dx)); }
        }
      `}</style>
      <div
        className="fixed inset-0 pointer-events-none overflow-hidden z-0"
        style={{ mixBlendMode: 'overlay' }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute text-primary/10 font-heading select-none"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              fontSize: `${p.fontSize}px`,
              '--lp-dx': `${(Math.random() - 0.5) * 40}px`,
              animation: `lp-float ${p.duration}s ${p.delay}s linear infinite`,
              willChange: 'transform, opacity',
            } as React.CSSProperties}
          >
            {p.char}
          </div>
        ))}
      </div>
    </>
  );
};

export default LanguageParticles;

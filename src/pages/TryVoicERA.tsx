import { useState, useEffect, useRef } from "react";
import { Phone, Loader2, CheckCircle, AlertTriangle, ArrowLeft } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

// Floating node component for subtle background animation
const FloatingNode = ({ delay, x, y, size }: { delay: number; x: number; y: number; size: number }) => (
  <motion.div
    className="absolute rounded-full bg-white/[0.04]"
    style={{ width: size, height: size, left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -12, 0, 8, 0],
      x: [0, 6, -4, 0],
      opacity: [0.03, 0.08, 0.03],
    }}
    transition={{ duration: 30, repeat: Infinity, delay, ease: "easeInOut" }}
  />
);

const TryVoicERA = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "rateLimit">("idle");
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const isValid = /^\d{10}$/.test(phoneNumber);

  // Draw subtle routing pattern + wave
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Layer 2: Abstract routing lines (white shining)
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i++) {
        ctx.beginPath();
        const startX = w * (0.1 + i * 0.12);
        const startY = h * 0.2;
        ctx.moveTo(startX, startY);
        ctx.bezierCurveTo(
          startX + 60, startY + h * 0.25,
          startX - 40, startY + h * 0.5,
          startX + 20, h * 0.85
        );
        ctx.stroke();
      }

      // Routing nodes (white glow)
      ctx.fillStyle = "rgba(255,255,255,0.08)";
      const nodes = [
        [w * 0.15, h * 0.3], [w * 0.35, h * 0.45], [w * 0.7, h * 0.25],
        [w * 0.85, h * 0.6], [w * 0.5, h * 0.7], [w * 0.2, h * 0.75],
      ];
      nodes.forEach(([nx, ny]) => {
        ctx.beginPath();
        ctx.arc(nx, ny, 4, 0, Math.PI * 2);
        ctx.fill();
      });

      // Layer 3: White shining audio wave
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const waveY = h * 0.55;
      for (let x = 0; x < w; x++) {
        const y = waveY + Math.sin(x * 0.015) * 20 + Math.sin(x * 0.008) * 12;
        const opacity = 1 - Math.abs(x - w / 2) / (w / 2);
        if (opacity < 0.05) continue;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Layer 4: Faint globe arcs (bottom-right, white)
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 0.8;
      const cx = w * 0.85, cy = h * 0.85;
      for (let r = 60; r < 200; r += 40) {
        ctx.beginPath();
        ctx.arc(cx, cy, r, -Math.PI * 0.6, -Math.PI * 0.1);
        ctx.stroke();
      }
      // latitude lines
      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        const ly = cy - 40 - i * 35;
        ctx.moveTo(cx - 120, ly);
        ctx.bezierCurveTo(cx - 60, ly - 10, cx + 60, ly + 10, cx + 120, ly);
        ctx.stroke();
      }
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const handlePlaceCall = async () => {
    if (!isValid) return;
    setStatus("loading");

    const callPromise = supabase.functions.invoke("initiate-call", {
      body: { phone: phoneNumber },
    });

    setTimeout(() => {
      setStatus("success");
    }, 600);

    try {
      const { data, error } = await callPromise;
      if (error || !data?.success) {
        console.error("Call initiation failed:", error || data?.error);
        setStatus("error");
      }
    } catch (err) {
      console.error("Network error:", err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-gradient-to-b from-[#0a1628] via-[#0d1f3c] to-[#0f2847]">
      {/* Background canvas for routing patterns, waves, globe arcs */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating nodes */}
      <FloatingNode delay={0} x={10} y={20} size={8} />
      <FloatingNode delay={5} x={80} y={15} size={6} />
      <FloatingNode delay={10} x={25} y={70} size={10} />
      <FloatingNode delay={15} x={70} y={60} size={7} />
      <FloatingNode delay={8} x={50} y={30} size={5} />
      <FloatingNode delay={20} x={90} y={80} size={9} />

      {/* Top bar */}
      <div className="relative z-20 px-6 py-5 flex items-center justify-between">
        <Link to="/" className="inline-flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center group-hover:bg-white/15 transition-colors">
            <Phone className="text-white/80" size={18} />
          </div>
          <span className="text-lg font-gonzaga font-bold text-white tracking-wide">VoicERA</span>
        </Link>
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={16} />
          Back
        </Link>
      </div>

      {/* Centered card */}
      <div className="flex-1 flex items-center justify-center px-4 -mt-16">
        <div className="relative z-10 w-full max-w-[560px]">
          {/* Mic icon with pulse glow */}
          <div className="flex justify-center mb-[-28px] z-20 relative">
            <motion.div
              className="w-14 h-14 rounded-2xl bg-[#0f2847] border border-white/15 flex items-center justify-center shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              animate={{ boxShadow: ["0 0 30px rgba(255,255,255,0.08)", "0 0 50px rgba(255,255,255,0.18)", "0 0 30px rgba(255,255,255,0.08)"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Phone className="text-white/80" size={24} />
            </motion.div>
          </div>

          {/* Main card */}
          <div className="rounded-2xl border border-white/10 bg-[#0a1628]/80 backdrop-blur-md shadow-2xl pt-10 pb-8 px-8">
            {status === "success" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="text-green-400" size={28} />
                </div>
                <p className="font-heading font-bold text-xl text-white mb-2">Call Initiated</p>
                <p className="text-sm text-white/50 mb-1">You will receive a call shortly from VoicERA.</p>
                <p className="text-xs text-white/40">Please answer your phone to experience the real-time voice interaction.</p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                  onClick={() => { setStatus("idle"); setPhoneNumber(""); }}
                >
                  Try again
                </Button>
              </div>
            ) : status === "error" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-red-400" size={28} />
                </div>
                <p className="font-heading font-bold text-lg text-white mb-2">Unable to initiate call.</p>
                <p className="text-sm text-white/50">Please try again in a few minutes.</p>
                <Button
                  variant="outline"
                  className="mt-6 bg-transparent border-white/20 text-white/70 hover:bg-white/10 hover:text-white"
                  onClick={() => setStatus("idle")}
                >
                  Retry
                </Button>
              </div>
            ) : status === "rateLimit" ? (
              <div className="text-center py-4">
                <div className="w-14 h-14 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="text-red-400" size={28} />
                </div>
                <p className="font-heading font-bold text-lg text-white mb-2">Maximum attempts reached.</p>
                <p className="text-sm text-white/50">Please try again later.</p>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3">
                    Lets talk to VoiceAI
                  </h1>
                  <p className="text-sm md:text-base text-white/45 leading-relaxed max-w-sm mx-auto">
                    It's quick, free, and a simple way to experience how a Voicebot listens, understands, and responds in real time using AI.
                  </p>
                </div>

                {/* Inline country + phone input */}
                <div className="flex gap-3 mb-4">
                  <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/5 text-sm text-white/70 font-medium shrink-0">
                    India (+91)
                  </div>
                  <input
                    type="tel"
                    placeholder="Enter 10 digit mobile number"
                    value={phoneNumber}
                    onChange={(e) => {
                      const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                      setPhoneNumber(val);
                    }}
                    maxLength={10}
                    disabled={status === "loading"}
                    className="flex-1 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-base text-white placeholder:text-white/30 focus:outline-none focus:ring-1 focus:ring-white/25 disabled:opacity-50 tracking-wide transition-all"
                  />
                </div>

                {phoneNumber.length > 0 && !isValid && (
                  <p className="text-xs text-red-400 mb-3 -mt-2 pl-1">Please enter a valid 10-digit mobile number.</p>
                )}

                {/* Place Call Button */}
                <Button
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/15 hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] transition-all duration-300 h-12 text-base font-medium"
                  disabled={!isValid || status === "loading"}
                  onClick={handlePlaceCall}
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={18} />
                      Placing Call…
                    </>
                  ) : (
                    <>
                      <Phone size={18} className="mr-2" />
                      Place Call
                    </>
                  )}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TryVoicERA;

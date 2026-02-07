import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import summitHeader from "@/assets/india-ai-summit-header.png";

const TARGET_DATE = new Date("2026-02-16T00:00:00+05:30").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const now = new Date().getTime();
  const difference = TARGET_DATE - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="relative">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 min-w-[50px] md:min-w-[60px] text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <span className="text-xl md:text-2xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </div>
    <span className="text-[10px] md:text-xs text-white/60 mt-1.5 uppercase tracking-wider font-medium">
      {label}
    </span>
  </div>
);

const EventPromoBanner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    // Preload the header image before showing the modal
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      setIsOpen(true);
    };
    img.src = summitHeader;
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl p-0 border-0 overflow-hidden bg-transparent shadow-2xl">
        <div className="relative w-full bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c] rounded-xl overflow-hidden">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 group z-20"
            aria-label="Close banner"
          >
            <X className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
          </button>

          {/* Content */}
          <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-5 md:gap-6">
            {/* Left Column - Logo & Image (dominant) */}
            <div className="flex flex-col items-center justify-between md:w-[60%] space-y-5">
              {/* Join Us At + Summit Header Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="w-full space-y-3"
              >
                <p className="text-xs md:text-sm font-semibold tracking-[0.2em] text-white/80 uppercase text-left -mt-1">
                  JOIN US AT
                </p>
                <img 
                  src={summitHeader} 
                  alt="India AI Impact Summit 2026" 
                  className="w-full h-auto rounded-lg shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                />
              </motion.div>

              {/* Countdown Timer */}
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 md:gap-3"
              >
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="text-xl md:text-2xl text-white/40 font-light mt-[-16px]">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="text-xl md:text-2xl text-white/40 font-light mt-[-16px]">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
              </motion.div>
            </div>

            {/* Right Column - Title and Text (compact) */}
            <div className="flex flex-col justify-center md:w-[40%] space-y-4">
              {/* Main Headline */}
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight"
              >
                AI4Inclusion at India AI Impact Summit 2026
              </motion.h2>

              {/* Supporting Text */}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-sm text-white/70 leading-relaxed"
              >
                Building inclusive, India-first Language AI infrastructure to power governance, public services, and citizen-scale adoption.
              </motion.p>

              {/* Location Info */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xs md:text-sm text-white/60 font-medium"
              >
                New Delhi · 16–20 February 2026 · Booth: TBA
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <Link to="/join-us" onClick={handleClose}>
                  <button 
                    className="bg-[#0f2847] text-sm text-white/70 font-normal px-5 py-2 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap"
                  >
                    Get in Touch
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventPromoBanner;

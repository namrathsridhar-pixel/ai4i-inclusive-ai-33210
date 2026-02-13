import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 md:px-5 md:py-3 min-w-[60px] md:min-w-[80px] text-center shadow-[0_0_20px_rgba(255,255,255,0.1)]">
        <span className="text-2xl md:text-4xl font-bold text-white tabular-nums">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
    </div>
    <span className="text-xs md:text-sm text-white/60 mt-2 uppercase tracking-wider font-medium">
      {label}
    </span>
  </div>
);

const Events = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1628] to-[#0f2847] pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase mb-4">
            Upcoming Events
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            AI4Inclusion Events
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            Join us at leading AI summits as we present India-first Language AI infrastructure built for governance, scale, and inclusion.
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="max-w-5xl mx-auto">
          {/* India AI Impact Summit Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-gradient-to-br from-[#0a1628] via-[#0f2847] to-[#1a3a5c]"
          >
            {/* Content */}
            <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row gap-8">
              {/* Left Column - Logo, Countdown */}
              <div className="flex flex-col items-center md:w-[45%] space-y-6 md:justify-between">
                {/* Join Us At + Summit Header Image */}
                <div className="w-full space-y-3">
                  <p className="text-lg md:text-xl lg:text-2xl font-bold text-white/80 uppercase tracking-[0.15em] text-left -mt-1">
                    JOIN US AT
                  </p>
                  <img 
                    src={summitHeader} 
                    alt="India AI Impact Summit 2026" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>

                {/* Countdown Timer - pushed down to align with CTA */}
                <div className="flex items-center justify-center gap-3 md:gap-4">
                  <CountdownUnit value={timeLeft.days} label="Days" />
                  <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                  <CountdownUnit value={timeLeft.hours} label="Hours" />
                  <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                  <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                </div>

            </div>

              {/* Right Column - Title and Text */}
              <div className="flex flex-col md:w-[55%] space-y-4 md:space-y-6 text-center md:justify-between">
                {/* Top content group */}
                <div className="flex flex-col items-center space-y-4 md:space-y-6">
                  {/* Main Headline */}
                  <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight">
                    AI4Inclusion at India AI Impact Summit 2026
                  </h2>

                  {/* Supporting Text */}
                  <p className="text-sm md:text-base text-white/70 leading-relaxed">
                    Building Inclusive, Policy-Governed Language AI as Digital Public Goods at Population Scale.
                  </p>

                  {/* Location Info - styled card */}
                  <div className="w-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-3 space-y-1.5">
                    <p className="text-sm md:text-base text-white/80 font-semibold tracking-wide">
                      📍 New Delhi · 16–20 February 2026
                    </p>
                    <p className="text-xs md:text-sm text-white/60 font-medium">
                      Pavilion: People+Possibilities Center 22, Hall 3, 1st Floor, Bharat Mandapam
                    </p>
                  </div>
                </div>

                {/* CTA Button - aligned with timer on left */}
                <div className="flex justify-center">
                  <Link to="/get-in-touch">
                    <button 
                      className="bg-[#0f2847] text-sm md:text-base text-white/70 font-normal px-5 py-2.5 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 whitespace-nowrap"
                    >
                      Get in Touch
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* More Events Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 text-center"
          >
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Events;

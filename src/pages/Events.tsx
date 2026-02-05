 import { motion } from "framer-motion";
 import { Calendar, MapPin, Clock } from "lucide-react";
 import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
 import bannerBg from "@/assets/india-ai-summit-bg.png";
 
// Cache-busting version - keep in sync with EventPromoBanner
const BANNER_VERSION = "v3";
const bannerBgUrl = `${bannerBg}?${BANNER_VERSION}`;

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
             Join us at major AI conferences and summits where we showcase India-first Language AI infrastructure.
           </p>
         </motion.div>
 
         {/* Events Grid */}
         <div className="max-w-5xl mx-auto">
           {/* India AI Impact Summit Card */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
           >
             {/* Background Image */}
             <div 
               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bannerBgUrl})`, backgroundPosition: 'calc(100% + 20px) center' }}
             />
             
             {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/50 to-transparent" />
             
             {/* Content */}
            <div className="relative z-10 p-6 md:p-10 min-h-[400px] md:min-h-[480px] flex">
              {/* Left Content Column */}
              <div className="flex flex-col justify-between flex-1 max-w-[50%]">
                {/* Top Content */}
                <div className="space-y-4 md:space-y-6">
                  <span className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                    Featured Event
                  </span>
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                    AI4Inclusion at India AI Impact Summit 2026
                  </h2>
                  <p className="text-xs md:text-sm lg:text-base text-white/70 leading-relaxed">
                    Building inclusive, India-first Language AI infrastructure to power governance, public services, and citizen-scale adoption.
                  </p>
                </div>
 
                {/* Bottom Section */}
                <div className="space-y-6 md:space-y-8">
                  {/* Countdown Timer */}
                  <div className="flex items-center gap-3 md:gap-4">
                    <CountdownUnit value={timeLeft.days} label="Days" />
                    <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                    <CountdownUnit value={timeLeft.hours} label="Hours" />
                    <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                    <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                  </div>
 
                  {/* Footer with Location */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <p className="text-xs md:text-sm text-white/70">
                      New Delhi · 16–20 February 2026 · Booth: TBA
                    </p>
                   </div>
                 </div>
               </div>
              
              {/* Right CTA Column - Center aligned with image */}
              <div className="flex-1 flex items-end justify-center pb-6 md:pb-10">
                <Link to="/join-us">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 rounded-lg shadow-lg hover:shadow-primary/25 transition-all text-base"
                  >
                    Get in Touch
                  </Button>
                </Link>
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
             <p className="text-white/50 text-sm">
               More events coming soon...
             </p>
           </motion.div>
         </div>
       </div>
     </div>
   );
 };
 
 export default Events;
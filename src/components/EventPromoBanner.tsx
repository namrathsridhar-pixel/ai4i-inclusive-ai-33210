 import { useState, useEffect } from "react";
 import { X } from "lucide-react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Dialog, DialogContent } from "@/components/ui/dialog";
 import { Button } from "@/components/ui/button";
 import bannerBg from "@/assets/india-ai-summit-bg.png";
import summitLogo from "@/assets/india-ai-summit-logo.png";
 
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
 
 const EventPromoBanner = () => {
  const [isOpen, setIsOpen] = useState(true);
   const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
 
   useEffect(() => {
     const timer = setInterval(() => {
       setTimeLeft(calculateTimeLeft());
     }, 60000); // Update every minute
 
     return () => clearInterval(timer);
   }, []);
 
   const handleClose = () => {
     setIsOpen(false);
   };
 
   return (
     <Dialog open={isOpen} onOpenChange={handleClose}>
       <DialogContent className="max-w-4xl p-0 border-0 overflow-hidden bg-transparent shadow-2xl">
         <div className="relative w-full">
           {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${bannerBg})` }}
            />
           
           {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/60 via-transparent to-transparent" />
           
           {/* Content */}
           <div className="relative z-10 p-6 md:p-10 min-h-[400px] md:min-h-[480px] flex flex-col justify-between">
             {/* Close Button */}
             <button
               onClick={handleClose}
               className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10 group"
               aria-label="Close banner"
             >
               <X className="h-5 w-5 text-white/70 group-hover:text-white transition-colors" />
             </button>
 
              {/* Summit Logo - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
               className="absolute top-1/2 right-8 md:right-16 lg:right-24 -translate-y-1/2"
              >
                <img 
                  src={summitLogo} 
                  alt="India AI Impact Summit 2026" 
                 className="h-24 md:h-32 lg:h-40 w-auto object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                />
              </motion.div>

             {/* Top Content */}
             <div className="space-y-4 md:space-y-6 max-w-xl">
               {/* Event Label */}
               <motion.span 
                 initial={{ opacity: 0, y: -10 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.2 }}
                 className="inline-block text-xs md:text-sm font-semibold tracking-[0.2em] text-primary uppercase"
               >
                 Event
               </motion.span>
 
               {/* Main Headline */}
               <motion.h2 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.3 }}
                 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
               >
                 AI4Inclusion at India AI Impact Summit 2026
               </motion.h2>
 
               {/* Supporting Text */}
               <motion.p 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.4 }}
                 className="text-sm md:text-base lg:text-lg text-white/70 leading-relaxed"
               >
                 Building inclusive, India-first Language AI infrastructure to power governance, public services, and citizen-scale adoption.
               </motion.p>
             </div>
 
             {/* Bottom Section */}
             <div className="space-y-6 md:space-y-8">
               {/* Countdown Timer */}
               <motion.div 
                 initial={{ opacity: 0, scale: 0.95 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ delay: 0.5 }}
                 className="flex items-center gap-3 md:gap-4"
               >
                 <CountdownUnit value={timeLeft.days} label="Days" />
                 <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                 <CountdownUnit value={timeLeft.hours} label="Hours" />
                 <span className="text-2xl md:text-3xl text-white/40 font-light mt-[-20px]">:</span>
                 <CountdownUnit value={timeLeft.minutes} label="Minutes" />
               </motion.div>
 
               {/* Footer with Location & CTAs */}
               <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: 0.6 }}
                 className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
               >
                 {/* Location Info */}
                 <p className="text-xs md:text-sm text-white/50">
                    New Delhi · 16–20 February 2026 · Booth: TBA
                 </p>
 
                 {/* CTAs */}
                 <div className="flex items-center gap-3">
                   <a 
                     href="/contact" 
                     className="text-sm text-white/60 hover:text-white transition-colors underline-offset-4 hover:underline"
                   >
                     Connect with AI4I
                   </a>
                   <Button 
                     className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all"
                     onClick={handleClose}
                   >
                     Visit the AI4I Booth
                   </Button>
                 </div>
               </motion.div>
             </div>
           </div>
         </div>
       </DialogContent>
     </Dialog>
   );
 };
 
 export default EventPromoBanner;
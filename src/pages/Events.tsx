 import { motion } from "framer-motion";
 import { Calendar, MapPin, Clock } from "lucide-react";
 import { useState, useEffect } from "react";
 import bannerBg from "@/assets/india-ai-summit-bg.png";
 
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
     <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2 min-w-[50px] text-center">
       <span className="text-xl md:text-2xl font-bold text-white tabular-nums">
         {value.toString().padStart(2, "0")}
       </span>
     </div>
     <span className="text-xs text-white/60 mt-1 uppercase tracking-wider font-medium">
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
               style={{ backgroundImage: `url(${bannerBg})` }}
             />
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/60 to-transparent" />
             
             {/* Content */}
             <div className="relative z-10 p-6 md:p-10 min-h-[350px] md:min-h-[400px] flex flex-col justify-between">
               {/* Top Content */}
               <div className="space-y-4 max-w-[60%]">
                 <span className="inline-block text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                   Featured Event
                 </span>
                 <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                   AI4Inclusion at India AI Impact Summit 2026
                 </h2>
                 <p className="text-sm md:text-base text-white/70 leading-relaxed">
                   Building inclusive, India-first Language AI infrastructure to power governance, public services, and citizen-scale adoption.
                 </p>
               </div>
 
               {/* Bottom Section */}
               <div className="space-y-6 max-w-[60%]">
                 {/* Countdown Timer */}
                 <div className="flex items-center gap-2 md:gap-3">
                   <CountdownUnit value={timeLeft.days} label="Days" />
                   <span className="text-xl text-white/40 font-light mt-[-20px]">:</span>
                   <CountdownUnit value={timeLeft.hours} label="Hours" />
                   <span className="text-xl text-white/40 font-light mt-[-20px]">:</span>
                   <CountdownUnit value={timeLeft.minutes} label="Minutes" />
                 </div>
 
                 {/* Event Details */}
                 <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-white/70">
                   <div className="flex items-center gap-2">
                     <MapPin size={16} className="text-primary" />
                     <span>New Delhi</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Calendar size={16} className="text-primary" />
                     <span>16–20 February 2026</span>
                   </div>
                   <div className="flex items-center gap-2">
                     <Clock size={16} className="text-primary" />
                     <span>Booth: TBA</span>
                   </div>
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
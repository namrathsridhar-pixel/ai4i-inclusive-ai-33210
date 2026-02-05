 import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
 import { X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const EVENT_DATE = new Date("2026-02-16T00:00:00+05:30"); // 16 Feb 2026, 00:00 IST
 const STORAGE_KEY = "ai4i-event-banner-dismissed";
 
 interface TimeRemaining {
   days: number;
   hours: number;
   minutes: number;
 }
 
 const calculateTimeRemaining = (): TimeRemaining => {
   const now = new Date();
   const difference = EVENT_DATE.getTime() - now.getTime();
 
   if (difference <= 0) {
     return { days: 0, hours: 0, minutes: 0 };
   }
 
   return {
     days: Math.floor(difference / (1000 * 60 * 60 * 24)),
     hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
     minutes: Math.floor((difference / (1000 * 60)) % 60),
   };
 };
 
 const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
   <div className="flex flex-col items-center">
     <div className="bg-foreground/10 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] border border-foreground/10">
       <span className="text-2xl md:text-3xl font-bold font-heading text-primary-foreground tabular-nums">
         {value.toString().padStart(2, "0")}
       </span>
     </div>
     <span className="text-xs text-primary-foreground/60 mt-1.5 uppercase tracking-wider font-medium">
       {label}
     </span>
   </div>
 );
 
 const EventBanner = () => {
   const [isDismissed, setIsDismissed] = useState(false);
   const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(calculateTimeRemaining);
   const [isVisible, setIsVisible] = useState(true);
 
   useEffect(() => {
     // Check if banner was previously dismissed
     const dismissed = localStorage.getItem(STORAGE_KEY);
     if (dismissed === "true") {
       setIsDismissed(true);
     }
   }, []);
 
   useEffect(() => {
     // Update countdown every minute
     const interval = setInterval(() => {
       setTimeRemaining(calculateTimeRemaining());
     }, 60000);
 
     return () => clearInterval(interval);
   }, []);
 
   const handleDismiss = () => {
     setIsVisible(false);
     setTimeout(() => {
       setIsDismissed(true);
       localStorage.setItem(STORAGE_KEY, "true");
     }, 300);
   };
 
   const scrollToSection = () => {
     const section = document.getElementById("building-blocks");
     if (section) {
       section.scrollIntoView({ behavior: "smooth" });
     }
   };
 
   if (isDismissed) return null;
 
   // Check if event has passed
   const eventPassed = timeRemaining.days === 0 && timeRemaining.hours === 0 && timeRemaining.minutes === 0;
   if (eventPassed) return null;
 
   return (
     <motion.div
       initial={{ opacity: 0, y: -20 }}
       animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
       transition={{ duration: 0.3 }}
       className="relative w-full bg-gradient-to-br from-[hsl(220,25%,12%)] via-[hsl(220,20%,16%)] to-[hsl(210,25%,18%)] overflow-hidden"
     >
       {/* Subtle grid pattern overlay */}
       <div 
         className="absolute inset-0 opacity-20"
         style={{
           backgroundImage: `
             linear-gradient(to right, hsl(210 50% 40% / 0.1) 1px, transparent 1px),
             linear-gradient(to bottom, hsl(210 50% 40% / 0.1) 1px, transparent 1px)
           `,
           backgroundSize: '40px 40px',
         }}
       />
       
       {/* Concentric circles decoration */}
       <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] opacity-30 pointer-events-none">
         {[...Array(8)].map((_, i) => (
           <div
             key={i}
             className="absolute inset-0 border border-primary/30 rounded-full"
             style={{
               transform: `scale(${0.2 + i * 0.12})`,
             }}
           />
         ))}
         {/* Center glow */}
         <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-24 h-24 bg-primary/20 rounded-full blur-xl" />
         </div>
       </div>
 
       {/* Dismiss button */}
       <button
         onClick={handleDismiss}
         className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-foreground/5 hover:bg-foreground/10 transition-colors group"
         aria-label="Dismiss banner"
       >
         <X className="w-4 h-4 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors" />
       </button>
 
       <div className="container mx-auto px-4 py-10 md:py-14 relative z-10">
         <div className="max-w-3xl">
           {/* Eyebrow */}
           <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-primary-foreground/60 mb-4">
             Event
           </span>
 
           {/* Primary Heading */}
           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-4 leading-tight">
             AI4Inclusion at India AI
             <br />
             Impact Summit 2026
           </h2>
 
           {/* Subheading */}
           <p className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-xl leading-relaxed">
             Building inclusive, India-first Language AI infrastructure to power governance, public services, and citizen-scale adoption.
           </p>
 
           {/* Countdown Timer */}
           <div className="flex items-center gap-3 md:gap-4 mb-8">
             <CountdownUnit value={timeRemaining.days} label="Days" />
             <span className="text-2xl text-primary-foreground/40 font-light mt-[-20px]">:</span>
             <CountdownUnit value={timeRemaining.hours} label="Hours" />
             <span className="text-2xl text-primary-foreground/40 font-light mt-[-20px]">:</span>
             <CountdownUnit value={timeRemaining.minutes} label="Minutes" />
           </div>
 
           {/* Footer row with metadata and CTA */}
           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
             {/* Metadata */}
             <p className="text-sm text-primary-foreground/50">
               New Delhi · 16–20 February 2026 · Booth: TBA
             </p>
 
             {/* CTA Button */}
             <Button 
               onClick={scrollToSection}
               className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border border-primary-foreground/20 hover:border-primary-foreground/30 backdrop-blur-sm w-fit"
             >
               Visit the AI4I Booth
             </Button>
           </div>
         </div>
       </div>
     </motion.div>
   );
 };
 
 export default EventBanner;
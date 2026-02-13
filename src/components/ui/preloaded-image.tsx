 import { useState, useEffect, useRef } from "react";
 import { cn } from "@/lib/utils";
 
 interface PreloadedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
   src: string;
   alt: string;
   containerClassName?: string;
   aspectRatio?: string;
 }
 
 const PreloadedImage = ({
   src,
   alt,
   className,
   containerClassName,
   aspectRatio = "16/9",
   ...props
 }: PreloadedImageProps) => {
   const [loaded, setLoaded] = useState(false);
   const [inView, setInView] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);
 
   // Use IntersectionObserver to only load when near viewport
   useEffect(() => {
     const el = containerRef.current;
     if (!el) return;
     const observer = new IntersectionObserver(
       ([entry]) => {
         if (entry.isIntersecting) {
           setInView(true);
           observer.disconnect();
         }
       },
       { rootMargin: "200px" } // Start loading 200px before visible
     );
     observer.observe(el);
     return () => observer.disconnect();
   }, []);

   // Preload image once in view
   useEffect(() => {
     if (!inView) return;
     const img = new Image();
     img.src = src;
     if (img.complete) {
       setLoaded(true);
     } else {
       img.onload = () => setLoaded(true);
     }
   }, [src, inView]);
 
   return (
     <div 
       ref={containerRef}
       className={cn(
         "relative overflow-hidden bg-muted/30",
         containerClassName
       )}
       style={{ aspectRatio }}
     >
       {/* Skeleton placeholder */}
       {!loaded && (
         <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-muted/50 via-muted/30 to-muted/50 bg-[length:200%_100%]" />
       )}
       
       {/* Actual image */}
       {inView && (
         <img
           src={src}
           alt={alt}
           className={cn(
             "w-full h-full object-contain transition-opacity duration-300",
             loaded ? "opacity-100" : "opacity-0",
             className
           )}
           loading="lazy"
           decoding="async"
           onLoad={() => setLoaded(true)}
           {...props}
         />
       )}
     </div>
   );
 };
 
 export { PreloadedImage };

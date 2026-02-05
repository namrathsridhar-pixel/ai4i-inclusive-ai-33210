 import { useState, useEffect } from "react";
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
   const [imageSrc, setImageSrc] = useState<string | null>(null);
 
   useEffect(() => {
     // Create an Image object to preload
     const img = new Image();
     img.src = src;
     
     // If already cached, show immediately
     if (img.complete) {
       setImageSrc(src);
       setLoaded(true);
     } else {
       img.onload = () => {
         setImageSrc(src);
         setLoaded(true);
       };
     }
   }, [src]);
 
   return (
     <div 
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
       {imageSrc && (
         <img
           src={imageSrc}
           alt={alt}
           className={cn(
             "w-full h-full object-contain transition-opacity duration-300",
             loaded ? "opacity-100" : "opacity-0",
             className
           )}
           loading="eager"
           decoding="async"
           {...props}
         />
       )}
     </div>
   );
 };
 
 export { PreloadedImage };
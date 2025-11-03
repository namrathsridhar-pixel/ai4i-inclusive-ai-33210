import { Link2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id: string;
  level?: 1 | 2 | 3;
  children: React.ReactNode;
  className?: string;
}

export const SectionHeading = ({ id, level = 2, children, className }: SectionHeadingProps) => {
  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const sizeClasses = {
    1: "text-4xl md:text-5xl font-bold mb-6",
    2: "text-3xl md:text-4xl font-bold mb-8 mt-16 first:mt-0",
    3: "text-2xl md:text-3xl font-semibold mb-6 mt-12",
  };

  const handleCopyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  };

  return (
    <HeadingTag
      id={id}
      className={cn(
        "font-heading scroll-mt-24 group flex items-center gap-3",
        sizeClasses[level],
        className
      )}
    >
      {children}
      <button
        onClick={handleCopyLink}
        className="opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-accent rounded-lg"
        aria-label={`Copy link to ${children}`}
      >
        <Link2 size={level === 1 ? 24 : level === 2 ? 20 : 16} className="text-muted-foreground" />
      </button>
    </HeadingTag>
  );
};

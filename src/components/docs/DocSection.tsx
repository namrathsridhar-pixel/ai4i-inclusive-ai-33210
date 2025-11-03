import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface DocSectionProps {
  children: ReactNode;
  className?: string;
}

export const DocSection = ({ children, className }: DocSectionProps) => {
  return (
    <section className={cn("mb-16 last:mb-0", className)}>
      {children}
    </section>
  );
};

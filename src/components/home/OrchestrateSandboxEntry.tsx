import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import orchestrateSandboxPreview from "@/assets/orchestrate-sandbox-preview.png";

const OrchestrateSandboxEntry = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mt-16 bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl border border-border/60 p-8 md:p-10"
    >
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <h4 className="font-heading font-bold text-xl md:text-2xl mb-4 text-foreground">
            Experience AI4I-Orchestrate in Action
          </h4>

          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
            Experience live language AI inferences with real-time visibility into performance, quality, and usage.
          </p>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="lg" className="font-semibold group cursor-default">
                Try the Orchestrate Sandbox
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </TooltipTrigger>
            <TooltipContent className="bg-[#0a1628] text-white border-white/20">
              <p>Coming soon...</p>
            </TooltipContent>
          </Tooltip>

          <p className="text-xs text-muted-foreground mt-3">
            Coming soon · Sample requests included
          </p>
        </div>

        {/* Visual Card Side */}
        <div className="w-full lg:w-1/2">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-border/80 shadow-2xl overflow-hidden">
            {/* Header Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2 font-mono">Orchestrate-Sandbox</span>
            </div>

            {/* Image Content */}
            <img
              src={orchestrateSandboxPreview}
              alt="AI4I Orchestrate Sandbox - AI Accessibility Studio interface"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OrchestrateSandboxEntry;
import { motion } from "framer-motion";
import { ArrowRight, Zap, Shield, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
const OrchestrateSandboxEntry = () => {
  return <motion.div initial={{
    opacity: 0,
    y: 30
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true,
    margin: "-50px"
  }} transition={{
    duration: 0.5
  }} className="mt-16 bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl border border-border/60 p-8 md:p-10">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* Content Side */}
        <div className="w-full lg:w-1/2">
          <h4 className="font-heading font-bold text-xl md:text-2xl mb-4 text-foreground">
            Experience AI4I-Orchestrate in Action
          </h4>
          
          <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">Experience live language AI inferences with real-time visibility into performance, quality, and usage.</p>

          <a href="https://orchestrate-sandbox.ai4i.dev" target="_blank" rel="noopener noreferrer" className="inline-block">
            <Button size="lg" className="font-semibold group">
              Try the Orchestrate Sandbox
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          
          <p className="text-xs text-muted-foreground mt-3">
            No signup required · Sample requests included
          </p>
        </div>

        {/* Visual Card Side */}
        <div className="w-full lg:w-1/2">
          <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-border/80 shadow-lg overflow-hidden">
            {/* Header Bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-muted/30">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-destructive/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <div className="w-3 h-3 rounded-full bg-green-500/60" />
              </div>
              <span className="text-xs text-muted-foreground ml-2 font-mono">orchestrate.ai4i.dev</span>
            </div>

            {/* Request Section */}
            <div className="p-4 border-b border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-foreground">Request</span>
              </div>
              <div className="bg-muted/50 rounded-lg p-3 font-mono text-xs text-muted-foreground">
                <span className="text-primary">POST</span> /v1/translate
                <div className="mt-1 text-foreground/70">
                  "Translate this to Hindi"
                </div>
              </div>
            </div>

            {/* Routing Decision */}
            <div className="p-4 border-b border-border/30">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-medium text-foreground">Routing Decision</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md font-medium">
                  IndicTrans2
                </span>
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                  Policy: Low-cost
                </span>
                <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                  Region: IN
                </span>
              </div>
            </div>

            {/* Response Metrics */}
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Activity className="w-3.5 h-3.5 text-green-500" />
                <span className="text-xs font-medium text-foreground">Response</span>
                <span className="ml-auto text-xs text-green-500 font-medium">200 OK</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-center p-2 bg-muted/30 rounded-lg">
                  <div className="text-sm font-semibold text-foreground">124ms</div>
                  <div className="text-xs text-muted-foreground">Latency</div>
                </div>
                <div className="text-center p-2 bg-muted/30 rounded-lg">
                  <div className="text-sm font-semibold text-foreground">$0.0002</div>
                  <div className="text-xs text-muted-foreground">Cost</div>
                </div>
                <div className="text-center p-2 bg-muted/30 rounded-lg">
                  <div className="text-sm font-semibold text-foreground">0.94</div>
                  <div className="text-xs text-muted-foreground">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>;
};
export default OrchestrateSandboxEntry;
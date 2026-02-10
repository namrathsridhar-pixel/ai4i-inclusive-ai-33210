import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

interface VoiceraInterestFormProps {
  /** Whether to show a compact version (for homepage) */
  compact?: boolean;
}

const VoiceraInterestForm = ({ compact = false }: VoiceraInterestFormProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [useCase, setUseCase] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast({ title: "Email is required", variant: "destructive" });
      return;
    }
    if (!isValidEmail(email.trim())) {
      toast({ title: "Please enter a valid email address", variant: "destructive" });
      return;
    }
    if (!consentChecked) {
      toast({ title: "Please accept the data consent to proceed", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/voicera-interest`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY,
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            full_name: fullName.trim() || null,
            email: email.trim(),
            organization_name: organizationName.trim() || null,
            use_case: useCase.trim() || null,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      setIsSuccess(true);
      setFullName("");
      setEmail("");
      setOrganizationName("");
      setUseCase("");
      setConsentChecked(false);
    } catch (error: any) {
      toast({
        title: "Submission failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/10">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-heading font-semibold mb-2">Thank you for your interest in VoicERA</h3>
            <p className="text-muted-foreground">We'll reach out to you soon.</p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setIsSuccess(false)}
            >
              Submit another response
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="border-border/50 bg-gradient-to-br from-card to-accent/5">
        <CardContent className={compact ? "pt-6 pb-6" : "pt-8 pb-8"}>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Phone className="text-primary" size={20} />
            </div>
            <h3 className={`font-heading font-bold ${compact ? "text-lg" : "text-xl md:text-2xl"}`}>
              Show Interest in VoicERA
            </h3>
          </div>
          {!compact && (
            <p className="text-muted-foreground mb-6 text-sm">
              Register your interest in India's Sovereign Voice Operating System. We'll connect with you to explore how VoicERA can support your voice AI use case.
            </p>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className={compact ? "space-y-3" : "grid sm:grid-cols-2 gap-4"}>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Full Name <span className="text-muted-foreground text-xs">(optional)</span></label>
                <Input
                  placeholder="Your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  maxLength={100}
                  disabled={isSubmitting}
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Email Address <span className="text-destructive">*</span></label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  maxLength={255}
                  disabled={isSubmitting}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-foreground">Organization / Institution Name <span className="text-muted-foreground text-xs">(optional)</span></label>
              <Input
                placeholder="Your organization"
                value={organizationName}
                onChange={(e) => setOrganizationName(e.target.value)}
                maxLength={200}
                disabled={isSubmitting}
              />
            </div>

            {!compact && (
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-foreground">Use Case / How do you plan to use Voice AI? <span className="text-muted-foreground text-xs">(optional)</span></label>
                <Textarea
                  placeholder="Describe your voice AI use case or interest area..."
                  value={useCase}
                  onChange={(e) => setUseCase(e.target.value)}
                  maxLength={2000}
                  rows={3}
                  disabled={isSubmitting}
                />
              </div>
            )}

            <div className="flex items-start gap-2 pt-1">
              <Checkbox
                id="voicera-consent"
                checked={consentChecked}
                onCheckedChange={(checked) => setConsentChecked(checked === true)}
                disabled={isSubmitting}
              />
              <label htmlFor="voicera-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                The personally identifiable information (PII) provided in this form will be used solely for collaborative purposes. This information will remain confidential and will not be shared with any third party without prior consent. For data deletion requests, contact{" "}
                <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">info@ai4inclusion.org</a>.
              </label>
            </div>

            <Button
              type="submit"
              size={compact ? "default" : "lg"}
              className="w-full"
              disabled={isSubmitting || !consentChecked || !email.trim()}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={16} />
                  Submitting...
                </>
              ) : (
                "Register Interest"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default VoiceraInterestForm;

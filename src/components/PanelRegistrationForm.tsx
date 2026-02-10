import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";


const registrationSchema = z.object({
  full_name: z.string().trim().max(100, "Name must be under 100 characters").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().max(200, "Organization must be under 200 characters").optional().or(z.literal("")),
  
  question: z.string().trim().max(1000, "Question must be under 1000 characters").optional().or(z.literal("")),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;


const PanelRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
  });

  const onSubmit = async (data: RegistrationFormData) => {
    setIsSubmitting(true);
    try {
      const { data: result, error } = await supabase.functions.invoke("register-panel", {
        body: data,
      });

      if (error) throw error;
      if (result?.error) throw new Error(result.error);

      setIsSuccess(true);
    } catch (err: any) {
      toast({
        title: "Registration failed",
        description: err?.message || "Something went wrong. Please try again.",
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
        className="text-center py-12 px-6"
      >
        <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">
          Thank you for registering.
        </h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          A confirmation email has been sent to your email address with event details.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="full_name" className="text-foreground/80 text-sm font-medium">Full Name</Label>
        <Input
          id="full_name"
          {...register("full_name")}
          placeholder="Enter your full name"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.full_name && <p className="text-destructive text-xs">{errors.full_name.message}</p>}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-foreground/80 text-sm font-medium">Email Address <span className="text-destructive">*</span></Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.email && <p className="text-destructive text-xs">{errors.email.message}</p>}
      </div>

      {/* Organization */}
      <div className="space-y-1.5">
        <Label htmlFor="organization" className="text-foreground/80 text-sm font-medium">Organization / Institution</Label>
        <Input
          id="organization"
          {...register("organization")}
          placeholder="Your organization name"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.organization && <p className="text-destructive text-xs">{errors.organization.message}</p>}
      </div>

      {/* Question for Panel */}
      <div className="space-y-1.5">
        <Label htmlFor="question" className="text-foreground/80 text-sm font-medium">
          Do you have a question or topic you would like the panel to address? <span className="text-muted-foreground">(Optional)</span>
        </Label>
        <Textarea
          id="question"
          {...register("question")}
          placeholder="e.g., Challenges in scaling language AI, voice AI for public services, or inclusion of low-resource languages"
          className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary/50 focus:ring-primary/20 min-h-[80px] resize-none"
        />
        {errors.question && <p className="text-destructive text-xs">{errors.question.message}</p>}
      </div>

      {/* PII Consent Checkbox */}
      <div className="flex items-start gap-3 mt-2">
        <input
          type="checkbox"
          id="pii-consent"
          checked={consentChecked}
          onChange={(e) => setConsentChecked(e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-border accent-primary cursor-pointer"
        />
        <label htmlFor="pii-consent" className="text-[12px] leading-relaxed text-foreground/60 cursor-pointer select-none">
          The personally identifiable information (PII) provided in this form will be used solely for collaborative purposes. This information will remain confidential and will not be shared with any third party without prior consent.
        </label>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting || !consentChecked}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 mt-2"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Registering...</span>
        ) : (
          "Register"
        )}
      </Button>
    </form>
  );
};

export default PanelRegistrationForm;

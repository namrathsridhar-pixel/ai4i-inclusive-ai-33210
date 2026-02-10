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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const registrationSchema = z.object({
  full_name: z.string().trim().max(100, "Name must be under 100 characters").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().max(200, "Organization must be under 200 characters").optional().or(z.literal("")),
  interest_area: z.string().optional().or(z.literal("")),
  question: z.string().trim().max(1000, "Question must be under 1000 characters").optional().or(z.literal("")),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const interestAreas = [
  "Language AI & Multilingual Systems",
  "Voice AI & Speech Technologies",
  "AI for Public Services & Governance",
  "Open AI Infrastructure",
  "Research & Academia",
  "Industry / Startups",
  "Policy & Regulation",
];

const PanelRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
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
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">
          Thank you for registering.
        </h3>
        <p className="text-white/60 max-w-md mx-auto">
          A confirmation email has been sent to your email address with event details.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name */}
      <div className="space-y-1.5">
        <Label htmlFor="full_name" className="text-white/80 text-sm font-medium">Full Name</Label>
        <Input
          id="full_name"
          {...register("full_name")}
          placeholder="Enter your full name"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.full_name && <p className="text-red-400 text-xs">{errors.full_name.message}</p>}
      </div>

      {/* Email */}
      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-white/80 text-sm font-medium">Email Address <span className="text-red-400">*</span></Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}
      </div>

      {/* Organization */}
      <div className="space-y-1.5">
        <Label htmlFor="organization" className="text-white/80 text-sm font-medium">Organization / Institution</Label>
        <Input
          id="organization"
          {...register("organization")}
          placeholder="Your organization name"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.organization && <p className="text-red-400 text-xs">{errors.organization.message}</p>}
      </div>

      {/* Interest Area */}
      <div className="space-y-1.5">
        <Label className="text-white/80 text-sm font-medium">Primary Interest Area</Label>
        <Select onValueChange={(val) => setValue("interest_area", val)}>
          <SelectTrigger className="bg-white/5 border-white/15 text-white focus:ring-primary/20 [&>span]:text-white/60">
            <SelectValue placeholder="Select your area of interest" />
          </SelectTrigger>
          <SelectContent className="bg-[#0f2440] border-white/15">
            {interestAreas.map((area) => (
              <SelectItem key={area} value={area} className="text-white/80 focus:bg-white/10 focus:text-white">
                {area}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Question for Panel */}
      <div className="space-y-1.5">
        <Label htmlFor="question" className="text-white/80 text-sm font-medium">
          Do you have a question or topic you would like the panel to address? <span className="text-white/40">(Optional)</span>
        </Label>
        <Textarea
          id="question"
          {...register("question")}
          placeholder="e.g., Challenges in scaling language AI, voice AI for public services, or inclusion of low-resource languages"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20 min-h-[80px] resize-none"
        />
        {errors.question && <p className="text-red-400 text-xs">{errors.question.message}</p>}
      </div>

      {/* Submit */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-2.5 mt-2"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> Registering...</span>
        ) : (
          "Register"
        )}
      </Button>

      {/* Data Collection Disclaimer */}
      <div className="mt-4 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]">
        <p className="text-[11px] leading-relaxed text-white/40">
          <span className="font-medium text-white/50">Why we collect this data:</span>{" "}
          The information you provide is used solely to process your registration, send event-related communications, and improve the quality of our sessions. We do <span className="font-medium text-white/50">not</span> sell, rent, or share your personal data with third parties for marketing purposes. Your data is stored securely and handled in accordance with applicable data protection regulations. You may request deletion of your data at any time by contacting us at{" "}
          <a href="mailto:info@ai4inclusion.org" className="text-primary/70 hover:text-primary underline transition-colors">info@ai4inclusion.org</a>.
        </p>
      </div>
    </form>
  );
};

export default PanelRegistrationForm;

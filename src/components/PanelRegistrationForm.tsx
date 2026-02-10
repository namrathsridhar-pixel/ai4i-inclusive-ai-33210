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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

const registrationSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  organization: z.string().trim().min(1, "Organization is required").max(200, "Organization must be under 200 characters"),
  role: z.string().trim().min(1, "Role / Designation is required").max(100),
  interest_area: z.string().min(1, "Please select your primary interest area"),
  opt_in_updates: z.boolean().default(false),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

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
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: { opt_in_updates: false },
  });

  const onSubmit = async (data: RegistrationForm) => {
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
        <Label htmlFor="full_name" className="text-white/80 text-sm font-medium">Full Name <span className="text-red-400">*</span></Label>
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
        <Label htmlFor="organization" className="text-white/80 text-sm font-medium">Organization / Institution <span className="text-red-400">*</span></Label>
        <Input
          id="organization"
          {...register("organization")}
          placeholder="Your organization name"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.organization && <p className="text-red-400 text-xs">{errors.organization.message}</p>}
      </div>

      {/* Role */}
      <div className="space-y-1.5">
        <Label htmlFor="role" className="text-white/80 text-sm font-medium">Role / Designation <span className="text-red-400">*</span></Label>
        <Input
          id="role"
          {...register("role")}
          placeholder="e.g. Director, Researcher, Engineer"
          className="bg-white/5 border-white/15 text-white placeholder:text-white/30 focus:border-primary/50 focus:ring-primary/20"
        />
        {errors.role && <p className="text-red-400 text-xs">{errors.role.message}</p>}
      </div>

      {/* Interest Area */}
      <div className="space-y-1.5">
        <Label className="text-white/80 text-sm font-medium">Primary Interest Area <span className="text-red-400">*</span></Label>
        <Select onValueChange={(val) => setValue("interest_area", val, { shouldValidate: true })}>
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
        {errors.interest_area && <p className="text-red-400 text-xs">{errors.interest_area.message}</p>}
      </div>

      {/* Opt-in */}
      <div className="flex items-start space-x-3 pt-1">
        <Checkbox
          id="opt_in_updates"
          checked={watch("opt_in_updates")}
          onCheckedChange={(checked) => setValue("opt_in_updates", !!checked)}
          className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary mt-0.5"
        />
        <Label htmlFor="opt_in_updates" className="text-white/60 text-sm leading-relaxed cursor-pointer">
          Receive updates from AI4Inclusion about events and initiatives
        </Label>
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
    </form>
  );
};

export default PanelRegistrationForm;

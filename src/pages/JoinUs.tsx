import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import joinUsHeroImage from "@/assets/join-us-hero.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().trim().max(100, "Name must be less than 100 characters").optional().or(z.literal("")),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(200, "Organization / Institution Name must be less than 200 characters").optional().or(z.literal("")),
  specific_question: z.string().trim().max(2000, "Message must be less than 2000 characters").optional().or(z.literal("")),
});

type FormValues = z.infer<typeof formSchema>;

const JoinUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      organization: "",
      specific_question: "",
    },
  });

    const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('submit-form', {
        body: values,
      });

      if (error) {
        throw new Error(error.message || "Failed to submit form");
      }

      if (data && !data.success) {
        throw new Error(data.error || "Failed to submit form");
      }

      setIsSubmitted(true);
      
      const successMessage = data?.email_sent
        ? "Thank you for getting in touch. We've sent a confirmation email to your email address."
        : "Your submission has been received. Our team will get back to you soon.";

      toast({
        title: "Form submitted successfully!",
        description: successMessage,
      });
    } catch (error: any) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-4 bg-gradient-to-b from-[#0a1628] to-background">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 bg-gradient-to-r from-[#c0c0c0] via-[#e8e8e8] to-[#a8b4c4] bg-clip-text text-transparent">
              Connect with AI4Inclusion Team
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Let's collaborate and co-create the future of inclusive Language AI. Explore, connect, and grow with us. 
              Become a member today and join our exciting community working towards digital inclusion for all languages.
            </p>
          </motion.div>

          {/* Hero Image with Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full rounded-xl overflow-hidden border border-border/30 bg-card/50"
          >
            {/* Hero Image */}
            <div className="px-2 md:px-3 pt-4">
              <img 
                src={joinUsHeroImage}
                alt="AI4Inclusion Community - Multilingual Language Technology"
                className="w-full h-auto object-cover rounded-lg max-h-[300px] md:max-h-[400px]"
                loading="eager"
                decoding="async"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            
            {/* Form Container */}
            <div className="px-4 md:px-8 lg:px-16 py-8 bg-background/80 backdrop-blur-sm">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h2 className="text-2xl font-heading font-bold mb-3 text-foreground">
                    Thank You!
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                    Your message has been submitted successfully. Our team will get back to you soon.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setIsSubmitted(false);
                      form.reset();
                    }}
                  >
                    Submit Another Response
                  </Button>
                </motion.div>
              ) : (
              <>
                <div className="max-w-2xl mx-auto mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-3 underline">
                    Thank you for your interest in AI4Inclusion — a Digital Public Good advancing inclusive language AI for the world.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base mb-3">
                    We empower nations, organizations, and communities to build and adopt AI software as a digital public good. Together, we can foster equitable, transparent, and citizen-driven AI language ecosystems that bridge linguistic divides.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base underline">
                    We're eager to connect with you if you're looking for partnerships, adoption, contributions, or volunteering opportunities.
                  </p>
                </div>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-2xl mx-auto">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your full name"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Email <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="organization"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Organization / Institution Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your organization / institution name"
                              className="bg-background border-border"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="specific_question"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-medium">
                            Is there anything specific you'd like to know or discuss about AI4Inclusion?
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us how you'd like to collaborate or ask any questions about AI4Inclusion..."
                              className="bg-background border-border min-h-[120px] resize-y"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* PII Consent Checkbox */}
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="pii-consent-joinus"
                        checked={consentChecked}
                        onChange={(e) => setConsentChecked(e.target.checked)}
                        className="mt-0.5 h-4 w-4 rounded border-border accent-primary cursor-pointer"
                      />
                      <label htmlFor="pii-consent-joinus" className="text-[12px] leading-relaxed text-muted-foreground/70 cursor-pointer select-none">
                        The personally identifiable information (PII) provided in this form will be used solely for collaborative purposes. This information will remain confidential and will not be shared with any third party without prior consent. For data deletion requests, contact{" "}
                        <a href="mailto:info@ai4inclusion.org" className="text-primary hover:underline">info@ai4inclusion.org</a>.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      className="w-full button-glow"
                      size="lg"
                      disabled={isSubmitting || !consentChecked}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Submit
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;

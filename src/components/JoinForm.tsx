import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const JoinForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    organisation: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.organisation.trim()) {
      newErrors.organisation = "Organisation is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]+$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      toast({
        title: "Success!",
        description: "Thank you for joining the AI4Inclusion movement!",
      });
      setFormData({ name: "", organisation: "", email: "", phone: "" });
      setErrors({});
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Input
          placeholder="Name"
          value={formData.name}
          onChange={(e) => handleChange("name", e.target.value)}
          className={`bg-muted border-border ${errors.name ? "border-destructive" : ""}`}
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Input
          placeholder="Organisation"
          value={formData.organisation}
          onChange={(e) => handleChange("organisation", e.target.value)}
          className={`bg-muted border-border ${errors.organisation ? "border-destructive" : ""}`}
        />
        {errors.organisation && <p className="text-sm text-destructive mt-1">{errors.organisation}</p>}
      </div>

      <div>
        <Input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          className={`bg-muted border-border ${errors.email ? "border-destructive" : ""}`}
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Input
          placeholder="Contact"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          className={`bg-muted border-border ${errors.phone ? "border-destructive" : ""}`}
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>

      <Button type="submit" className="w-full bg-foreground text-background hover:bg-foreground/90">
        Submit
      </Button>
    </form>
  );
};

export default JoinForm;

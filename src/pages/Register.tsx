import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { z } from "zod";

const registrationSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens and apostrophes"),
  class_set: z
    .string()
    .trim()
    .min(4, "Class set must be at least 4 characters (e.g., 1995)")
    .max(50, "Class set must be less than 50 characters"),
  branch: z
    .string()
    .trim()
    .min(3, "Branch must be at least 3 characters")
    .max(100, "Branch must be less than 100 characters"),
  phone: z
    .string()
    .trim()
    .regex(/^\+?[0-9\s\-\(\)]{10,20}$/, "Please enter a valid phone number (10-20 digits)"),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .toLowerCase(),
  attendance_type: z
    .enum(["Voting Delegate", "Observer"], {
      errorMap: () => ({ message: "Please select an attendance type" }),
    }),
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

export default function Register() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: "",
    class_set: "",
    branch: "",
    phone: "",
    email: "",
    attendance_type: "Voting Delegate",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setValidationErrors({});

    try {
      // Client-side validation
      const validatedData = registrationSchema.parse(formData);

      // Check for rate limiting (simple client-side check)
      const lastSubmission = localStorage.getItem("lastRegistrationTime");
      if (lastSubmission) {
        const timeSinceLastSubmission = Date.now() - parseInt(lastSubmission);
        const cooldownPeriod = 60000; // 1 minute
        if (timeSinceLastSubmission < cooldownPeriod) {
          const remainingSeconds = Math.ceil((cooldownPeriod - timeSinceLastSubmission) / 1000);
          toast.error(`Please wait ${remainingSeconds} seconds before submitting again.`);
          setIsSubmitting(false);
          return;
        }
      }

      // Submit to Supabase
      const { error } = await supabase
        .from('attendees')
        .insert([{
          name: validatedData.name,
          class_set: validatedData.class_set,
          branch: validatedData.branch,
          phone: validatedData.phone,
          email: validatedData.email,
          attendance_type: validatedData.attendance_type,
        }]);

      if (error) {
        // Handle specific database errors
        if (error.code === '23505') { // Unique constraint violation
          toast.error("This email is already registered. Please use a different email.");
        } else if (error.message.includes('attendees_email_format')) {
          toast.error("Invalid email format. Please check and try again.");
        } else if (error.message.includes('attendees_phone_format')) {
          toast.error("Invalid phone number format. Please use digits, spaces, or dashes.");
        } else {
          toast.error("Registration failed. Please check your information and try again.");
        }
        console.error("Registration error:", error);
      } else {
        toast.success("Registration successful! See you at the convention.");
        
        // Store timestamp for rate limiting
        localStorage.setItem("lastRegistrationTime", Date.now().toString());
        
        // Reset form
        setFormData({
          name: "",
          class_set: "",
          branch: "",
          phone: "",
          email: "",
          attendance_type: "Voting Delegate",
        });
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Handle validation errors
        const errors: Record<string, string> = {};
        error.errors.forEach((err) => {
          const path = err.path[0] as string;
          errors[path] = err.message;
        });
        setValidationErrors(errors);
        toast.error("Please correct the errors in the form.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
        console.error("Unexpected error:", error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: keyof RegistrationFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear validation error for this field
    if (validationErrors[field]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-primary mb-4">
            Register Your Attendance
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Confirm your participation in ECOBA 2025 AGM & National Convention
          </p>

          <form onSubmit={handleSubmit} className="bg-card border-2 border-border rounded-lg p-8 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                required
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Enter your full name"
                className={validationErrors.name ? "border-red-500" : ""}
              />
              {validationErrors.name && (
                <p className="text-sm text-red-500">{validationErrors.name}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="class_set">Class Set *</Label>
              <Input
                id="class_set"
                required
                value={formData.class_set}
                onChange={(e) => handleChange("class_set", e.target.value)}
                placeholder="e.g., 1995 Set"
                className={validationErrors.class_set ? "border-red-500" : ""}
              />
              {validationErrors.class_set && (
                <p className="text-sm text-red-500">{validationErrors.class_set}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch">Branch *</Label>
              <Input
                id="branch"
                required
                value={formData.branch}
                onChange={(e) => handleChange("branch", e.target.value)}
                placeholder="e.g., Lagos Branch"
                className={validationErrors.branch ? "border-red-500" : ""}
              />
              {validationErrors.branch && (
                <p className="text-sm text-red-500">{validationErrors.branch}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                placeholder="+234 XXX XXX XXXX"
                className={validationErrors.phone ? "border-red-500" : ""}
              />
              {validationErrors.phone && (
                <p className="text-sm text-red-500">{validationErrors.phone}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="your.email@example.com"
                className={validationErrors.email ? "border-red-500" : ""}
              />
              {validationErrors.email && (
                <p className="text-sm text-red-500">{validationErrors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="attendance_type">Attendance Type *</Label>
              <Select
                value={formData.attendance_type}
                onValueChange={(value) => handleChange("attendance_type", value as "Voting Delegate" | "Observer")}
                required
              >
                <SelectTrigger className={validationErrors.attendance_type ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select attendance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Voting Delegate">Voting Delegate</SelectItem>
                  <SelectItem value="Observer">Observer</SelectItem>
                </SelectContent>
              </Select>
              {validationErrors.attendance_type && (
                <p className="text-sm text-red-500">{validationErrors.attendance_type}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Complete Registration"}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              By registering, you confirm that the information provided is accurate. 
              You can only register once per email address.
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}

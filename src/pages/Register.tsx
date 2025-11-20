import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    class_set: "",
    branch: "",
    phone: "",
    email: "",
    attendance_type: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { error } = await supabase
      .from('attendees')
      .insert([formData]);

    if (error) {
      toast.error("Registration failed. Please try again.");
      console.error(error);
    } else {
      toast.success("Registration successful! See you at the convention.");
      setFormData({
        name: "",
        class_set: "",
        branch: "",
        phone: "",
        email: "",
        attendance_type: "",
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="class_set">Class Set *</Label>
              <Input
                id="class_set"
                required
                value={formData.class_set}
                onChange={(e) => handleChange("class_set", e.target.value)}
                placeholder="e.g., 1995 Set"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="branch">Branch *</Label>
              <Input
                id="branch"
                required
                value={formData.branch}
                onChange={(e) => handleChange("branch", e.target.value)}
                placeholder="e.g., Lagos Branch"
              />
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
              />
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
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="attendance_type">Attendance Type *</Label>
              <Select
                value={formData.attendance_type}
                onValueChange={(value) => handleChange("attendance_type", value)}
                required
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select attendance type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Voting Delegate">Voting Delegate</SelectItem>
                  <SelectItem value="Observer">Observer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Complete Registration"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
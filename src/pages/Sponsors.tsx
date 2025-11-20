import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Become a Sponsor
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Support ECOBA 2025 AGM & National Convention
        </p>

        {/* Payment Information */}
        <Card className="max-w-2xl mx-auto p-8 mb-12 border-2 border-accent">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">
            Sponsorship Payment Details
          </h2>
          <div className="space-y-4 text-center">
            <div>
              <p className="text-muted-foreground mb-1">Bank Name</p>
              <p className="text-xl font-bold text-primary">First Bank of Nigeria</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Account Name</p>
              <p className="text-xl font-bold text-primary">ECOBA National Association</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Account Number</p>
              <p className="text-3xl font-bold text-accent">0123456789</p>
            </div>
          </div>
        </Card>

        {/* Sponsorship Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="p-8 text-center border-2 hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-primary mb-4">Platinum</h3>
            <p className="text-4xl font-bold text-accent mb-4">₦5,000,000</p>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Logo on all materials</li>
              <li>• Prime exhibition space</li>
              <li>• 10 delegate passes</li>
              <li>• Speaking opportunity</li>
            </ul>
          </Card>
          
          <Card className="p-8 text-center border-2 hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-primary mb-4">Gold</h3>
            <p className="text-4xl font-bold text-accent mb-4">₦2,500,000</p>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Logo on select materials</li>
              <li>• Exhibition space</li>
              <li>• 5 delegate passes</li>
              <li>• Promotional mentions</li>
            </ul>
          </Card>
          
          <Card className="p-8 text-center border-2 hover:border-accent transition-colors">
            <h3 className="text-2xl font-bold text-primary mb-4">Silver</h3>
            <p className="text-4xl font-bold text-accent mb-4">₦1,000,000</p>
            <ul className="text-left space-y-2 text-muted-foreground">
              <li>• Logo in program</li>
              <li>• Small exhibition space</li>
              <li>• 2 delegate passes</li>
              <li>• Website listing</li>
            </ul>
          </Card>
        </div>

        {/* Current Sponsors */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Sponsors</h2>
          <p className="text-muted-foreground">
            Sponsor logos will be displayed here. Contact the organizing committee for sponsorship opportunities.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
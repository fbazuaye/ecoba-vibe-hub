import { Navigation } from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Countdown } from "@/components/Countdown";

export default function Livestream() {
  const eventDate = new Date('2025-04-17T09:00:00');

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Live Convention Broadcast
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Watch ECOBA 2025 AGM & Convention live from anywhere
        </p>

        {/* Countdown */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-primary mb-6">
            Convention Starts In
          </h2>
          <Countdown targetDate={eventDate} />
        </div>

        {/* Livestream Embed */}
        <Card className="max-w-5xl mx-auto p-4 border-2 border-accent">
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center p-8">
              <div className="text-6xl mb-4">📺</div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                Livestream Coming Soon
              </h3>
              <p className="text-muted-foreground">
                The livestream will be available here when the convention begins on April 17, 2025.
              </p>
              <p className="text-sm text-muted-foreground mt-4">
                Streaming platforms: YouTube & Facebook Live
              </p>
            </div>
          </div>
        </Card>

        {/* Social Links */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Follow us for updates
          </h3>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-accent hover:underline font-semibold">YouTube</a>
            <a href="#" className="text-accent hover:underline font-semibold">Facebook</a>
            <a href="#" className="text-accent hover:underline font-semibold">Twitter</a>
            <a href="#" className="text-accent hover:underline font-semibold">Instagram</a>
          </div>
        </div>
      </div>
    </div>
  );
}
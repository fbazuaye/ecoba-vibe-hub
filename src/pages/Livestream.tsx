import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Countdown } from "@/components/Countdown";

// UPDATE THIS: Replace with your YouTube video ID when the livestream is ready
// Example: For URL https://www.youtube.com/watch?v=ABC123, use "ABC123"
const YOUTUBE_VIDEO_ID = ""; // Leave empty to show "Coming Soon" placeholder

export default function Livestream() {
  const eventDate = new Date('2025-12-05T09:00:00');

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
          {YOUTUBE_VIDEO_ID ? (
            <iframe
              className="w-full aspect-video rounded-lg"
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=0&rel=0`}
              title="ECOBA 2025 AGM & Convention Livestream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">📺</div>
                <h3 className="text-2xl font-bold text-primary mb-2">
                  Livestream Coming Soon
                </h3>
                <p className="text-muted-foreground">
                  The livestream will be available here when the convention begins on December 5th, 2025.
                </p>
              </div>
            </div>
          )}
        </Card>

        {/* Website Link */}
        <div className="text-center mt-12">
          <h3 className="text-xl font-bold text-primary mb-4">
            Follow us for updates
          </h3>
          <a 
            href="https://ecoba.com.ng/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent hover:underline font-semibold text-lg"
          >
            https://ecoba.com.ng/
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}
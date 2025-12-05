import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Countdown } from "@/components/Countdown";
import { LivestreamAnalytics } from "@/components/LivestreamAnalytics";

// UPDATE THIS: Replace with your YouTube video ID when the livestream is ready
// Example: For URL https://www.youtube.com/watch?v=ABC123, use "ABC123"
const YOUTUBE_VIDEO_ID = "4ZPvDTG7PYY";

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

        {/* Analytics Dashboard */}
        <div className="max-w-7xl mx-auto mb-8">
          <LivestreamAnalytics />
        </div>

        {/* Livestream & Chat Container */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Video Player */}
          <Card className="lg:col-span-2 p-4 border-2 border-accent">
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

          {/* Live Chat */}
          <Card className="p-4 border-2 border-accent">
            <h3 className="text-lg font-bold text-primary mb-3">Live Chat</h3>
            <div className="h-[400px] lg:h-[calc(100%-2.5rem)] bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="text-4xl mb-3">💬</div>
                <p className="text-muted-foreground text-sm">
                  Live chat is only available during an active livestream broadcast.
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                  Check back on December 5th, 2025 when the convention goes live!
                </p>
              </div>
            </div>
          </Card>
        </div>

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
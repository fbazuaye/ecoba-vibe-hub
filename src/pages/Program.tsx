import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Program() {
  const day1Events = [
    { time: "8:00 AM", title: "Golf Tee Off", location: "Benin Club Golf Course" },
    { time: "3:00 PM", title: "Novelty Football Match", location: "Airforce Base, Airport Road" },
    { time: "7:00 PM", title: "Cocktail to Welcome Delegates", location: "Constantia Hotel, Airport Road" },
  ];

  const day2Events = [
    { time: "10:00 AM", title: "AGM & Elections", location: "Constantia Hotel, Airport Road, Benin City" },
    { time: "6:00 PM", title: "Awards and Dinner Night", location: "Constantia Hotel, Airport Road, Benin City" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Convention Program
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          December 5-6, 2025 • Benin City, Nigeria
        </p>

        {/* Day 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-accent"></div>
            <h2 className="text-3xl font-bold text-primary">Day 1 - Friday, December 5th</h2>
            <div className="h-1 flex-1 bg-accent"></div>
          </div>

          <div className="space-y-6">
            {day1Events.map((event, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group hover:translate-x-2 transition-transform"
              >
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold min-w-[120px] text-center shadow-md">
                  {event.time}
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-accent"></div>
            <h2 className="text-3xl font-bold text-primary">Day 2 - Saturday, December 6th</h2>
            <div className="h-1 flex-1 bg-accent"></div>
          </div>

          <div className="space-y-6">
            {day2Events.map((event, index) => (
              <div
                key={index}
                className="flex gap-6 items-start group hover:translate-x-2 transition-transform"
              >
                <div className="bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold min-w-[120px] text-center shadow-md">
                  {event.time}
                </div>
                <div className="flex-1 bg-card border border-border rounded-lg p-6 shadow-sm group-hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-bold text-primary mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
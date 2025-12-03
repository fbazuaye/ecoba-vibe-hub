import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Users, Calendar } from "lucide-react";

export default function Program() {
  const day1Events = [
    { 
      time: "10:00 AM", 
      title: "Golf Tee-Off", 
      location: "Golf Course",
      icon: "🏌️"
    },
    { 
      time: "6:00 PM", 
      title: "Welcome Cocktails", 
      location: "Oti Boutique Hotel & SPA, 1 Lucky Lane, Off Etete Road, Oka, GRA",
      icon: "🍸"
    },
  ];

  const day2Events = [
    { 
      time: "10:00 AM - 3:00 PM", 
      title: "AGM & CONVENTION", 
      location: "Constantial Hotel, Airport Road, Benin City",
      note: "Statutory NEC members, Branch Delegates & Observers",
      icon: "📋"
    },
    { 
      time: "6:00 PM", 
      title: "Dinner/Gala Night", 
      location: "Constantial Hotel",
      note: "Statutory NEC members, Delegates & Invited Guests",
      icon: "🎉"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-accent font-semibold tracking-wider uppercase mb-2">Edo College Old Boys Association</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            AGM & Convention Program
          </h1>
          <div className="flex items-center justify-center gap-2 text-lg opacity-90">
            <Calendar className="w-5 h-5" />
            <span>December 5-6, 2025 • Benin City, Nigeria</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Day 1 */}
        <div className="mb-16">
          <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Friday, 5th December 2025</h2>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Users className="w-4 h-4" />
                  Statutory NEC members, Branch Delegates & Invited Guests
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {day1Events.map((event, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary text-primary-foreground p-6 md:min-w-[200px] flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">{event.icon}</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold text-lg">{event.time}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                    <div className="flex items-start gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 */}
        <div className="mb-16">
          <div className="bg-accent/10 border-l-4 border-accent rounded-r-lg p-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="bg-accent text-accent-foreground p-3 rounded-full">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">Saturday, 6th December 2025</h2>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {day2Events.map((event, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="bg-primary text-primary-foreground p-6 md:min-w-[200px] flex flex-col items-center justify-center">
                    <span className="text-4xl mb-2">{event.icon}</span>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-bold text-lg text-center">{event.time}</span>
                    </div>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">{event.title}</h3>
                    <div className="flex items-start gap-2 text-muted-foreground mb-3">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                      <span>{event.location}</span>
                    </div>
                    {event.note && (
                      <div className="flex items-start gap-2 text-sm bg-muted/50 rounded-lg p-3">
                        <Users className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                        <span className="text-foreground/80">{event.note}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center border-t border-border pt-8">
          <p className="text-muted-foreground font-medium">Signed:</p>
          <p className="text-primary font-bold text-lg">National Convention Planning Committee 2025</p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

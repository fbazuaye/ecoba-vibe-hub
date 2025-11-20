import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Countdown } from "@/components/Countdown";
import { Calendar, Users, Award, Tv } from "lucide-react";

const Index = () => {
  const eventDate = new Date('2025-04-17T09:00:00');

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          {/* ECOBA Crest Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-accent rounded-full flex items-center justify-center">
            <span className="text-6xl font-bold text-accent-foreground">E</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            ECOBA 2025
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-accent mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            AGM & National Convention
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            April 17-18, 2025 • Lagos, Nigeria
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Join us for two days of networking, leadership, and celebrating excellence in the ECOBA community.
          </p>
          
          {/* Countdown Timer */}
          <div className="mb-12">
            <Countdown targetDate={eventDate} />
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/program">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg">
                View Program
              </Button>
            </Link>
            <Link to="/candidates">
              <Button variant="outline" className="border-2 border-accent text-primary-foreground hover:bg-accent hover:text-accent-foreground font-bold px-8 py-6 text-lg">
                Meet Candidates
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link to="/program" className="group">
              <div className="bg-card border-2 border-border hover:border-accent rounded-lg p-8 text-center transition-all hover:shadow-lg">
                <Calendar className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold text-primary mb-2">Event Program</h3>
                <p className="text-muted-foreground">View the full schedule for both days</p>
              </div>
            </Link>
            
            <Link to="/candidates" className="group">
              <div className="bg-card border-2 border-border hover:border-accent rounded-lg p-8 text-center transition-all hover:shadow-lg">
                <Users className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold text-primary mb-2">Candidates</h3>
                <p className="text-muted-foreground">Meet those running for office</p>
              </div>
            </Link>
            
            <Link to="/delegates" className="group">
              <div className="bg-card border-2 border-border hover:border-accent rounded-lg p-8 text-center transition-all hover:shadow-lg">
                <Award className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold text-primary mb-2">Delegates</h3>
                <p className="text-muted-foreground">View all registered attendees</p>
              </div>
            </Link>
            
            <Link to="/livestream" className="group">
              <div className="bg-card border-2 border-border hover:border-accent rounded-lg p-8 text-center transition-all hover:shadow-lg">
                <Tv className="w-16 h-16 mx-auto mb-4 text-accent" />
                <h3 className="text-xl font-bold text-primary mb-2">Livestream</h3>
                <p className="text-muted-foreground">Watch the event live online</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Register your attendance now to be part of this historic gathering of ECOBA members.
          </p>
          <Link to="/register">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-6 text-xl">
              Register Your Attendance
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
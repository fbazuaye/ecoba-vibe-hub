import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Countdown } from "@/components/Countdown";
import { Calendar, Users, Award, Tv } from "lucide-react";
import logoImage from "@/assets/logo.png";
import chiefHostImage from "@/assets/chief-lucky-igbinedion.jpg";

const Index = () => {
  const eventDate = new Date('2025-12-05T09:00:00');

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 px-4">
        <div className="container mx-auto text-center">
          {/* ECOBA Crest */}
          <div className="w-48 h-48 mx-auto mb-8">
            <img src={logoImage} alt="ECOBA Crest" className="w-full h-full object-contain" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            ECOBA 2025
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-accent mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            AGM & National Convention
          </h2>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            December 5-7, 2025 • Constantial Hotel, Airport Road, Benin City
          </p>
          <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
            Join us for three days of networking, leadership, and celebrating excellence in the ECOBA community.
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

      {/* President Section */}
      <section className="py-16 px-4 bg-background">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-card border-2 border-border rounded-lg p-8 md:p-12 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-64 flex-shrink-0">
                <img 
                  src={chiefHostImage} 
                  alt="H.E. CHIEF LUCKY N. IGBINEDION" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  H.E. CHIEF LUCKY N. IGBINEDION
                </h2>
                <p className="text-xl text-accent font-semibold mb-1">
                  President, Edo College Old Boys Association (ECOBA) Worldwide
                </p>
                <p className="text-lg text-muted-foreground font-semibold">
                  Chief Host
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* National Exco Members Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            National ECOBA Officers
          </h2>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Chief Lucky Igbinedion</h3>
              <p className="text-accent font-semibold">President</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Engr. Greg Ogbeifun</h3>
              <p className="text-accent font-semibold">1st Vice President</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Mr. Aigbe Olotu</h3>
              <p className="text-accent font-semibold">2nd Vice President</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Mr. Justice E. Aigbe</h3>
              <p className="text-accent font-semibold">General Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Mr. Bright Aikhaine</h3>
              <p className="text-accent font-semibold">Asst. General Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Engr. Elvis Obaseki</h3>
              <p className="text-accent font-semibold">Social Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Sir. Tpl Jeff Anuta</h3>
              <p className="text-accent font-semibold">National Financial Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Mr. Anthony Ohei</h3>
              <p className="text-accent font-semibold">Publicity Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Mr. Fred Anuta</h3>
              <p className="text-accent font-semibold">Financial Secretary</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Dr. Ruben Osahon</h3>
              <p className="text-accent font-semibold">Ex-Officio</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-primary mb-1">Barr. Nosa Iyekekpolor</h3>
              <p className="text-accent font-semibold">Past Legal Adviser</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6 text-center opacity-60">
              <h3 className="text-lg font-bold text-primary mb-1">Legal Adviser</h3>
              <p className="text-muted-foreground font-semibold">Vacant</p>
            </div>
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

      <Footer />
    </div>
  );
};

export default Index;
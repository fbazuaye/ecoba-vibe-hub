import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import presidentPhoto from "@/assets/engr-greg-ogbeifun.png";

interface Candidate {
  id: number;
  name: string;
  set: string;
  position: string;
  photo: string;
  bio: string;
  manifesto: string;
}

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");

  // Sample data - will be replaced with database later
  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Engr. Greg Ogbeifun",
      set: "",
      position: "The President",
      photo: presidentPhoto,
      bio: "Distinguished alumnus with 25+ years of leadership experience in corporate governance.",
      manifesto: "My vision is to strengthen ECOBA's national presence and create sustainable value for all members through strategic partnerships and enhanced member engagement."
    },
    {
      id: 2,
      name: "Marcus Thompson",
      set: "1998 Set",
      position: "1st Vice President",
      photo: "",
      bio: "Experienced administrator with a track record of excellence in organizational development.",
      manifesto: "I pledge to support our President in delivering transformative programs that benefit every ECOBA member across all branches."
    },
    {
      id: 3,
      name: "Michael Johnson",
      set: "2000 Set",
      position: "2nd Vice President",
      photo: "",
      bio: "Dynamic leader with expertise in strategic planning and member relations.",
      manifesto: "I will work to enhance communication and collaboration between all branches and national leadership."
    },
    {
      id: 4,
      name: "Samuel Richards",
      set: "1997 Set",
      position: "Secretary General",
      photo: "",
      bio: "Detail-oriented professional committed to transparency and efficient administration.",
      manifesto: "I will ensure seamless communication, proper documentation, and accountability in all ECOBA activities."
    },
    {
      id: 5,
      name: "David Brown",
      set: "1999 Set",
      position: "Assistant Secretary General",
      photo: "",
      bio: "Organized and efficient administrator dedicated to supporting the Secretary General.",
      manifesto: "I will ensure all administrative processes run smoothly and efficiently."
    },
    {
      id: 6,
      name: "Emmanuel Davies",
      set: "2001 Set",
      position: "National Financial Secretary",
      photo: "",
      bio: "Financial expert with extensive experience in non-profit financial management.",
      manifesto: "I pledge to maintain accurate financial records and ensure transparency in all transactions."
    },
    {
      id: 7,
      name: "Robert Wilson",
      set: "1996 Set",
      position: "National Treasurer",
      photo: "",
      bio: "Certified accountant with over 20 years of experience in financial stewardship.",
      manifesto: "I will ensure prudent financial management and growth of ECOBA's resources."
    },
    {
      id: 8,
      name: "Patrick Taylor",
      set: "1998 Set",
      position: "National Legal Adviser",
      photo: "",
      bio: "Senior legal practitioner with expertise in corporate and association law.",
      manifesto: "I will provide sound legal guidance and ensure all ECOBA activities comply with relevant laws."
    },
    {
      id: 9,
      name: "James Anderson",
      set: "2002 Set",
      position: "National Publicity Secretary",
      photo: "",
      bio: "Media professional with a passion for storytelling and brand building.",
      manifesto: "I will enhance ECOBA's public image and keep members informed through effective communication."
    },
    {
      id: 10,
      name: "Leonard Martinez",
      set: "2000 Set",
      position: "National Social Secretary",
      photo: "",
      bio: "Event planning specialist passionate about creating memorable experiences.",
      manifesto: "I will organize engaging social events that strengthen bonds among ECOBA members."
    },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.set.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === "all" || candidate.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const positions = Array.from(new Set(candidates.map(c => c.position)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Meet the Candidates
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Get to know the leaders vying for your vote
        </p>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search by name or set..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1"
          />
          <Select value={positionFilter} onValueChange={setPositionFilter}>
            <SelectTrigger className="w-full md:w-[250px]">
              <SelectValue placeholder="Filter by position" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Positions</SelectItem>
              {positions.map(position => (
                <SelectItem key={position} value={position}>{position}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Candidates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCandidates.map((candidate) => (
            <Card
              key={candidate.id}
              className="overflow-hidden hover:shadow-xl transition-all cursor-pointer group border-2 hover:border-accent"
              onClick={() => setSelectedCandidate(candidate)}
            >
              {candidate.photo && (
                <div className="aspect-square overflow-hidden">
                  <img
                    src={candidate.photo}
                    alt={candidate.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6 bg-card">
                <h3 className="text-2xl font-bold text-primary mb-2">{candidate.name}</h3>
                {candidate.set && <p className="text-accent font-semibold mb-1">{candidate.set}</p>}
                <p className="text-muted-foreground font-medium">{candidate.position}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Candidate Detail Dialog */}
      <Dialog open={!!selectedCandidate} onOpenChange={() => setSelectedCandidate(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCandidate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-primary">{selectedCandidate.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {selectedCandidate.photo && (
                  <img
                    src={selectedCandidate.photo}
                    alt={selectedCandidate.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                )}
                <div>
                  {selectedCandidate.set && <p className="text-accent font-bold text-lg">{selectedCandidate.set}</p>}
                  <p className="text-primary font-semibold">{selectedCandidate.position}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Biography</h4>
                  <p className="text-foreground">{selectedCandidate.bio}</p>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary mb-2">Manifesto</h4>
                  <p className="text-foreground">{selectedCandidate.manifesto}</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
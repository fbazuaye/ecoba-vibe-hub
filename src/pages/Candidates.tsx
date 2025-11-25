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
  year: string;
  position: string;
  photo: string;
  branch: string;
  sponsor: string;
  sponsorBranch: string;
  coSponsor: string;
  coSponsorBranch: string;
}

export default function Candidates() {
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [positionFilter, setPositionFilter] = useState("all");

  const candidates: Candidate[] = [
    {
      id: 1,
      name: "Engr Greg Ogbeifun",
      year: "1965-1971",
      position: "President",
      photo: presidentPhoto,
      branch: "Benin",
      sponsor: "Akin Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Bob Osaghae",
      coSponsorBranch: "Abuja"
    },
    {
      id: 2,
      name: "Dr. Suleiman Braimoh",
      year: "1970-1976",
      position: "1st Vice President",
      photo: "",
      branch: "Abuja",
      sponsor: "Bob Osaghae",
      sponsorBranch: "Abuja",
      coSponsor: "Charles Isa",
      coSponsorBranch: "Lagos"
    },
    {
      id: 3,
      name: "Solomon Ikhioda",
      year: "1968-1975",
      position: "2nd Vice President",
      photo: "",
      branch: "Lagos",
      sponsor: "Charles Isa",
      sponsorBranch: "Lagos",
      coSponsor: "Akin Tokurah",
      coSponsorBranch: "Benin"
    },
    {
      id: 4,
      name: "Abor Adiabuia Solomon",
      year: "1984-1988",
      position: "Asst Secretary General",
      photo: "",
      branch: "Asaba",
      sponsor: "Ogbuchi Frank Okolie",
      sponsorBranch: "Asaba",
      coSponsor: "Engr Radolph Deh Opute",
      coSponsorBranch: "Benin"
    },
    {
      id: 5,
      name: "Justice Eghe Aigbe",
      year: "1980-1984",
      position: "National Financial Secretary",
      photo: "",
      branch: "Benin",
      sponsor: "Akin Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Dr M. O. Osarenkhoe",
      coSponsorBranch: "Asaba"
    },
    {
      id: 6,
      name: "Dr M. O. Osarenkhoe",
      year: "",
      position: "National Treasurer",
      photo: "",
      branch: "Asaba",
      sponsor: "Ogbuchi Frank Okolie",
      sponsorBranch: "Asaba",
      coSponsor: "Fred Onakpoya",
      coSponsorBranch: "Warri"
    },
    {
      id: 7,
      name: "Jude Eluemunor",
      year: "1988-1993",
      position: "National Legal Adviser",
      photo: "",
      branch: "Lagos",
      sponsor: "Charles Isa",
      sponsorBranch: "Lagos",
      coSponsor: "Bob Osaghae",
      coSponsorBranch: "Abuja"
    },
    {
      id: 8,
      name: "Engr Radolph Deh Opute",
      year: "1990-1996",
      position: "National Publicity Secretary",
      photo: "",
      branch: "Benin",
      sponsor: "Akim Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Charles Isa",
      coSponsorBranch: "Lagos"
    },
    {
      id: 9,
      name: "Isaac Onobrudu",
      year: "1986-1992",
      position: "National Social Secretary",
      photo: "",
      branch: "Warri",
      sponsor: "Fred Onakpoya",
      sponsorBranch: "Warri",
      coSponsor: "Engr Radolph Deh Opute",
      coSponsorBranch: "Benin"
    },
  ];

  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.year.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         candidate.branch.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPosition = positionFilter === "all" || candidate.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const positions = Array.from(new Set(candidates.map(c => c.position)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          2025 ECOBA National Election Candidates
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Meet the nominees for National ECOBA Officers
        </p>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Search by name, year, or branch..."
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
                <h3 className="text-xl font-bold text-primary mb-2">{candidate.name}</h3>
                <p className="text-accent font-semibold text-lg mb-1">{candidate.position}</p>
                <div className="space-y-1 text-sm">
                  {candidate.year && <p className="text-muted-foreground"><span className="font-medium">Year:</span> {candidate.year}</p>}
                  <p className="text-muted-foreground"><span className="font-medium">Branch:</span> {candidate.branch}</p>
                </div>
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
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <p className="text-accent font-bold text-2xl">{selectedCandidate.position}</p>
                  {selectedCandidate.year && (
                    <p className="text-foreground"><span className="font-semibold">Year:</span> {selectedCandidate.year}</p>
                  )}
                  <p className="text-foreground"><span className="font-semibold">Branch:</span> {selectedCandidate.branch}</p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="text-lg font-bold text-primary mb-3">Nomination Details</h4>
                  <div className="space-y-2 text-sm">
                    <p className="text-foreground">
                      <span className="font-semibold">Sponsor:</span> {selectedCandidate.sponsor} ({selectedCandidate.sponsorBranch} Branch)
                    </p>
                    <p className="text-foreground">
                      <span className="font-semibold">Co-Sponsor:</span> {selectedCandidate.coSponsor} ({selectedCandidate.coSponsorBranch} Branch)
                    </p>
                  </div>
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
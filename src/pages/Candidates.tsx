import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ogbeifunPhoto from "@/assets/candidates/ogbeifun.jpg";
import braimohPhoto from "@/assets/candidates/braimoh.jpg";
import ikhiodaPhoto from "@/assets/candidates/ikhioda.jpg";
import akhainePhoto from "@/assets/candidates/akhaine.jpg";
import josiahPhoto from "@/assets/candidates/josiah.jpg";
import solomonPhoto from "@/assets/candidates/solomon.jpg";
import aigbePhoto from "@/assets/candidates/aigbe.jpg";
import ehondorPhoto from "@/assets/candidates/ehondor.jpg";
import osarenkhoePhoto from "@/assets/candidates/osarenkhoe.jpg";
import eluemunorPhoto from "@/assets/candidates/eluemunor.jpg";

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
  profile: string;
  manifesto?: string;
  qualifications?: string[];
  experience?: string[];
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
      photo: ogbeifunPhoto,
      branch: "Benin",
      sponsor: "Akin Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Bob Osaghae",
      coSponsorBranch: "Abuja",
      profile: "Engr. Greg U. Ogbeifun is an accomplished Marine Engineer, Maritime Consultant, Blue Economy Expert, and renowned entrepreneur whose contributions have shaped Nigeria's maritime and energy landscape for over four decades. His distinguished career reflects rare technical mastery, visionary leadership, and an unwavering commitment to national development.",
      qualifications: [
        "First-Class (Combined) Certificate of Competency in Marine Engineering",
        "Widely considered one of Nigeria's foremost champions of indigenous participation in the maritime sector"
      ],
      experience: [
        "Chairman, Starzs Investments Company Limited - Nigeria's leading indigenous marine logistics company",
        "Managing Director/CEO, Starzs Marine and Engineering Limited - First privately-owned indigenous ship repair yard in Nigeria",
        "Chairman, Starzs Gas Limited, Eaglewatch Security Limited, Diverse Autocare Centre Limited",
        "Over 1,200-1,300 Nigerians employed across his companies",
        "Served on numerous Presidential, Ministerial, and Government Agency Committees"
      ]
    },
    {
      id: 2,
      name: "Dr. Suleiman Braimoh",
      year: "1970-1976",
      position: "1st Vice President",
      photo: braimohPhoto,
      branch: "Abuja",
      sponsor: "Bob Osaghae",
      sponsorBranch: "Abuja",
      coSponsor: "Charles Isa",
      coSponsorBranch: "Lagos",
      profile: "Dr. Suleiman Braimoh is an accomplished alumnus of Edo College whose life trajectory blends academic brilliance, international executive experience, outstanding technical expertise in strategic planning and results-based management, and long-standing commitment to community development. He served as Deputy Head of Speer House (1974/75) and Head of School (1975/76).",
      qualifications: [
        "Ph.D. and M.Sc., Sociology, University of Wisconsin–Madison, USA",
        "B.Sc. (Hons.), Sociology and Anthropology – University of Benin, Nigeria",
        "Executive education certificates from Cambridge, Michigan, Sussex, Cornell, Maastricht Universities",
        "Fellow of the Institute of Management Consultants",
        "Certified Management Consultant"
      ],
      experience: [
        "Three decades in the United Nations system",
        "Country Representative (CEO-level) in six countries: Sierra Leone, Liberia, Eritrea, Guyana, Suriname, Trinidad and Tobago",
        "Regional Chief of Programmes and Planning for South Asia at UNICEF",
        "Global Head of Strategic Human Resources Planning at UNICEF HQ, New York",
        "Managed programmes exceeding $170 million USD"
      ]
    },
    {
      id: 3,
      name: "Solomon Ikhioda",
      year: "1968-1975",
      position: "2nd Vice President",
      photo: ikhiodaPhoto,
      branch: "Lagos",
      sponsor: "Charles Isa",
      sponsorBranch: "Lagos",
      coSponsor: "Akin Tokurah",
      coSponsorBranch: "Benin",
      profile: "A keen trend and culture watcher specializing in mining codes from proceeding culture to help brands attain relevance and resonance on a sustained basis in the marketplace. For over three decades, he has developed strategy and marketing communications for famous indigenous and global brands in Nigeria and the larger EMEA markets.",
      qualifications: [
        "B.A (Hons) Degree in English from the University of Ife, Ile-Ife",
        "Certifications from HEC Paris",
        "Executive Intensive for Repurposing Business for Kingdom Influence, Paarl, South Africa",
        "World Communication Forum, Davos, Switzerland"
      ],
      experience: [
        "Chief Communications Strategist of Troyka Holdings",
        "Insight Redefini - largest marketing communications group in sub-Saharan Africa",
        "Halogen Security and Optimum Exposures Out-of-Home",
        "Ozolua House, 1968-1975"
      ],
      manifesto: "I will be guided to promote development with soul. The Edo College soul, enshrined in our unique traditions, is the secret power from which every distinction we experienced grew. If elected, I have determined to convert this nostalgia for the glory days into fuel for reigniting this soul."
    },
    {
      id: 4,
      name: "Bright Ebhohon Akhaine",
      year: "1987-1992",
      position: "General Secretary",
      photo: akhainePhoto,
      branch: "Port Harcourt",
      sponsor: "Esan Edovbiye",
      sponsorBranch: "PH",
      coSponsor: "Pst Isaac Onobrudu",
      coSponsorBranch: "Warri",
      profile: "A proud Edo College alumnus with a deep commitment to service and community development. Over the years, Bright has actively contributed to ECOBA at both branch and national levels, championing accountability, collaboration, and effective communication.",
      experience: [
        "Treasury Management and Cash Officer at Marconi.Ng EPC LIMITED",
        "Treasurer, ECOBA Port Harcourt Branch",
        "Outgoing National Assistant Secretary General",
        "Speer House, 1992 Set"
      ],
      manifesto: "If entrusted with your vote, I pledge to work tirelessly to represent our Association with pride and honor, upholding integrity, service, and community development."
    },
    {
      id: 5,
      name: "Engr. Ighomuaye Duke Josiah, FNSE, FNIHTE",
      year: "1983-1988",
      position: "General Secretary",
      photo: josiahPhoto,
      branch: "Benin",
      sponsor: "Akin Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Dr M. O. Osarenkhoe",
      coSponsorBranch: "Asaba",
      profile: "A Registered and practicing Civil Engineer with over 25 years of professional experience. Fellow of the Nigerian Society of Engineers (FNSE) and Fellow of the Nigerian Institution of Highway and Transportation Engineers (FNIHTE). Currently serves as Managing Director of DEJE Engineering Ltd., based in Benin City.",
      qualifications: [
        "Artificial Intelligence (Machine Learning - Business Applications) - University of Texas at Austin USA",
        "Advanced Certificate - Environmental Standards - UNIBEN",
        "Advanced Certificate - Social Standards - UNIBEN",
        "Fellow, Nigerian Society of Engineers (FNSE)",
        "Fellow, Nigerian Institution of Highway and Transportation Engineers (FNIHTE)"
      ],
      experience: [
        "Managing Director, DEJE Engineering Ltd.",
        "Secretary, Class of 1988 (8 years)",
        "Chairman, Planning Committee — ECOBA '88 End-of-Year Celebration (7 consecutive years)",
        "Current Coordinator, Class of 1988",
        "Nana House, 1983-1988"
      ],
      manifesto: "To strengthen ECOBA National through efficient communication, transparent governance, and unified alumni engagement. Key actions: enhance communication across chapters, establish transparent records, strengthen national alumni projects, drive member engagement & unity, and uphold excellence, integrity & service."
    },
    {
      id: 6,
      name: "Engr Abor Adiabuia Solomon",
      year: "1984-1988",
      position: "Assistant General Secretary",
      photo: solomonPhoto,
      branch: "Asaba",
      sponsor: "Ogbuchi Frank Okolie",
      sponsorBranch: "Asaba",
      coSponsor: "Engr Radolph Deh Opute",
      coSponsorBranch: "Benin",
      profile: "Electrical Electronics Engineer with extensive experience in planning, construction, and consulting. Currently P.R.O for ECOBA Asaba Branch and Managing Director of Solab Power Electrical Engineering Int'l Ltd.",
      qualifications: [
        "MSc in Electrical Electronics Engineering (Power Option) - Ambrose Alli University",
        "PGD in Electrical Electronics Engineering - Ambrose Alli University",
        "HND in Electrical Electronics Engineering - Auchi Polytechnic",
        "COREN, NSE, NIEEE, ISPON Certifications"
      ],
      experience: [
        "Manager Planning & Construction - PHCN PLC/ BEDC Benin City (1997-2014)",
        "Consulting Engineer - Powerhouse Industrial Ltd. Asaba (2015-Present)",
        "Managing Director - Solab Power Electrical Engineering Int'l Ltd. (2014-Present)",
        "P.R.O Asaba Branch (2023-Present)"
      ],
      manifesto: "Together, we will create an inclusive and engaging environment where every member feels valued, heard, and empowered. Focus on enhanced communication, events and networking, support for current students, sustainability and growth, and feedback for continuous improvement."
    },
    {
      id: 7,
      name: "Justice Eghe Aigbe",
      year: "1980-1984",
      position: "National Financial Secretary",
      photo: aigbePhoto,
      branch: "Benin",
      sponsor: "Akin Tokurah",
      sponsorBranch: "Benin",
      coSponsor: "Dr M. O. Osarenkhoe",
      coSponsorBranch: "Asaba",
      profile: "Dedicated educator and administrator with extensive experience in teaching and leadership roles. Currently serves as Executive Principal at Edo College. Doctorate Student in Strategic and Financial Management at University of Benin.",
      qualifications: [
        "DBA (CIV) - Currently pursuing Doctorate, University of Benin",
        "MBA (2003)",
        "PGDE (2014)",
        "ASCON (2009)",
        "PGDBA (1998)",
        "HND (1991)"
      ],
      experience: [
        "Executive Principal, Edo College",
        "General Secretary, ECOBA (4 years)",
        "Assistant Secretary General, ECOBA (11 years)",
        "Chairman, ECOBA Benin Branch Welfare Committee (3 years)",
        "Secretary, ECOBA Benin Branch (10 years)",
        "Ozolua House (Nibaromi), 1979-1986"
      ],
      manifesto: "Ensure transparency and accountability in financial management, strengthen financial systems through decisive coordination, mobilize funds and optimize resources, promote financial sustainability and growth, and coordinate branches, class sets and individual financial objectives."
    },
    {
      id: 8,
      name: "Chief Iyare Ehondor, MBA",
      year: "2004-2007",
      position: "National Financial Secretary",
      photo: ehondorPhoto,
      branch: "Lagos",
      sponsor: "Charles Isa",
      sponsorBranch: "Lagos",
      coSponsor: "Jude Eluemunor",
      coSponsorBranch: "Lagos",
      profile: "Chief Iyare Ehondor brings a steady blend of financial discipline, leadership, and integrity. His work spans banking, culture, and community development, all tied together by a track record of accountability and structured execution.",
      qualifications: [
        "Master's in Business Administration with specialisation in Sustainability - Nexford University",
        "B.Sc. Economics - Benson Idahosa University"
      ],
      experience: [
        "Branch Manager, United Bank for Africa plc, Lagos",
        "Over a decade in frontline operations, training and development (HR), Sales & relationship management",
        "Active promoter of culture, leadership, and youth development"
      ],
      manifesto: "Every payment, due, and contribution will be properly documented, traceable, and complete. Financial updates will be timely, factual, and backed by verifiable data. ECOBA should be the benchmark for financial discipline among alumni bodies. Records will be maintained in audit-ready formats."
    },
    {
      id: 9,
      name: "Dr M. O. Osarenkhoe",
      year: "1979-1984",
      position: "National Treasurer",
      photo: osarenkhoePhoto,
      branch: "Asaba",
      sponsor: "Ogbuchi Frank Okolie",
      sponsorBranch: "Asaba",
      coSponsor: "Fred Onakpoya",
      coSponsorBranch: "Warri",
      profile: "Consultant General Surgeon Special Grade 1 at Federal Medical Centre, Asaba. Current Chairman of ECOBA Asaba branch with extensive experience in leadership roles across professional and alumni associations.",
      qualifications: [
        "FACS - Fellow of the American College of Surgeons",
        "FICS - Fellow of the International College of Surgeons",
        "FWACS - Fellow of the West African College of Surgeons",
        "MBA - University of Benin (1999/2000)",
        "Medical Degree - University of Ilorin (1985-1991)"
      ],
      experience: [
        "Consultant General Surgeon Special Grade 1, FMC Asaba",
        "Director, Asaba Cancer Registry",
        "Chairman, Nigeria Cancer Society, Delta State Branch",
        "Current Chairman, ECOBA Asaba Branch",
        "National Financial Secretary, ICS Nigeria (2019-2025)",
        "Chairman, NMA Delta State (2012-2014)",
        "Two-time Head of Department of Surgery, FMC Asaba"
      ]
    },
    {
      id: 10,
      name: "Jude Chinasia Eluemunor, LLB, BL",
      year: "1988-1993",
      position: "National Legal Adviser",
      photo: eluemunorPhoto,
      branch: "Lagos",
      sponsor: "Charles Isa",
      sponsorBranch: "Lagos",
      coSponsor: "Bob Osaghae",
      coSponsorBranch: "Abuja",
      profile: "A distinguished legal professional and visionary corporate leader, celebrated for his remarkable achievements across multiple domains. With a profound background in commercial law, negotiation, dispute resolution, and a keen understanding of the humanities.",
      experience: [
        "Non-Executive Director at Banhill Nigeria Limited (since 2019) - 15% increase in market share, 20% boost in revenue",
        "Non-Executive Director at IHS Global Synergy Links Limited (since 2019) - 40% annual revenue increase",
        "Member, Trade and Commerce Committee - Tinubu/Shettima Presidential Campaign Council 2023",
        "Member, Legal Committee - Tinubu/Shettima Presidential Campaign Council 2023",
        "Outstanding contributions in campaign management and political strategy"
      ],
      manifesto: "Navigate complex business environments, spot opportunities, and execute strategic initiatives for sustainable organizational growth. Proven track record in enhancing board effectiveness, financial performance, and stakeholder engagement."
    }
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
          Meet the Candidates
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Get to know the leaders vying for your vote
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
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={candidate.photo}
                  alt={candidate.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedCandidate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-3xl text-primary">{selectedCandidate.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selectedCandidate.photo}
                    alt={selectedCandidate.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <p className="text-accent font-bold text-2xl">{selectedCandidate.position}</p>
                  {selectedCandidate.year && (
                    <p className="text-foreground"><span className="font-semibold">Year in EC:</span> {selectedCandidate.year}</p>
                  )}
                  <p className="text-foreground"><span className="font-semibold">Branch:</span> {selectedCandidate.branch}</p>
                </div>

                <Tabs defaultValue="profile" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                    <TabsTrigger value="qualifications">Qualifications</TabsTrigger>
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="manifesto">Manifesto</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="profile" className="space-y-4">
                    <div className="prose prose-sm max-w-none">
                      <p className="text-foreground leading-relaxed">{selectedCandidate.profile}</p>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="qualifications" className="space-y-4">
                    {selectedCandidate.qualifications && selectedCandidate.qualifications.length > 0 ? (
                      <ul className="space-y-2">
                        {selectedCandidate.qualifications.map((qual, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span className="text-foreground">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No qualifications listed</p>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="experience" className="space-y-4">
                    {selectedCandidate.experience && selectedCandidate.experience.length > 0 ? (
                      <ul className="space-y-3">
                        {selectedCandidate.experience.map((exp, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-accent font-bold">•</span>
                            <span className="text-foreground">{exp}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground">No experience listed</p>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="manifesto" className="space-y-4">
                    {selectedCandidate.manifesto ? (
                      <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-accent">
                        <p className="text-foreground leading-relaxed">{selectedCandidate.manifesto}</p>
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No manifesto available</p>
                    )}
                  </TabsContent>
                </Tabs>

                <div className="border-l-4 border-primary pl-4 bg-card p-4 rounded-r-lg">
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

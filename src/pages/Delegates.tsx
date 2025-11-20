import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

interface Attendee {
  id: string;
  name: string;
  class_set: string;
  branch: string;
  phone: string;
  email: string;
  attendance_type: string;
}

export default function Delegates() {
  const [attendees, setAttendees] = useState<Attendee[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [branchFilter, setBranchFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  useEffect(() => {
    fetchAttendees();
  }, []);

  const fetchAttendees = async () => {
    const { data, error } = await supabase
      .from('attendees')
      .select('*')
      .order('name');
    
    if (data) setAttendees(data);
    if (error) console.error('Error fetching attendees:', error);
  };

  const filteredAttendees = attendees.filter(attendee => {
    const matchesSearch = 
      attendee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      attendee.class_set.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBranch = branchFilter === "all" || attendee.branch === branchFilter;
    const matchesType = typeFilter === "all" || attendee.attendance_type === typeFilter;
    return matchesSearch && matchesBranch && matchesType;
  });

  const branches = Array.from(new Set(attendees.map(a => a.branch)));

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Delegates Directory
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          View all registered attendees for ECOBA 2025 Convention
        </p>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          <Input
            placeholder="Search by name or set..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <Select value={branchFilter} onValueChange={setBranchFilter}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Filter by branch" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Branches</SelectItem>
                {branches.map(branch => (
                  <SelectItem key={branch} value={branch}>{branch}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={typeFilter} onValueChange={setTypeFilter}>
              <SelectTrigger className="flex-1">
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Voting Delegate">Voting Delegates</SelectItem>
                <SelectItem value="Observer">Observers</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Attendees List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredAttendees.map((attendee) => (
            <div
              key={attendee.id}
              className="bg-card border-2 border-border rounded-lg p-6 hover:border-accent transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-primary mb-2">{attendee.name}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-semibold">Set:</span> {attendee.class_set}</p>
                    <p><span className="font-semibold">Branch:</span> {attendee.branch}</p>
                    <p><span className="font-semibold">Email:</span> {attendee.email}</p>
                    <p><span className="font-semibold">Phone:</span> {attendee.phone}</p>
                  </div>
                </div>
                <div>
                  <Badge 
                    variant={attendee.attendance_type === "Voting Delegate" ? "default" : "secondary"}
                    className="text-sm"
                  >
                    {attendee.attendance_type}
                  </Badge>
                </div>
              </div>
            </div>
          ))}

          {filteredAttendees.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No attendees found matching your criteria.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
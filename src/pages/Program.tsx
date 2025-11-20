import { Navigation } from "@/components/Navigation";

export default function Program() {
  const day1Events = [
    { time: "8:00 AM", title: "Registration & Breakfast", location: "Main Hall" },
    { time: "9:00 AM", title: "Opening Ceremony", location: "Convention Center" },
    { time: "10:30 AM", title: "Presidential Address", location: "Convention Center" },
    { time: "12:00 PM", title: "Lunch Break", location: "Dining Hall" },
    { time: "2:00 PM", title: "Committee Reports", location: "Convention Center" },
    { time: "4:00 PM", title: "Branch Presentations", location: "Convention Center" },
    { time: "6:00 PM", title: "Cocktail Reception", location: "Garden Terrace" },
    { time: "7:30 PM", title: "Gala Dinner", location: "Grand Ballroom" },
  ];

  const day2Events = [
    { time: "8:00 AM", title: "Breakfast", location: "Dining Hall" },
    { time: "9:00 AM", title: "Annual General Meeting", location: "Convention Center" },
    { time: "11:00 AM", title: "Election of Officers", location: "Convention Center" },
    { time: "1:00 PM", title: "Lunch", location: "Dining Hall" },
    { time: "2:30 PM", title: "Inauguration of New Executives", location: "Convention Center" },
    { time: "4:00 PM", title: "Closing Ceremony", location: "Convention Center" },
    { time: "5:00 PM", title: "Farewell Toast", location: "Garden Terrace" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold text-center text-primary mb-4">
          Convention Program
        </h1>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          April 17-18, 2025 • Lagos, Nigeria
        </p>

        {/* Day 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 flex-1 bg-accent"></div>
            <h2 className="text-3xl font-bold text-primary">Day 1 - April 17</h2>
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
            <h2 className="text-3xl font-bold text-primary">Day 2 - April 18</h2>
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
    </div>
  );
}
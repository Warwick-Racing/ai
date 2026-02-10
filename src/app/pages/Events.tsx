import { Calendar, MapPin, Trophy, Clock } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";

export default function Events() {
  const upcomingEvents = [
    {
      title: "Formula Student AI 2026",
      date: "July 2026",
      location: "Silverstone Circuit, UK",
      description: "Our main competition event where we'll showcase our autonomous racing capabilities.",
      status: "Upcoming",
    },
  ];

  const pastEvents = [
    {
      title: "Team Launch Event",
      date: "October 2025",
      location: "WMG, University of Warwick",
      achievement: "Successfully launched Warwick Racing AI team",
    },
    {
      title: "Initial Testing Phase",
      date: "November 2025",
      location: "Warwick Campus",
      achievement: "Completed first autonomous navigation tests",
    },
    {
      title: "Sponsor Recruitment Drive",
      date: "December 2025",
      location: "Various Locations",
      achievement: "Secured initial sponsorship partnerships",
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Events & Competitions"
        description="Follow our journey through competitions, testing days, and team milestones"
        containerClassName="max-w-7xl"
      />

      {/* Upcoming Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            UPCOMING EVENTS
          </h2>
          <div className="space-y-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 border-l-4 border-green-500 hover:bg-zinc-800 transition-colors"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <h3 className="text-2xl font-bold">{event.title}</h3>
                  <span className="px-4 py-1 bg-green-500 text-black text-sm font-semibold">
                    {event.status}
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-5 h-5 text-green-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <p className="text-gray-400">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Highlight */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-5xl mx-auto">
          <div className="bg-black p-12 border-2 border-green-500">
            <Trophy className="w-16 h-16 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
              FORMULA STUDENT AI
            </h2>
            <p className="text-lg text-gray-300 text-center mb-8">
              Formula Student AI is the premier competition for autonomous racing vehicles 
              designed and built by student teams. Teams from universities around the world 
              compete in various challenges testing perception, planning, and control systems.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">50+</div>
                <div className="text-sm text-gray-400">Competing Teams</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">3</div>
                <div className="text-sm text-gray-400">Competition Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">5</div>
                <div className="text-sm text-gray-400">Days of Racing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">
            PAST EVENTS & MILESTONES
          </h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-green-500" />
            <div className="space-y-12">
              {pastEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`w-full md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-zinc-900 p-6 border border-zinc-800">
                      <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                        <Clock className="w-4 h-4 text-green-500" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-300 mb-4">
                        <MapPin className="w-4 h-4 text-green-500" />
                        <span>{event.location}</span>
                      </div>
                      <p className="text-sm text-gray-400">{event.achievement}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-green-500 rounded-full transform -translate-x-1.5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Briefcase, Brain, Code, Cpu } from "lucide-react";

export default function Team() {
  const departments = [
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      name: "Machine Learning & AI",
      description:
        "Designs computer vision, sensor fusion, and model pipelines for robust autonomous perception.",
      members: ["Perception Engineers", "Machine Learning Engineers", "Computer Vision Specialists"],
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      name: "Software",
      description:
        "Builds planning, controls, and simulation tooling that powers reliable race-day autonomy.",
      members: ["Planning Engineers", "Control Engineers", "Simulation Developers"],
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      name: "Hardware",
      description:
        "Develops onboard electronics, embedded firmware, and integration infrastructure for the vehicle.",
      members: ["Embedded Engineers", "Electronics Engineers", "Systems Integration Engineers"],
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      name: "Team Operations",
      description:
        "Leads delivery planning, sponsorship relationships, and cross-team program coordination.",
      members: ["Program Managers", "Partnership Leads", "Operations Coordinators"],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            OUR TEAM
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A diverse group of students united by our passion for autonomous racing 
            and pushing the boundaries of technology
          </p>
        </div>
      </section>

      {/* Sub-team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            OUR SUB-TEAMS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 border border-zinc-800 hover:border-green-500 transition-colors"
              >
                <div className="mb-6">{dept.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{dept.name}</h3>
                <p className="text-gray-400 mb-6">{dept.description}</p>
                <div className="space-y-2">
                  {dept.members.map((member, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                      {member}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">PHOTO GALLERY</h2>
          <p className="text-gray-300 mb-10 text-lg">
            Explore track tests, development milestones, and competition preparation.
          </p>
          <Link
            to="/gallery"
            className="inline-block bg-green-500 hover:bg-green-600 text-black px-8 py-4 text-base font-semibold tracking-wider transition-colors"
          >
            OPEN GALLERY
          </Link>
        </div>
      </section>
    </div>
  );
}

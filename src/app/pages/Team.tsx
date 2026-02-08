import { Users, Briefcase, Code, Wrench, Brain, Cpu } from "lucide-react";

export default function Team() {
  const departments = [
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      name: "AI & ML Team",
      description: "Focusing on machine learning and artificial intelligence algorithm development, driving innovation and advancement in intelligent racing technology",
      members: ["AI Engineers", "Machine Learning Experts", "Computer Vision Specialists"],
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      name: "Software Team",
      description: "Responsible for software development, system architecture design, and software engineering practices, building stable and reliable software platforms",
      members: ["Software Engineers", "System Architects", "DevOps Engineers"],
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      name: "Hardware Team",
      description: "Focusing on hardware design, electronic systems, and embedded development, providing powerful hardware support for racing vehicles",
      members: ["Hardware Engineers", "Embedded Systems Engineers", "Electronics Specialists"],
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      name: "Org Team",
      description: "Responsible for team organization management, project coordination, and operational support, ensuring efficient team collaboration and smooth project progress",
      members: ["Project Managers", "Operations Coordinators", "Team Administrators"],
    },
  ];

  const teamMembers = [
    {
      name: "AI & ML Team",
      roles: [
        "AI Engineers",
        "Machine Learning Experts",
        "Computer Vision Specialists",
        "Data Scientists",
      ],
    },
    {
      name: "Software Team",
      roles: [
        "Software Engineers",
        "System Architects",
        "DevOps Engineers",
        "Full Stack Developers",
      ],
    },
    {
      name: "Hardware Team",
      roles: [
        "Hardware Engineers",
        "Embedded Systems Engineers",
        "Electronics Specialists",
        "PCB Designers",
      ],
    },
    {
      name: "Org Team",
      roles: [
        "Project Managers",
        "Operations Coordinators",
        "Team Administrators",
        "Event Organizers",
      ],
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

      {/* Departments Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            OUR DEPARTMENTS
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

      {/* Team Structure */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            TEAM STRUCTURE
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((section, index) => (
              <div key={index} className="bg-black p-8 border border-zinc-800">
                <h3 className="text-xl font-bold mb-6 text-green-500">
                  {section.name}
                </h3>
                <ul className="space-y-3">
                  {section.roles.map((role, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <span className="text-green-500 mt-1">→</span>
                      {role}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Users className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            JOIN OUR TEAM
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We're always looking for passionate students who want to be part of something 
            extraordinary. Whether you're an engineer, programmer, designer, or business 
            student, there's a place for you on our team.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 text-lg font-semibold tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50">
            APPLY NOW
          </button>
        </div>
      </section>
    </div>
  );
}

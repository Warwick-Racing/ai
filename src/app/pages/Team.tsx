import { Link } from "react-router-dom";
import { Briefcase, Brain, Code, Cpu } from "lucide-react";
import PageHeader from "@/app/components/PageHeader";
import { type SubteamKey, getSubteamImages } from "@/app/lib/gallery";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/app/components/ui/carousel";

type Department = {
  key: SubteamKey;
  icon: React.ReactNode;
  name: string;
  description: string;
  members: string[];
};

export default function Team() {
  const departments: Department[] = [
    {
      key: "ml-ai",
      icon: <Brain className="w-12 h-12 text-green-500" />,
      name: "Machine Learning & AI",
      description:
        "Teaches the autonomous car to interpret the world through computer vision, sensor fusion, and model pipelines. The team brings together AI engineers, machine learning experts, and data scientists to build perception and planning models that guide the car’s decision-making on competition day.",
      members: ["Perception Engineers", "Machine Learning Engineers", "Computer Vision Specialists"],
    },
    {
      key: "software",
      icon: <Code className="w-12 h-12 text-green-500" />,
      name: "Software",
      description:
        "Creates the infrastructure that allows the car’s ML models, sensors, and hardware to work seamlessly together in real time. The team owns DevOps engineering, simulation tooling, and system architecture to ensure accurate perception, path planning, and steering control.",
      members: ["Software Engineers/Developers", "Testers"],
    },
    {
      key: "hardware",
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      name: "Hardware",
      description:
        "Builds and maintains the physical platform that makes autonomous racing possible, developing onboard electronics, embedded firmware, and integration infrastructure for the vehicle. The hardware team ensures the full vehicle remains robust and reliable under racing conditions.",
      members: ["Embedded Engineers", "Electronics Engineers", "Systems Integration Engineers"],
    },
    {
      key: "operations",
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      name: "Team Operations",
      description:
        "Oversees and coordinates the other sub-teams’ work processes to keep development running smoothly. The operations team supports Formula Student AI filings, secures sponsorships, and increases WRAI’s campus-wide publicity so the team is ready for competition.",
      members: ["Project Managers", "Sponsorship & Outreach Co-ordinators", "Marketing Leads"],
    },
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Team"
        description="A diverse group of students united by our passion for autonomous racing and pushing the boundaries of technology"
        containerClassName="max-w-7xl"
      />

      {/* Sub-team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            OUR SUB-TEAMS
          </h2>
          <p className="mx-auto mb-12 max-w-5xl text-center text-lg text-gray-300">
            Meet team WRAI. Our sub-teams have been working hard preparing for the 2026 competition—here’s what they do to help secure the win.
          </p>
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

      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            SUB-TEAM PHOTOS
          </h2>
          {departments.map((dept) => {
            const images = getSubteamImages(dept.key);
            return (
              <article key={dept.key} className="bg-black border border-zinc-800 p-6 md:p-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div>{dept.icon}</div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{dept.name}</h3>
                    <p className="text-gray-400">{dept.description}</p>
                  </div>
                </div>

                {images.length > 0 ? (
                  <Carousel opts={{ loop: images.length > 1 }} className="w-full">
                    <CarouselContent>
                      {images.map((image) => (
                        <CarouselItem key={image.src}>
                          <div className="relative overflow-hidden border border-zinc-800 bg-zinc-950">
                            <div className="aspect-video w-full">
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="h-full w-full object-contain"
                              />
                            </div>
                            <span className="absolute left-4 top-4 bg-black/75 border border-zinc-700 px-3 py-1 text-xs text-gray-200">
                              {image.year}
                            </span>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    {images.length > 1 && (
                      <>
                        <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 bg-black/70 border-zinc-700 text-white hover:text-green-500" />
                        <CarouselNext className="right-3 top-1/2 -translate-y-1/2 bg-black/70 border-zinc-700 text-white hover:text-green-500" />
                      </>
                    )}
                  </Carousel>
                ) : (
                  <div className="border border-zinc-800 bg-zinc-950 p-8 text-center text-gray-400">
                    Images coming soon.
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Gallery CTA */}
      <section className="py-20 px-4">
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

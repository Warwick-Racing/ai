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
        "Designs computer vision, sensor fusion, and model pipelines for robust autonomous perception.",
      members: ["Perception Engineers", "Machine Learning Engineers", "Computer Vision Specialists"],
    },
    {
      key: "software",
      icon: <Code className="w-12 h-12 text-green-500" />,
      name: "Software",
      description:
        "Builds planning, controls, and simulation tooling that powers reliable race-day autonomy.",
      members: ["Planning Engineers", "Control Engineers", "Simulation Developers"],
    },
    {
      key: "hardware",
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      name: "Hardware",
      description:
        "Develops onboard electronics, embedded firmware, and integration infrastructure for the vehicle.",
      members: ["Embedded Engineers", "Electronics Engineers", "Systems Integration Engineers"],
    },
    {
      key: "operations",
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      name: "Team Operations",
      description:
        "Leads delivery planning, sponsorship relationships, and cross-team program coordination.",
      members: ["Program Managers", "Partnership Leads", "Operations Coordinators"],
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
                            <img
                              src={image.src}
                              alt={image.alt}
                              className="h-72 w-full object-cover md:h-96"
                            />
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

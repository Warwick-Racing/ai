import { useEffect, useState } from "react";
import { Briefcase, Brain, ChevronLeft, ChevronRight, Code, Cpu, X } from "lucide-react";

const aiCar = `${import.meta.env.BASE_URL}assets/ai-development-car.jpg`;
const formulaCar = `${import.meta.env.BASE_URL}assets/formula-student-car.jpg`;

export default function Team() {
  const departments = [
    {
      icon: <Brain className="w-12 h-12 text-green-500" />,
      name: "AI & Perception",
      description:
        "Designs computer vision, sensor fusion, and model pipelines for robust autonomous perception.",
      members: ["Perception Engineers", "Machine Learning Engineers", "Computer Vision Specialists"],
    },
    {
      icon: <Code className="w-12 h-12 text-green-500" />,
      name: "Autonomy Software",
      description:
        "Builds planning, controls, and simulation tooling that powers reliable race-day autonomy.",
      members: ["Planning Engineers", "Control Engineers", "Simulation Developers"],
    },
    {
      icon: <Cpu className="w-12 h-12 text-green-500" />,
      name: "Electronics & Embedded",
      description:
        "Develops onboard electronics, embedded firmware, and integration infrastructure for the vehicle.",
      members: ["Embedded Engineers", "Electronics Engineers", "Systems Integration Engineers"],
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      name: "Operations & Partnerships",
      description:
        "Leads delivery planning, sponsorship relationships, and cross-team program coordination.",
      members: ["Program Managers", "Partnership Leads", "Operations Coordinators"],
    },
  ];

  const teamMembers = [
    {
      name: "AI & Perception",
      roles: [
        "Perception Engineers",
        "Machine Learning Engineers",
        "Computer Vision Specialists",
        "Data Analysts",
      ],
    },
    {
      name: "Autonomy Software",
      roles: [
        "Planning Engineers",
        "Control Engineers",
        "Software Reliability Engineers",
        "Tooling Developers",
      ],
    },
    {
      name: "Electronics & Embedded",
      roles: [
        "Embedded Engineers",
        "Electronics Engineers",
        "PCB Designers",
        "Systems Integration Engineers",
      ],
    },
    {
      name: "Operations & Partnerships",
      roles: [
        "Program Managers",
        "Operations Coordinators",
        "Partnership Leads",
        "Events Coordinators",
      ],
    },
  ];

  const galleryImages = [
    {
      src: formulaCar,
      alt: "Warwick AI Racing vehicle at track test",
      caption: "Track testing and systems validation ahead of key milestones.",
    },
    {
      src: aiCar,
      alt: "AI development vehicle on campus",
      caption: "Development platform used for rapid autonomy iterations.",
    },
    {
      src: formulaCar,
      alt: "Autonomous race car profile view",
      caption: "Competition platform prepared for Formula Student AI.",
    },
    {
      src: aiCar,
      alt: "Sensor-equipped development car",
      caption: "Integrated sensor stack supporting perception and control experiments.",
    },
    {
      src: formulaCar,
      alt: "Team vehicle close-up in paddock",
      caption: "Race-day setup with final pre-run calibration checks.",
    },
    {
      src: aiCar,
      alt: "Prototype vehicle during testing",
      caption: "Prototype runs used to benchmark autonomous performance.",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const isGalleryOpen = selectedIndex !== null;

  const closeGallery = () => setSelectedIndex(null);

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }
      return (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }
      return (currentIndex + 1) % galleryImages.length;
    });
  };

  useEffect(() => {
    if (!isGalleryOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPreviousImage();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showNextImage();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isGalleryOpen]);

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

      {/* Photo Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            PHOTO GALLERY
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group text-left bg-zinc-900 border border-zinc-800 hover:border-green-500 transition-colors overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-300">{image.caption}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {isGalleryOpen && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Team photo gallery"
          onClick={closeGallery}
        >
          <div
            className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-700"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeGallery}
              className="absolute top-4 right-4 z-10 text-white hover:text-green-500 transition-colors"
              aria-label="Close gallery"
            >
              <X size={28} />
            </button>
            <button
              type="button"
              onClick={showPreviousImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 border border-zinc-700 text-white hover:text-green-500 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              type="button"
              onClick={showNextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/70 border border-zinc-700 text-white hover:text-green-500 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            <img
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="px-6 py-4 border-t border-zinc-800">
              <p className="text-gray-300">{galleryImages[selectedIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { ArrowRight, Zap, Users, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import formulaStudentRacer from "/content/gallery/2025/warwick-formula-student-racer.jpg";

// 车辆图片
const testCar = formulaStudentRacer;

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden animate-fade-in">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{
            backgroundImage: `url(${testCar})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            WARWICK RACING AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            University of Warwick's Autonomous Racing Team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/team"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 text-lg font-semibold tracking-wider transition-all duration-300 inline-flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-green-500/50"
            >
              LEARN MORE
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 text-lg font-semibold tracking-wider transition-all duration-300 inline-flex items-center justify-center hover:scale-105"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            WHAT WE DO
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="w-12 h-12 text-green-500" />}
              title="Autonomous Technology"
              description="Developing cutting-edge AI systems for autonomous vehicle navigation and decision making."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12 text-green-500" />}
              title="Student Innovation"
              description="A team of passionate students from engineering, computer science, and business backgrounds."
            />
            <FeatureCard
              icon={<Trophy className="w-12 h-12 text-green-500" />}
              title="Competitive Racing"
              description="Competing in Formula Student AI events, pushing the boundaries of autonomous racing."
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ABOUT OUR TEAM
            </h2>
            <p className="text-lg text-gray-300 mb-6">
              Warwick Racing AI is the University of Warwick's first autonomous racing team,
              dedicated to developing intelligent systems for the future of motorsport.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              We combine expertise in artificial intelligence, robotics, and engineering to create 
              vehicles that can navigate complex racing scenarios autonomously. Our team is 
              committed to innovation, learning, and pushing the boundaries of what's possible.
            </p>
            <Link
              to="/team"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 text-base font-semibold tracking-wider transition-colors inline-block"
            >
              MEET THE TEAM
            </Link>
          </div>
          <div className="relative">
            <img
              src={testCar}
              alt="Formula Student Car"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-black p-8 border border-zinc-800 hover:border-green-500 transition-colors">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

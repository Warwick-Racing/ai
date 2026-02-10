import { Cpu, Camera, Gauge, Zap } from "lucide-react";
import aiDevelopmentPlatform from "/content/gallery/2025/warwick-ai-development-platform.jpg";
import formulaStudentRacer from "/content/gallery/2025/warwick-formula-student-racer.jpg";
import PageHeader from "@/app/components/PageHeader";

// 车辆图片
const aiCar = aiDevelopmentPlatform;
const testCar = formulaStudentRacer;

export default function Cars() {
  const specs = [
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: "AI Computing",
      value: "NVIDIA Jetson",
      description: "High-performance edge AI computing platform",
    },
    {
      icon: <Camera className="w-8 h-8 text-green-500" />,
      title: "Sensors",
      value: "LiDAR + Cameras",
      description: "Advanced perception system for environment mapping",
    },
    {
      icon: <Gauge className="w-8 h-8 text-green-500" />,
      title: "Performance",
      value: "0-60 in 3.5s",
      description: "Optimized for autonomous racing dynamics",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Power System",
      value: "Electric Drivetrain",
      description: "Efficient and responsive power delivery",
    },
  ];

  const features = [
    "Autonomous navigation and path planning",
    "Real-time object detection and tracking",
    "Dynamic obstacle avoidance",
    "Optimal racing line calculation",
    "Adaptive speed control",
    "Emergency failsafe systems",
  ];

  return (
    <div className="pt-20">
      <PageHeader
        title="Our Vehicles"
        description="State-of-the-art autonomous racing platforms designed and built by our team"
        containerClassName="max-w-7xl"
      />

      {/* AI Development Car */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                AI DEVELOPMENT PLATFORM
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our AI development car serves as a testbed for autonomous driving algorithms 
                and sensor integration. This platform allows us to rapidly prototype and 
                validate our AI systems in a controlled environment.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Equipped with advanced sensors including LiDAR, cameras, and IMUs, this 
                vehicle helps us refine our perception and decision-making systems before 
                deployment on the competition car.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  SENSOR FUSION
                </span>
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  AI TESTING
                </span>
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  AUTONOMOUS CONTROL
                </span>
              </div>
            </div>
            <div className="relative">
              <img
                src={aiCar}
                alt="AI Development Car"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Formula Student Car */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src={testCar}
                alt="Formula Student Car"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                FORMULA STUDENT RACER
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Our competition vehicle represents the pinnacle of student engineering and 
                innovation. Built from the ground up, this car combines cutting-edge 
                autonomous technology with high-performance engineering.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Designed to compete in Formula Student AI events, our racer pushes the 
                boundaries of autonomous racing with advanced AI algorithms, optimized 
                aerodynamics, and lightweight construction.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  COMPETITION READY
                </span>
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  AUTONOMOUS RACING
                </span>
                <span className="px-4 py-2 bg-zinc-800 border border-green-500 text-sm">
                  HIGH PERFORMANCE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            TECHNICAL SPECIFICATIONS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specs.map((spec, index) => (
              <div key={index} className="bg-black p-6 border border-zinc-800">
                <div className="mb-4">{spec.icon}</div>
                <h3 className="text-sm text-gray-400 mb-2">{spec.title}</h3>
                <p className="text-xl font-bold mb-2">{spec.value}</p>
                <p className="text-sm text-gray-400">{spec.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            AUTONOMOUS FEATURES
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-zinc-900 border border-zinc-800"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

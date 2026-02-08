import { Mail, MapPin, Phone, Users, Briefcase, Heart } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // 模拟表单提交
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // 3秒后清除成功消息
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: "Email",
      value: "wrai@somewebsite.co.uk",
      description: "Get in touch with our team",
    },
    {
      icon: <MapPin className="w-6 h-6 text-green-500" />,
      title: "Location",
      value: "University of Warwick",
      description: "Coventry, CV4 7AL, UK",
    },
    {
      icon: <Phone className="w-6 h-6 text-green-500" />,
      title: "Social Media",
      value: "LinkedIn",
      description: "Follow us on LinkedIn",
      link: "https://www.linkedin.com/company/warwick-racing-ai/",
    },
  ];

  const opportunities = [
    {
      icon: <Users className="w-12 h-12 text-green-500" />,
      title: "Join the Team",
      description: "We're always looking for passionate students to join us. Whether you're an engineer, programmer, or business student, we have a place for you.",
      action: "Apply Now",
    },
    {
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      title: "Become a Sponsor",
      description: "Help us push the boundaries of autonomous racing technology. We offer various sponsorship packages with excellent visibility and collaboration opportunities.",
      action: "View Packages",
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Support Us",
      description: "Support our team through donations, equipment, or expertise. Every contribution helps us achieve our goals.",
      action: "Learn More",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            GET IN TOUCH
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to collaborate? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            CONTACT INFORMATION
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 text-center border border-zinc-800 hover:border-green-500 transition-colors"
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                {info.link ? (
                  <a 
                    href={info.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xl font-bold mb-2 text-green-500 hover:underline block"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-xl font-bold mb-2">{info.value}</p>
                )}
                <p className="text-sm text-gray-400">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            SEND US A MESSAGE
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Fill out the form below and we'll get back to you as soon as possible
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            {submitStatus === "success" && (
              <div className="bg-green-500/20 border border-green-500 text-green-500 px-4 py-3 rounded">
                消息已成功发送！我们会尽快回复您。
              </div>
            )}
            {submitStatus === "error" && (
              <div className="bg-red-500/20 border border-red-500 text-red-500 px-4 py-3 rounded">
                发送失败，请稍后重试。
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition-colors text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition-colors text-white"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition-colors text-white"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-black border border-zinc-800 focus:border-green-500 focus:outline-none transition-colors resize-none text-white"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-500 hover:bg-green-600 disabled:bg-green-500/50 disabled:cursor-not-allowed text-black px-8 py-4 text-lg font-semibold tracking-wider transition-colors"
            >
              {isSubmitting ? "发送中..." : "SEND MESSAGE"}
            </button>
          </form>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            GET INVOLVED
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {opportunities.map((opp, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 border border-zinc-800 text-center"
              >
                <div className="flex justify-center mb-6">{opp.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
                <p className="text-gray-400 mb-6">{opp.description}</p>
                <button className="border-2 border-green-500 hover:bg-green-500 hover:text-black text-green-500 px-6 py-3 font-semibold tracking-wider transition-colors">
                  {opp.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

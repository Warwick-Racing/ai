import { Briefcase, Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-green-500" />,
      title: "Email",
      value: "wrai@somewebsite.co.uk",
      description: "Reach the core team directly",
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
      description: "Follow project updates and milestones",
      link: "https://www.linkedin.com/company/warwick-racing-ai/",
    },
  ];

  const opportunities = [
    {
      icon: <Briefcase className="w-12 h-12 text-green-500" />,
      title: "Become a Sponsor",
      description:
        "Support autonomous racing research through sponsorship packages and technical collaboration.",
      action: "SPONSORSHIP ENQUIRY",
      href: "mailto:wrai@somewebsite.co.uk?subject=Sponsorship%20Enquiry",
    },
    {
      icon: <Heart className="w-12 h-12 text-green-500" />,
      title: "Support the Project",
      description:
        "Contribute equipment, mentoring, or domain expertise to accelerate testing and delivery.",
      action: "PARTNERSHIP ENQUIRY",
      href: "mailto:wrai@somewebsite.co.uk?subject=Partnership%20Enquiry",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">GET IN TOUCH</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have questions or want to collaborate? We&apos;d love to hear from you.
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

      {/* Static Contact CTA */}
      <section className="py-20 px-4 bg-zinc-900">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">CONTACT THE TEAM</h2>
          <p className="text-gray-300 mb-10 text-lg">
            For collaboration, media, and external partnership enquiries, reach us directly by
            email or LinkedIn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:wrai@somewebsite.co.uk"
              className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 text-base font-semibold tracking-wider transition-colors"
            >
              EMAIL US
            </a>
            <a
              href="https://www.linkedin.com/company/warwick-racing-ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-green-500 hover:bg-green-500 hover:text-black text-green-500 px-8 py-4 text-base font-semibold tracking-wider transition-colors"
            >
              VISIT LINKEDIN
            </a>
          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">GET INVOLVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opp, index) => (
              <div key={index} className="bg-zinc-900 p-8 border border-zinc-800 text-center">
                <div className="flex justify-center mb-6">{opp.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{opp.title}</h3>
                <p className="text-gray-400 mb-6">{opp.description}</p>
                <a
                  href={opp.href}
                  className="inline-block border-2 border-green-500 hover:bg-green-500 hover:text-black text-green-500 px-6 py-3 font-semibold tracking-wider transition-colors"
                >
                  {opp.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

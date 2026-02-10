import { Link } from "react-router-dom";
import { Mail, MapPin, Instagram, Linkedin, Twitter } from "lucide-react";

// Logo图片
const logoGreenSvg = `${import.meta.env.BASE_URL}assets/logo-green.svg`;

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="h-12 flex items-center mb-4 px-2">
              <img 
                src={logoGreenSvg} 
                alt="Warwick Racing AI" 
                className="h-full w-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px] object-contain object-left"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
            <p className="text-gray-400 mb-4">
              University of Warwick's autonomous racing team, pushing the boundaries 
              of AI and engineering in motorsport.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/warwickracingai?igsh=Zno4dmgxbmhremsy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/warwick-racing-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-green-500 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-400 hover:text-green-500 transition-colors">
                  Cars
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-green-500 transition-colors">
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-green-500 transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/sponsorship" className="text-gray-400 hover:text-green-500 transition-colors">
                  Sponsorship
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-400">
                <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">wrai@somewebsite.co.uk</span>
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm">
                  University of Warwick<br />
                  Coventry, CV4 7AL, UK
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 Warwick Racing AI. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

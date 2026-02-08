import { Link, useLocation } from "react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Logo图片
const logoGreen = "/assets/logo-green.svg";

export default function Navigation() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/team", label: "OUR TEAM" },
    { path: "/cars", label: "CARS" },
    { path: "/events", label: "EVENTS" },
    { path: "/contact", label: "CONTACT US" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity pl-4 md:pl-6 lg:pl-8">
            <div className="h-12 flex items-center">
              <img 
                src={logoGreen} 
                alt="Warwick AI Racing" 
                className="h-full w-auto max-w-[200px] md:max-w-[250px] lg:max-w-[300px] object-contain object-left"
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 pr-4 md:pr-6 lg:pr-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-semibold tracking-wider transition-colors hover:text-green-500 ${
                  location.pathname === item.path ? "text-green-500" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <button className="bg-green-500 hover:bg-green-600 text-black px-6 py-2 text-sm font-semibold tracking-wider transition-colors">
              JOIN US
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 text-sm font-semibold tracking-wider transition-colors hover:text-green-500 ${
                  location.pathname === item.path ? "text-green-500" : "text-white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-black px-6 py-2 text-sm font-semibold tracking-wider transition-colors">
              JOIN US
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
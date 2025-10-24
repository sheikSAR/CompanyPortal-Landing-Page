import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "For Companies", href: "#" },
    { label: "For Job Seekers", href: "#" },
    { label: "Features", href: "#" },
    { label: "Stories", href: "#" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg h-16 py-2"
          : "bg-white/70 backdrop-blur-xl border-b border-slate-200 h-20 py-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759233080/BroskiesHub_Incubated_Logo_bwrago.png"
            alt="BroskiesHub Logo"
            className={`object-contain transition-all duration-300 ${
              scrolled ? "h-8 w-auto" : "h-10 w-auto"
            }`}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-700 font-medium hover:text-[#2626e7] transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#2626e7] to-[#4b4bff] group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Desktop CTA Button */}
        <Button
          variant="cta"
          size="sm"
          onClick={() =>
            window.open(
              "https://hire.broskieshub.com/",
              "_blank",
              "noopener,noreferrer",
            )
          }
          className={`hidden lg:inline-flex px-6 py-2 text-sm rounded-lg btn-premium cta-pulse ${
            scrolled ? "py-1.5" : "py-2"
          }`}
        >
          Start a Pilot
        </Button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-700 hover:text-[#2626e7] transition-colors"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block text-slate-700 font-medium hover:text-[#2626e7] transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="cta"
            className="w-full mt-4 rounded-lg btn-premium cta-pulse"
            onClick={() => {
              window.open(
                "https://hire.broskieshub.com/",
                "_blank",
                "noopener,noreferrer",
              );
              setMobileMenuOpen(false);
            }}
          >
            Start a Pilot
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

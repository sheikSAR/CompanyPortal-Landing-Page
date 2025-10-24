import React from "react";
import { Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-8">
          {/* Logo and Tagline */}
          <div className="flex-1">
            <a href="/" className="flex items-center gap-3 mb-3">
              <img
                src="https://res.cloudinary.com/dk2wudmxh/image/upload/v1759233080/BroskiesHub_Incubated_Logo_bwrago.png"
                alt="BroskiesHub Logo"
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="text-gray-600 font-medium text-sm">
              Hiring engineers who actually deliver.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                Email:{" "}
                <a
                  href="mailto:support@broskieshub.com"
                  className="hover:text-[#2626e7] transition-colors"
                >
                  support@broskieshub.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+918148040507"
                  className="hover:text-[#2626e7] transition-colors"
                >
                  +91 8148040507
                </a>
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">
              Follow
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-[#2626e7] hover:text-white transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center hover:bg-[#2626e7] hover:text-white transition-all duration-300"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 pt-6 text-center text-sm text-gray-600">
          <p>
            © {currentYear} BroskiesHub. All rights reserved. | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

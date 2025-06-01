import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGlobe } from "react-icons/fa";
import logo from "../assets/WhatsApp_Image_2025-05-30_at_18.21.33_26b5dc10-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-900 text-gray-300 px-6 pt-12 pb-8 rounded-t-3xl shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="StartupConnect Logo" className="h-16 w-auto mb-4" />
          <p className="text-sm text-gray-400">
            Empowering entrepreneurs to connect, collaborate, and grow. Join the revolution and build your dream startup.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "Find Investors", "Communities", "Premium Plans"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
          <ul className="space-y-3 text-sm">
            {["Blog", "Help Center", "Contact Us", "Privacy Policy"].map((item, idx) => (
              <li key={idx}>
                <a href="#" className="hover:text-yellow-400 transition duration-300">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
          <div className="flex space-x-4 text-xl">
            <a
              href="#"
              className="text-blue-400 hover:text-white transition transform hover:scale-110"
              aria-label="Website"
            >
              <FaGlobe />
            </a>
            <a
              href="#"
              className="text-sky-400 hover:text-white transition transform hover:scale-110"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-blue-600 hover:text-white transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-white transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <p className="mt-4 text-xs text-gray-500">Let’s connect on social media!</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-center text-gray-500">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white font-medium">StartupConnect</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

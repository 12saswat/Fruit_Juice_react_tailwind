import React from "react";
import logo from "../Images/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="bg-[#ff9393bb] text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-center text-center md:text-left">
        <div>
          <h2 className="font-bold text-lg mb-3">Explore</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Section 2 - Logo */}
        <div className="flex justify-">
          <img
            src={logo}
            alt="Fruit Juice Logo"
            className="w-[300px] h-[200px] pr-[90px]"
          />
        </div>

        {/* Section 3 - Links */}
        <div>
          <h2 className="font-bold text-lg mb-3">Company</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4 - Contact Info */}
        <div>
          <h2 className="font-bold text-lg mb-3">Contact Us</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 123 Fresh Street, Juicy City, India</li>
            <li>📧 fruitjuice@example.com</li>
            <li>📞 +91 98765 43210</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-white/80">
        &copy; {new Date().getFullYear()} Fruit Juice Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

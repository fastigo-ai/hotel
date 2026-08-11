import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo13.png";

export default function Footer() {
  return (
    <footer className="bg-[#4BA9A2] text-black pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Logo & Links */}
        <div>
          <Link to="/" className="inline-block mb-6">
            <img src={Logo} alt="Plains Motor Inn Logo" className="h-10 w-auto object-contain" />
          </Link>
          <ul className="space-y-4">
            <li><Link to="/about" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">About</Link></li>
            <li><Link to="/contact" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Contact</Link></li>
            <li><Link to="/hotel-card" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Rooms & Rates</Link></li>
          </ul>
        </div>

        {/* Column 2: Explore */}
        <div>
          <h3 className="font-bold text-black text-lg mb-6">Explore</h3>
          <ul className="space-y-4">
            <li><a href="https://www.stettler.net" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Town of Stettler</a></li>
            <li><Link to="/hotel-card" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Rooms</Link></li>
            <li><Link to="/gallery" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Gallery</Link></li>
          </ul>
        </div>

        {/* Column 3: Policies */}
        <div>
          <h3 className="font-bold text-black text-lg mb-6">Policies</h3>
          <ul className="space-y-4">
            <li><Link to="/privacy-policy" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Privacy Policy</Link></li>
            <li><Link to="/terms" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Terms & Conditions</Link></li>
            <li><Link to="/cookies" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Cookies</Link></li>
          </ul>
        </div>

        {/* Column 4: Help */}
        <div>
          <h3 className="font-bold text-black text-lg mb-6">Help</h3>
          <ul className="space-y-4">
            <li><Link to="/contact" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Support</Link></li>
            <li><Link to="/accessibility" className="text-[13px] font-medium text-black/90 hover:text-black hover:underline">Accessibility</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

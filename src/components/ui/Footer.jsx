// src/Footer.js

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-7xl">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Plains Motor Inn</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/about" className="text-blue-600">About</Link></li>
            <li><Link to="/Careers" className="text-blue-600">Jobs</Link></li>
            <li><Link to="#" className="text-blue-600">List your property</Link></li>
            <li><Link to="/Partner" className="text-blue-600">Partnerships</Link></li>
            <li><Link to="/news" className="text-blue-600">Newsroom</Link></li>
            <li><Link to="#" className="text-blue-600">Investor Relations</Link></li>
            <li><Link to="/advertise" className="text-blue-600">Advertising</Link></li>
            <li><Link to="/affiliate" className="text-blue-600">Affiliate Marketing</Link></li>
            <li><Link to="#" className="text-blue-600">Feedback</Link></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Explore</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/travelGuide" className="text-blue-600">Canada Travel Guide</Link></li>
            <li><Link to="/MotelsInCanada" className="text-blue-600">Motels in Canada</Link></li>
            <li><Link to="/vacationRentals" className="text-blue-600">Vacation Rentals in Canada</Link></li>
            <li><Link to="/comparisonTable" className="text-blue-600">Vacation packages in Canada</Link></li>
            <li><Link to="#" className="text-blue-600">Domestic flights</Link></li>
            <li><Link to="#" className="text-blue-600">Car rentals in United States of America</Link></li>
            <li><Link to="#" className="text-blue-600">All accommodation types</Link></li>
            <li><Link to="#" className="text-blue-600">One Key credit cards</Link></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Policies</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="/privacy-policy" className="text-blue-600">Privacy</Link></li>
            <li><Link to="#" className="text-blue-600">Cookies</Link></li>
            <li><Link to="" className="text-blue-600">Terms of use</Link></li>
            <li><Link to="/terms" className="text-blue-600">Terms and conditions</Link></li>
            <li><Link to="#" className="text-blue-600">Vrbo terms and conditions</Link></li>
            <li><Link to="#" className="text-blue-600">Accessibility</Link></li>
            <li><Link to="#" className="text-blue-600">Your privacy choices</Link></li>
            <li><Link to="#" className="text-blue-600">Content guidelines and reporting content</Link></li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Help</h4>
          <ul className="mt-4 space-y-2">
            <li><Link to="#" className="text-blue-600">Support</Link></li>
            <li><Link to="#" className="text-blue-600">Cancel your hotel or vacation rental booking</Link></li>
            <li><Link to="#" className="text-blue-600">Cancel your flight</Link></li>
            <li><Link to="/refund-policy" className="text-blue-600">Refund basics</Link></li>
            <li><Link to="#" className="text-blue-600">Use an Expedia coupon</Link></li>
            <li><Link to="#" className="text-blue-600">International travel documents</Link></li>
            <li><Link to="#" className="text-blue-600">Your rights as a flights traveler</Link></li>
          </ul>
        </div>
      </div>

     
    </footer>
  );
};

export default Footer;

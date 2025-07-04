// src/Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50  ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-7xl">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Plains Motor Inn</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-blue-600">About</a></li>
            <li><a href="#" className="text-blue-600">Jobs</a></li>
            <li><a href="#" className="text-blue-600">List your property</a></li>
            <li><a href="#" className="text-blue-600">Partnerships</a></li>
            <li><a href="#" className="text-blue-600">Newsroom</a></li>
            <li><a href="#" className="text-blue-600">Investor Relations</a></li>
            <li><a href="#" className="text-blue-600">Advertising</a></li>
            <li><a href="#" className="text-blue-600">Affiliate Marketing</a></li>
            <li><a href="#" className="text-blue-600">Feedback</a></li>
          </ul>
        </div>
        
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Explore</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-blue-600">United States of America travel guide</a></li>
            <li><a href="#" className="text-blue-600">Hotels in United States of America</a></li>
            <li><a href="#" className="text-blue-600">Vacation rentals in United States of America</a></li>
            <li><a href="#" className="text-blue-600">Vacation packages in United States of America</a></li>
            <li><a href="#" className="text-blue-600">Domestic flights</a></li>
            <li><a href="#" className="text-blue-600">Car rentals in United States of America</a></li>
            <li><a href="#" className="text-blue-600">All accommodation types</a></li>
            <li><a href="#" className="text-blue-600">One Key credit cards</a></li>
          </ul>
        </div>
        
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Policies</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-blue-600">Privacy</a></li>
            <li><a href="#" className="text-blue-600">Cookies</a></li>
            <li><a href="#" className="text-blue-600">Terms of use</a></li>
            <li><a href="#" className="text-blue-600">One Key™ terms and conditions</a></li>
            <li><a href="#" className="text-blue-600">Vrbo terms and conditions</a></li>
            <li><a href="#" className="text-blue-600">Accessibility</a></li>
            <li><a href="#" className="text-blue-600">Your privacy choices</a></li>
            <li><a href="#" className="text-blue-600">Content guidelines and reporting content</a></li>
          </ul>
        </div>
        
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Help</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-blue-600">Support</a></li>
            <li><a href="#" className="text-blue-600">Cancel your hotel or vacation rental booking</a></li>
            <li><a href="#" className="text-blue-600">Cancel your flight</a></li>
            <li><a href="#" className="text-blue-600">Refund basics</a></li>
            <li><a href="#" className="text-blue-600">Use an Expedia coupon</a></li>
            <li><a href="#" className="text-blue-600">International travel documents</a></li>
            <li><a href="#" className="text-blue-600">Your rights as a flights traveler</a></li>
          </ul>
        </div>
      </div>
      
      {/* <div className="text-center py-4 border-t mt-10">
        <p className="text-sm text-gray-600">© 2025 Plains, Inc., an Expedia Group company. All rights reserved. Expedia and the Expedia Logo are trademarks or registered trademarks of Expedia, Inc. CST# 2029030-50.</p>
      </div> */}
    </footer>
  );
};

export default Footer;
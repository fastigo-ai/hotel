// src/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 max-w-7xl pb-10">
        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">
            <span className="Text">P</span>lains{" "}
            <span className="Text-M">M</span>otors{" "}
            <span className="Text-o">I</span>NN
          </h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/about" className="text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/Careers" className="text-blue-600">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/Partner" className="text-blue-600">
                Partnerships
              </Link>
            </li>
            <li>
              <Link to="/news" className="text-blue-600">
                Newsroom
              </Link>
            </li>
            <li>
              <Link to="/advertise" className="text-blue-600">
                Advertising
              </Link>
            </li>
            <li>
              <Link to="/affiliate" className="text-blue-600">
                Affiliate Marketing
              </Link>
            </li>
            <li>
              <Link to="/feedback" className="text-blue-600">
                Feedback
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Explore</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <a
                href="https://www.stettler.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                Town of Stettler
              </a>
            </li>

            <li>
              <Link to="/travelGuide" className="text-blue-600">
                Canada Travel Guide
              </Link>
            </li>
            <li>
              <Link to="/MotelsInCanada" className="text-blue-600">
                Motels in Canada
              </Link>
            </li>
            <li>
              <Link to="/vacationRentals" className="text-blue-600">
                Vacation Rentals in Canada
              </Link>
            </li>
            <li>
              <Link to="/comparisonTable" className="text-blue-600">
                Vacation packages in Canada
              </Link>
            </li>
            <li>
              <Link to="/domestic-Flights-Guide" className="text-blue-600">
                Domestic flights
              </Link>
            </li>
            <li>
              <Link to="/car-rentalGuide" className="text-blue-600">
                Car rentals in Canada
              </Link>
            </li>
            <li>
              <Link to="/accommodationGuide" className="text-blue-600">
                All accommodation types
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Policies</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/privacy-policy" className="text-blue-600">
                Privacy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="text-blue-600">
                Cookies
              </Link>
            </li>

            <li>
              <Link to="/terms" className="text-blue-600">
                Plains & Motors terms and conditions
              </Link>
            </li>
            <li>
              <Link to="/accessibility" className="text-blue-600">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-6 md:mb-0">
          <h4 className="text-xl font-semibold text-blue-700">Help</h4>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/contact" className="text-blue-600">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="text-blue-600">
                Refund basics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

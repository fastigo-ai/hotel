import React from 'react';
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto, resized)
const Image = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_800,h_600,c_fill/v1781092854/hotel_assets/card%20Image/no1.png";
const QR = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1781092887/hotel_assets/logo/qrcode.png";
import '../../App.css'
const FutherBanner = () => {
  return (
    <div className="flex flex-col md:flex-row p-6 bg-white rounded-lg  max-w-7xl mx-auto">
      {/* Image Section */}
      <div className="w-full md:w-1/2">
        <img
          src={Image}
          alt="Travel Destination"
          className="w-full h-64 md:h-full object-cover rounded-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">Go further with the <span className="Text">P</span>lains <span className="Text-M">M</span>otors <span className="Text-o">I</span>NN</h2>
        <p className="text-gray-700 mb-4">
          Our Website deals help you to save on trips so you can travel more and manage it all on the go.
        </p>
        <p className="text-gray-700 mb-4">
          Scan the QR code with your device camera to Visit Our Website.
        </p>
        <div className="flex justify-start">
          <img
            src={QR}
            alt="QR Code"
            className="w-28 h-28 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FutherBanner;

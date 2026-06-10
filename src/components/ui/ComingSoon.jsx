import React from "react";
import { useNavigate } from "react-router-dom";
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto, w_200)
const Logo = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_200/v1781092878/hotel_assets/logo/Logo13.png";

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-100 text-black px-4 py-8">
      {/* Logo */}
      <div className="mb-6">
        <img src={Logo} alt="Logo" className="w-40 md:w-52 mx-auto" />
      </div>

      {/* Content */}
      <div className="text-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-pulse">
          🚧 Coming Soon
        </h1>
        <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto">
          We're working hard to bring something amazing. Stay tuned!
        </p>

        {/* Back Button */}
        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="bg-white text-indigo-700 px-6 py-2 rounded-md font-semibold hover:bg-gray-400 transition cursor-pointer"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

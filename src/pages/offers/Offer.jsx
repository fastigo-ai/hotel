import React from "react";
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto, resized)
const Image1 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1781092893/hotel_assets/offer/1.jpg";
const Image2 = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_150,h_150,c_fill/v1781092894/hotel_assets/offer/2.jpg";
import { useNavigate } from "react-router-dom";

const Offers = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const isSignedIn = localStorage.getItem("user"); // or "token"
    if (isSignedIn) {
      navigate("/");
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Offers</h2>
      <p className="text-gray-600 mb-6">Promotions, deals and special offers for you</p>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {/* Offer Card 1 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl shadow-md border p-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Sign in, save money</h3>
            <p className="text-sm text-gray-600 mb-4">
              Save 10% or more at participating properties. Just look for the blue Genius label.
            </p>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleClick}
                className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition"
              >
                Sign in
              </button>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
            <img
              src={Image1}
              alt="Genius Gift"
              className="w-24 h-24 object-contain"
            />
          </div>
        </div>

        {/* Offer Card 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-xl shadow-md border p-6">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Quick escape, quality time</h3>
            <p className="text-sm text-gray-600 mb-4">
              Save up to 20% with a Getaway Deal
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition">
              Save on stays
            </button>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
            <img
              src={Image2}
              alt="Quick Escape"
              className="w-24 h-24 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;

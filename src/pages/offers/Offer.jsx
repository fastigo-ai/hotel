import React from "react";
import Image1 from '../../assets/offer/1.jpeg'
import Image2 from '../../assets/offer/2.jpeg'
import { useNavigate } from "react-router-dom";

const Offers = () => {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/login")
    }
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-2">Offers</h2>
      <p className="text-gray-600 mb-6">Promotions, deals and special offers for you</p>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Offer Card 1 */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow-md border p-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Sign in, save money</h3>
            <p className="text-sm text-gray-600 mb-4">
              Save 10% or more at participating properties. Just look for the blue Genius label.
            </p>
            <div className="flex space-x-3">
              <button className="bg-blue-600 text-white px-4 py-2 text-sm rounded hover:bg-blue-700 transition cursor-pointer" onClick={handleClick}>Sign in</button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 text-sm rounded hover:bg-blue-50 transition cursor-pointer" onClick={handleClick}>Register</button>
            </div>
          </div>
          <img
            src={Image1} // replace with your actual Genius gift image
            alt="Genius Gift"
            className="w-24 h-24 object-contain ml-4"
          />
        </div>

        {/* Offer Card 2 */}
        <div className="flex items-center justify-between bg-white rounded-xl shadow-md border p-6">
          <div>
            <h3 className="text-lg font-semibold mb-1">Quick escape, quality time</h3>
            <p className="text-sm text-gray-600 mb-4">
              Save up to 20% with a Getaway Deal
            </p>
            <button className="bg-blue-600 text-white cursor-pointer px-4 py-2 text-sm rounded hover:bg-blue-700 transition">
              Save on stays
            </button>
          </div>
          <img
            src={Image2} // replace with your actual getaway image
            alt="Quick Escape"
            className="w-24 h-24 object-cover rounded-lg ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Offers;

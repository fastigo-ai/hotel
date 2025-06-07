import React from "react";
import { useLocation } from "react-router-dom";

const Confirm = () => {
  const { state } = useLocation();
  const { property, checkIn, checkOut, guests } = state || {};

  if (!property) {
    return <div className="p-4">Booking data not available.</div>;
  }

  const nights = checkIn && checkOut ? Math.max(
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
    1
  ) : 1;

  const total = property.price * nights + 800; // Assume ₹800 tax

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row gap-10">
      {/* Left */}
      <div className="md:w-2/3 space-y-6">
        <h1 className="text-2xl font-semibold">Confirm and pay</h1>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-lg font-semibold">Your trip</h2>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium">Dates</p>
              <p className="text-sm text-gray-700">{checkIn} – {checkOut}</p>
            </div>
            <button className="text-sm text-blue-700 font-medium">Edit</button>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-sm font-medium">Guests</p>
              <p className="text-sm text-gray-700">{guests} guests</p>
            </div>
            <button className="text-sm text-blue-700 font-medium">Edit</button>
          </div>
        </div>

        <button className="w-full mt-4 bg-pink-600 text-white py-3 rounded-lg font-medium hover:bg-pink-700 transition">
          Continue
        </button>
      </div>

      {/* Right */}
      <div className="md:w-1/3">
        <div className="border rounded-xl shadow-lg p-5 space-y-4">
          <div className="flex gap-4">
            <img
              src={property.images[0]}
              alt="Property"
              className="w-24 h-24 rounded-lg object-cover"
            />
            <div>
              <h3 className="text-base font-semibold">{property.title}</h3>
              <p className="text-sm text-gray-600">Entire rental unit</p>
              <p className="text-sm text-gray-800 font-semibold">
                ★ {property.rating}{" "}
                <span className="text-gray-600">({property.reviews} reviews)</span>
              </p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <h4 className="text-lg font-semibold">Your total</h4>
            <div className="flex justify-between text-sm">
              <p>₹{property.price} × {nights} nights</p>
              <p>₹{property.price * nights}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Taxes</p>
              <p>₹800</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <p>Total (INR)</p>
              <p>₹{total}</p>
            </div>
            <a href="#" className="text-sm underline text-gray-700 font-medium">
              Price breakdown
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;

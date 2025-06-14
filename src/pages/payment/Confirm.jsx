import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
const { property, checkIn, checkOut, guests } = useLocation().state || {};

  const handleClick = () => {
    navigate("/login");
  };

  if (!property) {
    return <div className="p-4">Booking data not available.</div>;
  }

  const nights =
    checkIn && checkOut
      ? Math.max(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
          1
        )
      : 1;

  const total = property.price * nights + 49; // ₹800 tax

  return (
    <div className="container mx-auto max-w-7xl px-4 md:px-8 py-10 flex flex-col md:flex-row gap-10 font-sora">
      {/* Left Side - Details */}
      <div className="md:w-2/3 space-y-6">
        <h1 className="text-2xl font-semibold">Confirm and Pay</h1>

        <div className="border-t pt-6 space-y-6">
          {/* Trip Info */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Your trip</h2>
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium">Dates</p>
                <p className="text-sm text-gray-700">
                  {checkIn} – {checkOut}
                </p>
              </div>
              <button className="text-sm text-blue-700 font-medium">Edit</button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm font-medium">Guests</p>
                <p className="text-sm text-gray-700">{guests} guest{guests > 1 ? "s" : ""}</p>
              </div>
              <button className="text-sm text-blue-700 font-medium">Edit</button>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <button
            className="w-full text-center text-xl font-semibold py-3 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition"
            onClick={handleClick}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Right Side - Price Summary */}
      <div className="md:w-1/3">
        <div className="border rounded-xl shadow-lg p-5 space-y-4 bg-white">
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
                <span className="text-gray-600">
                  ({property.reviews} reviews)
                </span>
              </p>
            </div>
          </div>

          <div className="border-t pt-4 space-y-2">
            <h4 className="text-lg font-semibold">Your total</h4>
            <div className="flex justify-between text-sm">
              <p>$ {property.price} × {nights} night{nights > 1 ? "s" : ""}</p>
              <p>$ {property.price * nights}</p>
            </div>
            <div className="flex justify-between text-sm">
              <p>Taxes</p>
              <p>$ 49</p>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold text-base">
              <p>Total (INR)</p>
              <p>$ {total}</p>
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

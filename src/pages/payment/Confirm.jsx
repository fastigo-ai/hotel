import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CancellationAndInfo from "../terms and setting/CancellationAndInfo ";
import { useSelector } from "react-redux";

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { property, checkIn, checkOut, guests } = state || {};
  const user = useSelector((state)=>state.auth.user)
  console.log(user,"show user detail");
  console.log(property);
  console.log(checkIn);
  console.log(checkOut);
  console.log(guests);
  

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const subtotal = property.price * nights;
  const tax = subtotal * 0.05;
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    propertyId: property._id,
    userId: user?.user?._id || null,
    checkInDate: checkIn,
    checkOutDate: checkOut,
    totalStay: nights,
    totalAmount: total.toFixed(2),
    currency: "cad",
    specialRequest: "",
    user: {
      firstname: "",
      lastname: "",
      phone: "",
    },
    guests: guests || {
      adults: 1,
      children: 0,
      infants: 0,
      pets: 0,
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      

      const response = await fetch(
        "https://starfish-app-6yhui.ondigitalocean.app/api/payments/create-checkout-session",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to create checkout session");
      }

      window.location.href = data.url;
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto max-w-7xl px-4 md:px-8 py-10 flex flex-col md:flex-row gap-10 font-sora">
        {/* FORM SECTION */}
        <form
          onSubmit={handleSubmit}
          className="md:w-2/3 bg-white p-6 rounded-lg shadow space-y-6"
        >
          <h2 className="text-2xl font-bold">Guest Details</h2>

          {/* Name */}
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={formData.user.firstname}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  user: { ...prev.user, firstname: e.target.value },
                }))
              }
              required
              className="flex-1 px-4 py-3 border rounded"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={formData.user.lastname}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  user: { ...prev.user, lastname: e.target.value },
                }))
              }
              required
              className="flex-1 px-4 py-3 border rounded"
            />
          </div>

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.user.phone}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                user: { ...prev.user, phone: e.target.value },
              }))
            }
            required
            className="w-full px-4 py-3 border rounded"
          />

          {/* Special Request */}
          <textarea
            placeholder="Special requests (optional)"
            value={formData.specialRequest}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                specialRequest: e.target.value,
              }))
            }
            className="w-full px-4 py-3 border rounded min-h-[100px]"
          />

          {/* Guests */}
          <div className="grid grid-cols-2 gap-4">
            {["adults", "children", "infants", "pets"].map((type) => (
              <div key={type}>
                <label className="block text-sm font-medium capitalize mb-1">
                  {type}
                </label>
                <input
                  type="number"
                  min="0"
                  value={formData.guests[type]}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      guests: {
                        ...prev.guests,
                        [type]: parseInt(e.target.value),
                      },
                    }))
                  }
                  className="w-full px-3 py-2 border rounded"
                />
              </div>
            ))}
          </div>

          {/* Error */}
          {error && <p className="text-red-500 text-sm">{error}</p>}

          {/* Pay Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded text-white font-bold bg-indigo-600 hover:bg-indigo-700"
          >
            {loading ? "Processing..." : `Pay ${total.toFixed(2)} CAD`}
          </button>
        </form>

        {/* SIDEBAR */}
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
                <p>
                  {property.price} CAD × {nights} night{nights > 1 ? "s" : ""}
                </p>
                <p>{subtotal.toFixed(2)} CAD</p>
              </div>
              <div className="flex justify-between text-sm">
                <p>Taxes</p>
                <p>{tax.toFixed(2)} CAD</p>
              </div>
              <div className="border-t pt-2 flex justify-between font-semibold text-base">
                <p>Total</p>
                <p>{total.toFixed(2)} CAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CancellationAndInfo />
    </>
  );
};

export default Confirm;

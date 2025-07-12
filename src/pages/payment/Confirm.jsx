import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CancellationAndInfo from "../terms and setting/CancellationAndInfo ";
import { useSelector } from "react-redux";

const Confirm = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { property, checkIn, checkOut, guests } = state || {};
  const user = JSON.parse(localStorage.getItem("user"));

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-xl shadow-lg text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Booking Data Not Available</h2>
          <p className="text-gray-600 mb-4">We couldn't find your booking information. Please try again.</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const nights =
    checkIn && checkOut
      ? Math.max(
          (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24),
          1
        )
      : 1;

  const subtotal = Math.floor(property.price * nights);
  const tax = Math.floor(subtotal * 0.05);
  const total = subtotal + tax;

  const [formData, setFormData] = useState({
    propertyId: property._id,
    userId: user?.user?.id || null,
    checkInDate: checkIn,
    checkOutDate: checkOut,
    totalStay: nights,
    totalAmount: total.toString(),
    currency: "cad",
    specialRequest: "",
    user: {
      firstname: "",
      lastname: "",
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span>Booking</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-indigo-600 font-medium">Confirm & Pay</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Confirm and pay</h1>
          <p className="text-gray-600 mt-2">Review your booking details and complete your reservation</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 font-sora">
          {/* FORM SECTION */}
          <div className="lg:w-2/3">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Guest Details Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Guest Details</h2>
                </div>

                <div className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter first name"
                        value={formData.user.firstname}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            user: { ...prev.user, firstname: e.target.value },
                          }))
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Enter last name"
                        value={formData.user.lastname}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            user: { ...prev.user, lastname: e.target.value },
                          }))
                        }
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      value={formData.user.phone}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          user: { ...prev.user, phone: e.target.value },
                        }))
                      }
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Special Request */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      placeholder="Any special requests or notes for the host (optional)"
                      value={formData.specialRequest}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          specialRequest: e.target.value,
                        }))
                      }
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Guests Card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Guest Information</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { key: "adults", label: "Adults", desc: "Age 13+" },
                    { key: "children", label: "Children", desc: "Age 2-12" },
                    { key: "infants", label: "Infants", desc: "Under 2" },
                    { key: "pets", label: "Pets", desc: "Bringing pets" }
                  ].map(({ key, label, desc }) => (
                    <div key={key} className="bg-gray-50 rounded-xl p-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        {label}
                      </label>
                      <p className="text-xs text-gray-500 mb-3">{desc}</p>
                      <input
                        type="number"
                        min="0"
                        value={formData.guests[key]}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            guests: {
                              ...prev.guests,
                              [key]: parseInt(e.target.value) || 0,
                            },
                          }))
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-bold rounded-xl hover:from-indigo-700 hover:to-indigo-800 focus:ring-4 focus:ring-indigo-300 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  {loading ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Confirm & Pay ${total} CAD
                    </div>
                  )}
                </button>
                <p className="text-center text-sm text-gray-500 mt-3">
                  By clicking confirm & pay, you agree to our terms and conditions
                </p>
              </div>
            </form>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-1/3">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Property Image and Info */}
                <div className="p-6">
                  <div className="flex gap-4 mb-6">
                    <div className="relative">
                      <img
                        src={property.images[0]}
                        alt="Property"
                        className="w-24 h-24 rounded-xl object-cover"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{property.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">Entire rental unit</p>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                        <span className="text-sm font-semibold text-gray-900">{property.rating}</span>
                        <span className="text-sm text-gray-600">({property.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>

                  {/* Booking Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-700">Check-in</span>
                      <span className="text-sm font-semibold text-gray-900">{formatDate(checkIn)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-700">Check-out</span>
                      <span className="text-sm font-semibold text-gray-900">{formatDate(checkOut)}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-700">Guests</span>
                      <span className="text-sm font-semibold text-gray-900">
                        {(formData.guests.adults + formData.guests.children)} guests
                      </span>
                    </div>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="bg-gray-50 p-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Price breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        ${property.price} CAD × {nights} night{nights > 1 ? "s" : ""}
                      </span>
                      <span className="text-sm font-medium text-gray-900">${subtotal} CAD</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Taxes & fees</span>
                      <span className="text-sm font-medium text-gray-900">${tax} CAD</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-lg font-bold text-gray-900">${total} CAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Note */}
              <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="text-sm font-semibold text-green-800">Secure Payment</span>
                </div>
                <p className="text-sm text-green-700">
                  Your payment information is encrypted and secure. We never store your card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CancellationAndInfo />
    </div>
  );
};

export default Confirm;
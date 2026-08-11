import React, { useState } from "react";

export default function UnifiedCheckInAndCheckoutForm({ 
  total, 
  propertyId, 
  userId, 
  checkInDate, 
  checkOutDate, 
  totalStay, 
  guests 
}) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    specialRequest: "",
    vehicleType: "",
    vehicleLength: "",
    arrivalTime: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{6,15}$/;

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.countryCode === "+91" && !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit Indian phone number.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");

    if (!validate()) return;

    // Validate required props
    if (!propertyId || !userId || !checkInDate || !checkOutDate || !totalStay || !guests || !total) {
      setMsg("❌ Missing booking information. Please try again.");
      return;
    }

    setProcessing(true);
    setMsg("⏳ Creating checkout session...");

    try {
      // Create the exact payload structure you specified
      const payload = {
        propertyId: propertyId,
        userId: userId,
        checkInDate: checkInDate,
        checkOutDate: checkOutDate,
        totalStay: totalStay,
        guests: {
          adults: guests.adults || 0,
          children: guests.children || 0,
          infants: guests.infants || 0,
          pets: guests.pets || 0
        },
        specialRequest: formData.specialRequest || "",
        user: {
          firstname: formData.firstName,
          lastname: formData.lastName,
          phone: formData.phone
        },
        vehicleInfo: {
          type: formData.vehicleType,
          length: formData.vehicleLength,
          arrivalTime: formData.arrivalTime,
        },
        totalAmount: total,
        currency: "usd"
      };

      console.log("Sending payload:", payload);

      // Call your createCheckoutSession API
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add authorization header if needed
          // "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(data.message || `Server error: ${response.status}`);
      }

      if (data.success && data.url) {
        // Save form data before redirect
        const completeData = {
          ...formData,
          amountPaid: total,
          bookingId: data.bookingId,
          orderId: data.orderId,
          sessionId: data.sessionId,
          payload: payload,
          time: new Date().toISOString(),
        };
        
        setSubmittedData((prev) => [...prev, completeData]);
        setMsg("✅ Checkout session created! Redirecting to payment...");
        
        // Small delay to show success message before redirect
        setTimeout(() => {
          window.location.href = data.url;
        }, 1000);
      } else {
        throw new Error(data.message || "Invalid response from server");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      setMsg("❌ " + error.message);
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 bg-white rounded shadow-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <h1 className="text-2xl font-bold">Who's checking in?</h1>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name *"
              required
              className={`w-full px-4 py-3 border rounded ${
                errors.firstName ? "border-red-500" : ""
              }`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          
          <div className="flex-1">
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name *"
              required
              className={`w-full px-4 py-3 border rounded ${
                errors.lastName ? "border-red-500" : ""
              }`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email address *"
            required
            className={`w-full px-4 py-3 border rounded ${
              errors.email ? "border-red-500" : ""
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        <div className="flex flex-row gap-2">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="px-2 py-3 border rounded"
          >
            <option value="+1">+1 (US/CA)</option>
            <option value="+44">+44 (UK)</option>
            <option value="+91">+91 (IN)</option>
          </select>

          <div className="flex-1">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone number *"
              required
              className={`w-full px-4 py-3 border rounded ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <textarea
            name="specialRequest"
            value={formData.specialRequest}
            onChange={handleChange}
            placeholder="Accessibility needs or special requests (optional)"
            className="w-full px-4 py-3 border rounded min-h-[100px]"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <select
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded bg-white"
            >
              <option value="">Select vehicle type</option>
              <option value="car">Car / SUV</option>
              <option value="pickup">Pickup Truck</option>
              <option value="semi">Semi-Truck</option>
              <option value="rv">RV / Motorhome</option>
              <option value="none">No Vehicle</option>
            </select>
          </div>
          <div className="flex-1">
            <input
              type="text"
              name="vehicleLength"
              value={formData.vehicleLength}
              onChange={handleChange}
              placeholder="Truck/Trailer Length (e.g. 53 ft)"
              className="w-full px-4 py-3 border rounded"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1 text-gray-700">Expected Arrival Time</label>
          <input
            type="time"
            name="arrivalTime"
            value={formData.arrivalTime}
            onChange={handleChange}
            className="w-full md:w-1/2 px-4 py-3 border rounded"
          />
        </div>

        <div className="border-t pt-6">
          <h2 className="text-xl font-semibold mb-2">💳 Payment</h2>
          <p className="mb-4 text-gray-600">
            You're about to pay <strong>${total} USD</strong> for your booking.
          </p>

          <button
            type="submit"
            disabled={processing}
            className={`w-full py-3 rounded text-white font-bold ${
              processing
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {processing ? "Creating Checkout Session..." : `Pay $${total} USD`}
          </button>

          {msg && (
            <div className={`mt-3 p-3 rounded text-center text-sm ${
              msg.includes('✅') ? 'bg-green-100 text-green-700' : 
              msg.includes('❌') ? 'bg-red-100 text-red-700' : 
              'bg-blue-100 text-blue-700'
            }`}>
              {msg}
            </div>
          )}
        </div>
      </form>

      {/* Debug Information */}
      <div className="mt-6 p-4 bg-gray-100 rounded">
        <h3 className="font-semibold text-sm mb-2">Debug Info:</h3>
        <pre className="text-xs text-gray-600 overflow-x-auto">
          {JSON.stringify({
            propertyId,
            userId,
            checkInDate,
            checkOutDate,
            totalStay,
            guests,
            total
          }, null, 2)}
        </pre>
      </div>

      {submittedData.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">📝 Submitted Records:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm max-h-64 overflow-y-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
import React, { useState } from "react";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

export default function UnifiedCheckInAndCheckoutForm({ total }) {
  const stripe = useStripe();
  const elements = useElements();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    specialRequest: "",
  });

  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState({});
  const [processing, setProcessing] = useState(false);
  const [msg, setMsg] = useState("");
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{6,15}$/;

    if (!emailRegex.test(formData.email)) {
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
    if (!stripe || !elements) {
      setMsg("Stripe not ready yet.");
      return;
    }

    setProcessing(true);
    setMsg("⏳ Processing payment...");

    try {
      const res = await fetch("http://localhost:4242/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: total }), // NOTE: in cents if backend expects cents
      });

      const data = await res.json();
      if (!data.clientSecret) {
        setMsg("❌ Failed to create payment intent.");
        setProcessing(false);
        return;
      }

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMsg("❌ " + result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        const completeData = {
          ...formData,
          amountPaid: total,
          time: new Date().toISOString(),
        };
        setSubmittedData((prev) => [...prev, completeData]);
        setMsg("✅ Payment successful and data saved!");
        setPaymentSuccess(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+1",
          phone: "",
          specialRequest: "",
        });
        elements.getElement(CardElement).clear();
      } else {
        setMsg("⚠ Payment status: " + result.paymentIntent.status);
      }
    } catch (err) {
      setMsg("❌ " + err.message);
    }

    setProcessing(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto p-6 space-y-6 bg-white rounded shadow-md"
    >
      <h1 className="text-2xl font-bold">Who's checking in?</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First name *"
          required
          className="flex-1 px-4 py-3 border rounded"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last name *"
          required
          className="flex-1 px-4 py-3 border rounded"
        />
      </div>

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
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <div className="flex flex-row gap-2">
        <select
          name="countryCode"
          value={formData.countryCode}
          onChange={handleChange}
          className="px-2 py-3 border rounded"
        >
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          <option value="+91">+91</option>
        </select>

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
      </div>
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <textarea
        name="specialRequest"
        value={formData.specialRequest}
        onChange={handleChange}
        placeholder="Accessibility needs or special requests (optional)"
        className="w-full px-4 py-3 border rounded min-h-[100px]"
      />

      <div>
        <h2 className="text-xl font-semibold mb-2">💳 Payment</h2>
        <p className="mb-4 text-gray-600">
          You're about to pay <strong>{total} CAD</strong> for Plains Motor.
        </p>

        <div className="p-3 border rounded bg-gray-50 mb-2">
          <CardElement
            options={cardStyle}
            onChange={(e) =>
              setCardError(e.error ? e.error.message : "")
            }
          />
        </div>

        {cardError && <p className="text-red-500 text-sm mb-2">{cardError}</p>}

        <button
          type="submit"
          disabled={processing || !stripe || paymentSuccess}
          className={`w-full py-3 rounded text-white font-bold ${
            processing || paymentSuccess
              ? "bg-gray-400"
              : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {processing
            ? "Processing..."
            : paymentSuccess
            ? "✅ Payment Completed"
            : `Pay ${total} CAD`}
        </button>

        {msg && (
          <p className="mt-3 text-center text-sm text-gray-700">{msg}</p>
        )}
      </div>

      {submittedData.length > 0 && (
        <div className="mt-6">
          <h3 className="font-semibold text-lg mb-2">📝 Submitted Records:</h3>
          <pre className="bg-gray-100 p-4 rounded text-sm max-h-64 overflow-y-auto">
            {JSON.stringify(submittedData, null, 2)}
          </pre>
        </div>
      )}
    </form>
  );
}

const cardStyle = {
  style: {
    base: {
      fontSize: "16px",
      color: "#32325d",
      "::placeholder": { color: "#aab7c4" },
      fontFamily: "Nunito, sans-serif",
    },
    invalid: { color: "#fa755a" },
  },
};

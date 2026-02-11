import React, { useState } from "react";
import bannerImg from "../../assets/logo/Logo13.png";

const FeedBack = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [agreed, setAgreed] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setAgreed(checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    // Email is optional
    return formData.name.trim() && formData.message.trim() && agreed;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setStatus("❗ Please fill all required fields and accept the terms.");
      return;
    }

    setStatus("Sending...");

    try {
      // Using FormData for Web3Forms
      const data = new FormData();
      data.append("access_key", "497781ff-4b0c-47db-a112-a0d6598fa2a9"); // your Web3Forms key
      data.append("subject", "Feedback from Partner Form");
      data.append("name", formData.name.trim());
      data.append(
        "email",
        formData.email.trim() || "no-reply@example.com"
      ); // placeholder if blank
      data.append("message", formData.message.trim());

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setAgreed(false);
      } else {
        setStatus("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ An error occurred. Please try again.");
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 py-12 px-4 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12">
      {/* Left Section */}
      <div className="max-w-xl">
        <h2 className="text-xl font-semibold text-cyan-800 mb-2">
          We Value Your Feedback
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Tell us what you think
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Your feedback helps us improve our services and serve you better.
        </p>
        <img
          src={bannerImg}
          alt="Feedback"
          className="hidden lg:block w-72 rounded-xl drop-shadow-lg"
        />
      </div>

      {/* Right Form Section */}
      <div className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-2xl border border-blue-100">
        <h3 className="text-2xl font-bold text-cyan-900 mb-6 text-center">
          Your Feedback
        </h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (optional)"
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Feedback *"
            rows="5"
            className="w-full p-3 rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>

          <label className="flex items-center space-x-2 text-sm text-gray-700">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleChange}
              className="accent-cyan-600"
            />
            <span>I confirm the above information is accurate.</span>
          </label>

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Submit Feedback
          </button>

          {status && (
            <p
              className={`text-sm text-center mt-3 ${
                status.includes("success") ? "text-green-600" : "text-red-600"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default FeedBack;

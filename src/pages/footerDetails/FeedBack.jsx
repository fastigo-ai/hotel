import React, { useState } from "react";
// Cloudinary CDN Image URLs (Optimized with f_auto, q_auto, w_300)
const bannerImg = "https://res.cloudinary.com/dt59dbh3f/image/upload/f_auto,q_auto,w_300/v1781092878/hotel_assets/logo/Logo13.png";

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
    <div className="bg-[#F9FAFB] min-h-screen py-16 px-6 lg:px-16 flex flex-col lg:flex-row items-center justify-center gap-16 font-sans">
      {/* Left Section */}
      <div className="max-w-xl">
        <h2 className="uppercase tracking-[0.2em] font-bold text-xs text-[#F39C49] mb-4">
          We Value Your Feedback
        </h2>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#1A4C43] leading-tight mb-6">
          Tell us what you think
        </h1>
        <p className="text-lg text-gray-600 mb-10 leading-relaxed">
          Your feedback helps us improve our services and serve you better.
        </p>
        <div className="bg-[#1A4C43] p-8 rounded-2xl hidden lg:inline-block shadow-lg">
          <img
            src={bannerImg}
            alt="Feedback"
            className="w-48 brightness-0 invert"
          />
        </div>
      </div>

      {/* Right Form Section */}
      <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
        <h3 className="text-2xl font-serif font-bold text-[#1A4C43] mb-8 text-center">
          Your Feedback
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name *"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A4C43] bg-gray-50 text-gray-900 transition-shadow"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email (optional)"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1A4C43] bg-gray-50 text-gray-900 transition-shadow"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Feedback *"
            rows="5"
            className="w-full p-4 rounded-xl border border-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-[#1A4C43] bg-gray-50 text-gray-900 transition-shadow"
            required
          ></textarea>

          <label className="flex items-center space-x-3 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleChange}
              className="w-5 h-5 accent-[#1A4C43] rounded border-gray-300 cursor-pointer"
            />
            <span className="font-medium">I confirm the above information is accurate.</span>
          </label>

          <button
            type="submit"
            className="w-full bg-[#1A4C43] hover:bg-[#133c35] text-white font-bold py-4 rounded-xl transition duration-200 shadow-md flex justify-center items-center gap-2 mt-2"
          >
            Submit Feedback
          </button>

          {status && (
            <p
              className={`text-sm text-center font-medium mt-4 p-3 rounded-lg ${
                status.includes("success") ? "bg-green-50 text-green-700 border border-green-200" : 
                status.includes("Sending") ? "bg-blue-50 text-blue-700 border border-blue-200" :
                "bg-red-50 text-red-700 border border-red-200"
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

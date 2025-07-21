// src/pages/SignInPage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginWithOtp, VerifyOtp } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Logo13.png";

export default function SignInPage() {
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!mobile || mobile.length < 10) return alert("Invalid mobile number.");
    try {
      await LoginWithOtp(`${countryCode}${mobile}`, setIsLoading);
      setStep(2);
    } catch (err) {
      alert("Failed to send OTP.");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 4) return alert("Invalid OTP.");
    try {
      await VerifyOtp(`${countryCode}${mobile}`, otp, setIsLoading, dispatch);
      navigate("/");
    } catch (err) {
      alert("OTP verification failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md w-full my-3">
        {/* Company Logo */}
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Company Logo" className="h-12 object-contain" />
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Sign In with OTP
        </h2>

        <div className="space-y-5">
          <div className="flex gap-2">
            <select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              className="border border-gray-300 rounded-lg p-3 bg-white text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading || step === 2}
            >
              <option value="+91">🇮🇳 +91</option>
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+971">🇦🇪 +971</option>
              {/* Add more as needed */}
            </select>

            <input
              type="tel"
              placeholder="Enter mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 p-3 w-full rounded-lg text-gray-700"
              disabled={isLoading || step === 2}
            />
          </div>

          {step === 2 && (
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 p-3 w-full rounded-lg text-gray-700"
              disabled={isLoading}
            />
          )}

          <button
            onClick={step === 1 ? handleSendOtp : handleVerifyOtp}
            className={`w-full py-3 rounded-lg text-white font-semibold transition duration-300 ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : step === 1
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-green-600 hover:bg-green-700"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : step === 1 ? "Send OTP" : "Verify OTP"}
          </button>
        </div>
      </div>
    </div>
  );
}

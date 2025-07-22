// src/pages/SignInPage.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginWithOtp, VerifyOtp } from "../../api/Api";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/Logo13.png";

export default function SignInPage({ setShowSignInModal }) {
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

  const handleClose = () => {
    setShowSignInModal(false);
  };

  return (
    <>
      {/* Blurred Backdrop Overlay */}
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={handleClose}></div>
      
      {/* Modal Container */}
      <div className="fixed inset-0 z-50 bg-transparent flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-auto transform transition-all duration-300 ease-out relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all duration-200 group"
            disabled={isLoading}
          >
            <svg 
              className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Modal Header */}
          <div className="text-center pt-8 pb-6 px-6">
            {/* Company Logo */}
            <div className="flex justify-center mb-6">
              <img 
                src={logo} 
                alt="Company Logo" 
                className="h-16 w-auto object-contain"
              />
            </div>
            
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {step === 1 ? "Welcome Back" : "Verify Your Number"}
            </h2>
            <p className="text-gray-600 text-sm">
              {step === 1 
                ? "Enter your mobile number to receive OTP" 
                : `We sent a code to ${countryCode}${mobile}`
              }
            </p>
          </div>

          {/* Modal Body */}
          <div className="px-6 pb-8">
            <div className="space-y-4">
              {/* Mobile Number Input (Step 1) */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country Code
                    </label>
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none"
                      disabled={isLoading}
                    >
                      <option value="+91">🇮🇳 India (+91)</option>
                      <option value="+1">🇺🇸 USA (+1)</option>
                      <option value="+44">🇬🇧 UK (+44)</option>
                      <option value="+971">🇦🇪 UAE (+971)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your mobile number"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white transition-all duration-200 outline-none text-lg tracking-wider"
                      disabled={isLoading}
                      maxLength="15"
                    />
                  </div>
                </div>
              )}

              {/* OTP Input (Step 2) */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Enter OTP
                    </label>
                    <input
                      type="text"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full border border-gray-300 rounded-xl px-4 py-3 bg-gray-50 text-gray-700 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:bg-white transition-all duration-200 outline-none text-xl tracking-widest text-center font-mono"
                      disabled={isLoading}
                      maxLength="6"
                    />
                  </div>

                  {/* Resend OTP Option */}
                  <div className="text-center">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                      disabled={isLoading}
                    >
                      Change mobile number?
                    </button>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={step === 1 ? handleSendOtp : handleVerifyOtp}
                  disabled={isLoading || (step === 1 && (!mobile || mobile.length < 10)) || (step === 2 && (!otp || otp.length < 4))}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:scale-[1.02] disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Processing...</span>
                    </>
                  ) : (
                    <span>
                      {step === 1 ? "Send OTP" : "Verify & Sign In"}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-gray-50 rounded-b-2xl px-6 py-4">
            <p className="text-xs text-gray-500 text-center">
              By continuing, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
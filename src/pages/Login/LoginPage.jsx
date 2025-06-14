// import React, { useState } from "react";
// import { FaGoogle, FaApple, FaFacebook, FaTimes } from "react-icons/fa";
// // import OtpInput from "react-otp-input";
// const LogitPage = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleEmailLogin = () => {
//     if (!email.includes("@")) {
//       setMessage("Please enter a valid email address.");
//       return;
//     }
//     setLoading(true);
//     setTimeout(() => {
//       setMessage("Login link sent!");
//       setLoading(false);
//     }, 1500);
//   };

//   const handleClose = () => {
//     window.history.back(); // Go back to the previous page
//   };

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-sans">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 text-center relative">
//         {/* Close Icon */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
//         >
//           <FaTimes size={18} />
//         </button>

//         <h2 className="text-xl font-bold mb-2">Sign in or create an account</h2>
//         <p className="text-sm text-gray-600 mb-6">
//           You can sign in using your website.com account to access our services.
//         </p>

//         <div className="text-left mb-4">
//           <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
//           <input
//             type="email"
//             placeholder="Enter your email address"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             disabled={loading}
//           />
//         </div>

//         <button
//           onClick={handleEmailLogin}
//           disabled={loading}
//           className={`w-full py-2 rounded-lg text-white font-medium transition ${
//             loading
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-600 hover:bg-blue-700"
//           }`}
//         >
//           {loading ? "Sending..." : "Continue with email"}
//         </button>

//         <div className="flex items-center my-6">
//           <hr className="flex-grow border-t border-gray-300" />
//           <span className="mx-2 text-sm text-gray-500">or use one of these options</span>
//           <hr className="flex-grow border-t border-gray-300" />
//         </div>

//         <div className="flex justify-center space-x-4 mb-6">
//           <button className="p-3 border rounded-lg hover:bg-gray-100">
//             <FaGoogle className="text-xl text-gray-600" />
//           </button>
//           <button className="p-3 border rounded-lg hover:bg-gray-100">
//             <FaApple className="text-xl text-gray-600" />
//           </button>
//           <button className="p-3 border rounded-lg hover:bg-gray-100">
//             <FaFacebook className="text-xl text-gray-600" />
//           </button>
//         </div>

//         <p className="text-xs text-gray-500 mt-4">
//           By signing in or creating an account, you agree with our{" "}
//           <a href="#" className="text-blue-600 underline">Terms & conditions</a>{" "}
//           and <a href="#" className="text-blue-600 underline">Privacy statement</a>
//         </p>

//         {message && (
//           <p
//             className={`mt-4 text-sm font-medium ${
//               message.includes("sent") ? "text-green-600" : "text-red-500"
//             }`}
//           >
//             {message}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LogitPage;

import React from "react";
import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth } from "../../firebase/setUp";
import { RecaptchaVerifier, signInWithPhoneNumber  } from "firebase/auth";
import { Toaster, toast } from "react-hot-toast";
const LoginPage = () => {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);

  function onCaptchaVerify() {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {},
        }
      );
    }
  }
  function onSignup() {
    setLoading(true);
    onCaptchaVerify();

    const appVerifier = window.recaptchaVerifier;
    const formatPh = "+" + ph;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setShowOTP(true)
        setLoading(false)
        toast.success("OTP Send Successfully!")
      })
      .catch((error) => {
        console.log(error);
        
        setLoading(false)
        });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 font-sans">
      <div>
        <Toaster toastOptions={{duration: 4000}}/>
        <div id="recaptcha-container"></div>
        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            Login Success
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label className="font-bold text-2xl text-white text-center">
                  Enter Your OTP
                </label>

                <OtpInput
                  className
                  value={otp}
                  onChange={setOtp}
                  otpType="number"
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => (
                    <input
                      {...props}
                      className="bg-white text-black border border-gray-300 rounded p-8 w-100 h-20 text-center"
                    />
                  )}
                />
                <button className="bg-emerald-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsTelephoneFill size={30} />
                </div>
                <label className="font-bold text-xl text-white text-center">
                  Verify your phone Number
                </label>
                <PhoneInput country={"in"} value={ph} onChange={setPh} />
                <button onClick={onSignup} className="bg-emerald-500 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded">
                  {loading && (
                    <CgSpinner size={20} className="mt-1 animate-spin" />
                  )}
                  <span>Send OTP via SMS </span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;

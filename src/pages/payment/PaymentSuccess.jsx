import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center justify-center px-4 text-center">
      <CheckCircleIcon className="h-20 w-20 text-green-500 animate-bounce mb-4" />
      <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
      <p className="text-gray-700 mb-6">
        Thank you for your payment. Your transaction has been completed successfully.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Go to Home
        </button>
        <button
          onClick={() => navigate("/booking-history")}
          className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          View Orders
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;

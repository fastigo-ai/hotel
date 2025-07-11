import React from "react";
import { useNavigate } from "react-router-dom";

const ComingSoon = () => {
     const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-700 text-white px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4 animate-pulse">🚧 Coming Soon</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto">
          We're working hard to bring something amazing. Stay tuned!
        </p>
        <div className="mt-6">
          
          <button className="ml-2 bg-white text-indigo-700 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;

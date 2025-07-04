import React, { useState } from 'react';
import axios from 'axios';

function OtpForm() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [msg, setMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const sendOtp = async () => {
    try {
      setIsLoading(true);
      setMsg('');
      
      const res = await axios.post('http://localhost:4242/send-otp', { 
        phone: phone // Change from email to phone
      }, {
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data.status === 'pending') {
        setMsg('OTP sent successfully!');
        setStep(2);
      } else {
        setMsg('Failed to send OTP');
      }
    } catch (err) {
      setMsg(err.response?.data?.error || 'Failed to send OTP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setIsLoading(true);
      setMsg('');
      
      const res = await axios.post('http://localhost:4242/verify-otp', { 
        phone: phone, // Change from email to phone
        code: otp 
      });

      if (res.data.status === 'approved') {
        setMsg('OTP verified successfully!');
        // Redirect or perform action after successful verification
      } else {
        setMsg('Invalid OTP. Please try again.');
      }
    } catch (err) {
      setMsg(err.response?.data?.error || 'Verification failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            OTP Verification
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            We will send you a One Time Passcode via this mobile number
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {step === 1 ? (
            <div className="space-y-4">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel" // Change input type to tel for phone numbers
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <button
                onClick={sendOtp}
                disabled={!phone || isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${(isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md p-2 border"
                  placeholder="Enter 6-digit OTP"
                  maxLength="6"
                  required
                />
              </div>

              <button
                onClick={verifyOtp}
                disabled={otp.length < 6 || isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${(otp.length < 6 || isLoading) ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Verifying...' : 'Verify OTP'}
              </button>
            </div>
          )}

          {msg && (
            <div className={`rounded-md p-4 ${msg.includes('success') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
              <div className="flex">
                <div className="flex-shrink-0">
                  {msg.includes('success') ? (
                    <svg className="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-red-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium">{msg}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default OtpForm;

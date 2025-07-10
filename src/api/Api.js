import axios from "axios";
import { signIn } from "../redux/slices/authSlice"
const BASE_URL = "https://starfish-app-6yhui.ondigitalocean.app";
// const BASE_URL = "http://localhost:3000";

export const LoginWithOtp = async (mobile, setIsLoading) => {
    try {
        setIsLoading(true);
        const response = await axios.post(`${BASE_URL}/api/auth/send-otp`, {
            mobile: mobile,
        });
        return response.data;
    } catch (error) {
        console.error("Error sending OTP:", error);
        throw error;
    } finally {
        setIsLoading(false);
    }
};

export const VerifyOtp = async (mobile, otp, setIsLoading, dispatch) => {
  try {
    setIsLoading(true);
    console.log("Sending OTP verification:", { mobile, otp });

    const response = await axios.post(`${BASE_URL}/api/auth/verify-otp`, {
      mobile,
      otp,
    });

    const userData = response.data;

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);

    dispatch(signIn({ user: userData, token: userData.token }));
    return userData;
  } catch (error) {
    console.error("Error verifying OTP:", error);
    alert("OTP verification failed. Try again.");
    throw error;
  } finally {
    setIsLoading(false);
  }
};

export const getPropertyCards = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/api/property/get-all-properties`);
        return response.data; // assuming data is the array of cards
    } catch (error) {
        console.error("Error getting property cards:", error);
        throw error;
    }
};

export const getPropertyDetail = async (id) => {
  try {
    const response = await axios.get(
      `https://starfish-app-6yhui.ondigitalocean.app/api/property/getPropertyDetail/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching property detail:", error);
    throw error;
  }
};

export const deleteProperty = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/api/property/delete-property/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting property:", error);
        throw error;
    }
};

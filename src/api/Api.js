import axios from "axios";
import { signIn } from "../redux/slices/authSlice"
//  export const BASE_URL = "https://starfish-app-6yhui.ondigitalocean.app";
// export const BASE_URL = "https://lionfish-app-mwu2u.ondigitalocean.app";
// export const BASE_URL = "https://lionfish-app-mwu2u.ondigitalocean.app";
export const BASE_URL = "https://whale-app-oiglt.ondigitalocean.app";

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

export const AuthenticateWithMobile = async (mobile, setIsLoading, dispatch) => {
    try {
        setIsLoading(true);
        const response = await axios.post(`${BASE_URL}/api/auth/authenticate-with-mobile`, {
            mobile: mobile,
        });

    const userData = response.data;

    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", userData.token);

    dispatch(signIn({ user: userData, token: userData.token }));
    return userData;
    } catch (error) {
        console.error("Error authenticating with mobile:", error);
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
      `${BASE_URL}/api/property/getPropertyDetail/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching property detail:", error);
    throw error;
  }
};


export const fetchUserBookings = async () => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const response = await axios.get(
    `${BASE_URL}/api/property/my-bookings`,
    config
  );

  return response.data.bookings;
};

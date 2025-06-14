// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6bRsKEXXJbCyuAj3d-ZsSQ3bi7iIs1dU",
  authDomain: "hotel-9b4ba.firebaseapp.com",
  projectId: "hotel-9b4ba",
  storageBucket: "hotel-9b4ba.firebasestorage.app",
  messagingSenderId: "30298645857",
  appId: "1:30298645857:web:3681b56584b4db82431120",
  measurementId: "G-W9V3EVDE6D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyARj6nHXRk4B3NIZ_The7W0BtzmPTlIw3o",
  authDomain: "auth-otp-c8755.firebaseapp.com",
  projectId: "auth-otp-c8755",
  storageBucket: "auth-otp-c8755.appspot.com",
  messagingSenderId: "1054344326321",
  appId: "1:1054344326321:web:f8419c7421e4c9af840690",
  measurementId: "G-P0NZ7HLETH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

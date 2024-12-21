// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-8c7af.firebaseapp.com",
  projectId: "mern-estate-8c7af",
  storageBucket: "mern-estate-8c7af.firebasestorage.app",
  messagingSenderId: "539350399639",
  appId: "1:539350399639:web:85b8755d7148517b2d47d2",
  measurementId: "G-Q7GTTZLSRH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

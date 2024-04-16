// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-94502.firebaseapp.com",
  projectId: "mern-estate-94502",
  storageBucket: "mern-estate-94502.appspot.com",
  messagingSenderId: "137273098127",
  appId: "1:137273098127:web:4b02d568367895559355fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "kavin-estate.firebaseapp.com",
  projectId: "kavin-estate",
  storageBucket: "kavin-estate.firebasestorage.app",
  messagingSenderId: "894337009224",
  appId: "1:894337009224:web:8d6386d527201541a23a7d"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
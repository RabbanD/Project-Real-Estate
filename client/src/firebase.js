// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-5a950.firebaseapp.com",
  projectId: "mern-estate-5a950",
  storageBucket: "mern-estate-5a950.appspot.com",
  messagingSenderId: "553202440824",
  appId: "1:553202440824:web:309e2b19d41b0bc5862b8d",
  measurementId: "G-TGYZ33BHJJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

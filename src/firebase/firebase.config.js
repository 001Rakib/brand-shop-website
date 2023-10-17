// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ8_SV8fLfsyR-Pc8M4i1M8WXgREmvY9g",
  authDomain: "a-10-brand-shop.firebaseapp.com",
  projectId: "a-10-brand-shop",
  storageBucket: "a-10-brand-shop.appspot.com",
  messagingSenderId: "711908236849",
  appId: "1:711908236849:web:9c51c835852271e674ff10",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

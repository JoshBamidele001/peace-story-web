// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: preprocessCSS.env.VITE_FIREBASE_API_KEY,
  authDomain: "dphospens.firebaseapp.com",
  projectId: "dphospens",
  storageBucket: "dphospens.appspot.com",
  messagingSenderId: "669125455086",
  appId: "1:669125455086:web:c13f96490b4589739357ff"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


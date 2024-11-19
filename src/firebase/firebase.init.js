// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfO_JfmrZN8okbiUEvWVFgrDf8uMcHudI",
  authDomain: "adventurea-6c894.firebaseapp.com",
  projectId: "adventurea-6c894",
  storageBucket: "adventurea-6c894.firebasestorage.app",
  messagingSenderId: "81077541710",
  appId: "1:81077541710:web:ac42a7215d2ec347211c1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

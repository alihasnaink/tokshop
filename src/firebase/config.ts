// Import the functions you need from the SDKs you need

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyClWlx93nJH97z3XdGXXSaEMCtc8E99Mpc",
  authDomain: "lumsu-441e6.firebaseapp.com",
  databaseURL: "https://lumsu-441e6-default-rtdb.firebaseio.com",
  projectId: "lumsu-441e6",
  storageBucket: "lumsu-441e6.firebasestorage.app",
  messagingSenderId: "929169805629",
  appId: "1:929169805629:web:43cafdcdb6ee090fe1f554"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
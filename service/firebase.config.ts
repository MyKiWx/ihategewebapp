// Import the functions need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvPqLD5UajvEBZipZEs0OSIml3M5udQ50",
  authDomain: "fir-ge-c7fa7.firebaseapp.com",
  projectId: "fir-ge-c7fa7",
  storageBucket: "fir-ge-c7fa7.appspot.com",
  messagingSenderId: "117029851362",
  appId: "1:117029851362:web:754867d750c4a7c7bbcebb",
  measurementId: "G-J3QTTL0R31"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


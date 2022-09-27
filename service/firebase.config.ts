// Import the functions need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {


  // Your api


};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJexSLR-C8HXCfOq1L4S0zHbc-SNdVdZY",
  authDomain: "vite-contact-563.firebaseapp.com",
  projectId: "vite-contact-563",
  storageBucket: "vite-contact-563.appspot.com",
  messagingSenderId: "983530398808",
  appId: "1:983530398808:web:412de5cdc4bd3e6b2ed62d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
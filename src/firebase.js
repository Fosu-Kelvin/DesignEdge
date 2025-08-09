// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKgeUzVi4dC2Ftz5u_bLrkPRyp-NTeLHI",
  authDomain: "graphic-design-enroll.firebaseapp.com",
  projectId: "graphic-design-enroll",
  storageBucket: "graphic-design-enroll.firebasestorage.app",
  messagingSenderId: "328954996024",
  appId: "1:328954996024:web:3b9b33d8b47a7a92ed0dcd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
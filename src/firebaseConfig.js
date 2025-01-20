// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAef1pecXNTLpjt4YpHRwk_-HN-fpNnATc",
  authDomain: "fir-server-driven-ui.firebaseapp.com",
  projectId: "fir-server-driven-ui",
  storageBucket: "fir-server-driven-ui.firebasestorage.app",
  messagingSenderId: "985494740323",
  appId: "1:985494740323:web:93135d3554bd26d6dcc756",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

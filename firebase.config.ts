// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-g1M_4RNZAa-uyJFVyiex8XtAFe4M-u4",
  authDomain: "basyir-landing-page.firebaseapp.com",
  projectId: "basyir-landing-page",
  storageBucket: "basyir-landing-page.firebasestorage.app",
  messagingSenderId: "379423626073",
  appId: "1:379423626073:web:8ac0301e1f74bc7c537248",
  measurementId: "G-SMZ6NPLH0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { db };
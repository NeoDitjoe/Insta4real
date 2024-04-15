import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtHOSBWsZNdU2m7xNO33AKoBVQ2sUS3SE",
  authDomain: "insta4real-1ef4e.firebaseapp.com",
  projectId: "insta4real-1ef4e",
  storageBucket: "insta4real-1ef4e.appspot.com",
  messagingSenderId: "948832037004",
  appId: "1:948832037004:web:5f99842a730acfcaa833a9",
  measurementId: "G-JM0P1M0P0Y"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app)
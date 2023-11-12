// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjLHSWLgz-IAlNASYeZ_tBbfAsQy1eulw",
  authDomain: "answer-qmaf0.firebaseapp.com",
  projectId: "answer-qmaf0",
  storageBucket: "answer-qmaf0.appspot.com",
  messagingSenderId: "163722898045",
  appId: "1:163722898045:web:bd530397e9943640325f14",
  measurementId: "G-MQV8QVP5S9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
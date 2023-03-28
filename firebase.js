// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbd3k665sO7oHzrLNNbqXNr4TLQ1h7Bvc",
  authDomain: "qrgenerator-4136d.firebaseapp.com",
  databaseURL: "https://qrgenerator-4136d-default-rtdb.firebaseio.com",
  projectId: "qrgenerator-4136d",
  storageBucket: "qrgenerator-4136d.appspot.com",
  messagingSenderId: "440408611895",
  appId: "1:440408611895:web:5c5b9ba0f7f2db2f9433b2",
  measurementId: "G-KXPB5XHEVZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

export { app, analytics, db };

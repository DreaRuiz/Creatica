// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfnCi4ZggOaOwNfnVBLb8cvOLw3o8xAns",
  authDomain: "s9-creatica.firebaseapp.com",
  projectId: "s9-creatica",
  storageBucket: "s9-creatica.appspot.com",
  messagingSenderId: "501954067232",
  appId: "1:501954067232:web:dae4477e7ee4083ca47545"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db};
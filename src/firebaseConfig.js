// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBVMt4M9eZ4D0cYo2CrCkJzNaf1tgMAlvA",
  authDomain: "fir-tutorial-8a979.firebaseapp.com",
  projectId: "fir-tutorial-8a979",
  storageBucket: "fir-tutorial-8a979.appspot.com",
  messagingSenderId: "292803467212",
  appId: "1:292803467212:web:e3cd6e3e9126d3ab48af69",
  measurementId: "G-8VK174299D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);

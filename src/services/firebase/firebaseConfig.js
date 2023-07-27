// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvG9gFL9DgSStvxxI2r4qMT0-BcSDajFo",
  authDomain: "proyectofinal-c9b66.firebaseapp.com",
  projectId: "proyectofinal-c9b66",
  storageBucket: "proyectofinal-c9b66.appspot.com",
  messagingSenderId: "989117396405",
  appId: "1:989117396405:web:8c48e585e176af427a95fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

import {getFirestore} from "firebase/firestore"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkS1h3Rub4i0lytu-Av3468YqElrNXMwo",
  authDomain: "portfolio-react-c7b65.firebaseapp.com",
  projectId: "portfolio-react-c7b65",
  storageBucket: "portfolio-react-c7b65.appspot.com",
  messagingSenderId: "636645124489",
  appId: "1:636645124489:web:7dcc848af322c196a49958",
  measurementId: "G-BD01H1D1CX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(); 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore,collection, getDocs } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI9EXsfDvWXa3fbWYCHbz3CuuW_tfUO1k",
  authDomain: "web3clubafrica.firebaseapp.com",
  projectId: "web3clubafrica",
  storageBucket: "web3clubafrica.appspot.com",
  messagingSenderId: "887862240635",
  appId: "1:887862240635:web:01c91207fa30928b8e09de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//get db
const db = getFirestore();

//init
const colRef = collection(db, "messages");

//get data

export const auth = getAuth(app)

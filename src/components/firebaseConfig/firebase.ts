// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-BgbP1lDokC9Y-2nnU7UwyGMb5_dJch0",
  authDomain: "practica-reacthooks.firebaseapp.com",
  databaseURL: "https://practica-reacthooks-default-rtdb.firebaseio.com",
  projectId: "practica-reacthooks",
  storageBucket: "practica-reacthooks.appspot.com",
  messagingSenderId: "482416949341",
  appId: "1:482416949341:web:2bfc97385025eda16eb5b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
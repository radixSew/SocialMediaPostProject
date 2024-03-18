// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDNEuXxh-RMw1mFqm-wY_coW9ckeFLD4A",
  authDomain: "exercise01-221b0.firebaseapp.com",
  projectId: "exercise01-221b0",
  storageBucket: "exercise01-221b0.appspot.com",
  messagingSenderId: "416300304924",
  appId: "1:416300304924:web:35cf7627b3b6c23d742dd9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
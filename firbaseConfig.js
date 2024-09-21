// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword}from 'firebase/auth' 


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZEVj-yD3CMLuYTldhR1QdkX6h9cRe0QA",
  authDomain: "native-alpha5.firebaseapp.com",
  projectId: "native-alpha5",
  storageBucket: "native-alpha5.appspot.com",
  messagingSenderId: "830080515184",
  appId: "1:830080515184:web:dd015428cbdb14233a88b5",
  measurementId: "G-46YHZMJFKL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth(app)
export {createUserWithEmailAndPassword}
export {signInWithEmailAndPassword}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


  const firebaseConfig = {
    apiKey: "AIzaSyCBP80ueVKsAiqUWoar7YKLupVkSk-4neM",
    authDomain: "cabapp-2d05c.firebaseapp.com",
    databaseURL: "https://cabapp-2d05c-default-rtdb.firebaseio.com",
    projectId: "cabapp-2d05c",
    storageBucket: "cabapp-2d05c.appspot.com",
    messagingSenderId: "855148419364",
    appId: "1:855148419364:web:168e38c9206db09a4e3bb1",
    measurementId: "G-YJTD1V8HRC"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const storage = getFirestore(app)
export const db = getFirestore(app);

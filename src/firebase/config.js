// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCNwB-xYeAULmGEQ9oal1LDMzbVD25G8fY",
  authDomain: "football-app-6be80.firebaseapp.com",
  projectId: "football-app-6be80",
  storageBucket: "football-app-6be80.appspot.com",
  messagingSenderId: "118864244649",
  appId: "1:118864244649:web:938c03195a146474f65eb8"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDb = getFirestore(FirebaseApp);
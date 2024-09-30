// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAKlrZasVLijkFL2URN8juFVXedDi9fEgA",
    authDomain: "projet-rento.firebaseapp.com",
    projectId: "projet-rento",
    storageBucket: "projet-rento.appspot.com",
    messagingSenderId: "106185034172",
    appId: "1:106185034172:web:c7aa557548e7d531d303b9",
    measurementId: "G-EL9B4ZE9J6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;
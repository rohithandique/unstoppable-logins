import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB2w2WHOaxgFf1aFrdG-gVit2J4F1zQL6Q",
    authDomain: "rohit-ud-logins.firebaseapp.com",
    projectId: "rohit-ud-logins",
    storageBucket: "rohit-ud-logins.appspot.com",
    messagingSenderId: "921531590298",
    appId: "1:921531590298:web:c9e670c5f27bd0d9dde123"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
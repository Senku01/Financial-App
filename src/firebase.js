import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAv6uJ1rSaZWPZc5j41FZjP7JpMyeciJMI",
  authDomain: "personal-finance-144c4.firebaseapp.com",
  projectId: "personal-finance-144c4",
  storageBucket: "personal-finance-144c4.appspot.com",
  messagingSenderId: "473708327316",
  appId: "1:473708327316:web:c22e3e26f56ab154c3df81",
  measurementId: "G-3SY7LT6CB1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

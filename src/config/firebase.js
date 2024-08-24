import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCwWDIbQjnsMZcpCXRmm4Ureya5ma1JRVw",
  authDomain: "little-lemon-course.firebaseapp.com",
  projectId: "little-lemon-course",
  storageBucket: "little-lemon-course.appspot.com",
  messagingSenderId: "72647307846",
  appId: "1:72647307846:web:27f7b680b452187cff9047",
  measurementId: "G-J2B4D4M5E7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const googleProvider = new GoogleAuthProvider();
export const auth = getAuth(app);
export const db = getFirestore(app);


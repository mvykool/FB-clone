// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage} from 'firebase/storage'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDK2mSVPiH545ejPnfabWUFOyk02ykEoI",
  authDomain: "fb-clone-5c4be.firebaseapp.com",
  projectId: "fb-clone-5c4be",
  storageBucket: "fb-clone-5c4be.appspot.com",
  messagingSenderId: "933349211063",
  appId: "1:933349211063:web:f1f7603c3e4f1d74f58632"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();

export { app, db, storage, auth };
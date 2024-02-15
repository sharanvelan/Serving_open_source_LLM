// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGI3MVCfLENbgXooB-Ih3B5EdLgyExRFY",
  authDomain: "customer-data-e4051.firebaseapp.com",
  projectId: "customer-data-e4051",
  storageBucket: "customer-data-e4051.appspot.com",
  messagingSenderId: "47281870550",
  appId: "1:47281870550:web:5c1c6a7d28a638f95b5b77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth=getAuth(app);

export const db=getFirestore(app);
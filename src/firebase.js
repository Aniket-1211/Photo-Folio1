// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6QstIG_CjSpz0XmwRP_4QtD2YS4Kb4Jw",
  authDomain: "photofolio-d18a7.firebaseapp.com",
  projectId: "photofolio-d18a7",
  storageBucket: "photofolio-d18a7.firebasestorage.app",
  messagingSenderId: "13584585651",
  appId: "1:13584585651:web:205880d3e78089e315f1c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
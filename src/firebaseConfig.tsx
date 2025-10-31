// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDWg8Kvi_kjNgY0YkBVLdXg073dtgpB4HA",
  authDomain: "futuro-trabalho.firebaseapp.com",
  databaseURL: "https://futuro-trabalho-default-rtdb.firebaseio.com",
  projectId: "futuro-trabalho",
  storageBucket: "futuro-trabalho.firebasestorage.app",
  messagingSenderId: "815459670163",
  appId: "1:815459670163:web:2fc3a3f167192c5376d566",
  measurementId: "G-W38EQBBCJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const db = getDatabase(app);
 export const auth = getAuth(app);

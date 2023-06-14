
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

console.log();
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "riverr-1fc6e.firebaseapp.com",
  projectId: "riverr-1fc6e",
  storageBucket: "riverr-1fc6e.appspot.com",
  messagingSenderId: "378739917889",
  appId: "1:378739917889:web:b258bc8bd6253fe48bb2c0"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


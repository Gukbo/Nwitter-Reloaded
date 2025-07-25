import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCA5N3QXX1F2pzXiYqNXiIkrXeKLIxpL5U",
  authDomain: "nwitter-reloaded-2197c.firebaseapp.com",
  projectId: "nwitter-reloaded-2197c",
  storageBucket: "nwitter-reloaded-2197c.firebasestorage.app",
  messagingSenderId: "581444183493",
  appId: "1:581444183493:web:301ac311527da33f78d7ac",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);

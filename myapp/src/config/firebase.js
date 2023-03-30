import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4HQ2_nOks5RMBZjpL3tWr9LzL0Hm4_GE",
  authDomain: "mymoney-50c3e.firebaseapp.com",
  projectId: "mymoney-50c3e",
  storageBucket: "mymoney-50c3e.appspot.com",
  messagingSenderId: "845438977933",
  appId: "1:845438977933:web:33cb6486f2533a6caa1fc4",
  measurementId: "G-8G4YVK7YHM",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const store = getFirestore(app);
const storage = getStorage(app);

export { auth, store, storage };

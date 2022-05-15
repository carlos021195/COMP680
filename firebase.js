import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCeQSVrCsVfM8f_fU9TrYRW5RJJhpH8ypE",
  authDomain: "my-proj-1c47e.firebaseapp.com",
  projectId: "my-proj-1c47e",
  storageBucket: "my-proj-1c47e.appspot.com",
  messagingSenderId: "845631022070",
  appId: "1:845631022070:web:6f67ca9cb5d32ad83e5dd7"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

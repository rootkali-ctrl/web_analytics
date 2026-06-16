import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuslbIKNkv2lkocH1wW0uq5mpwZGP8V8o",
  authDomain: "talk-1b8c9.firebaseapp.com",
  projectId: "talk-1b8c9",
  storageBucket: "talk-1b8c9.appspot.com",
  messagingSenderId: "895744524538",
  appId: "1:895744524538:web:68101319c191739f4ac943"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

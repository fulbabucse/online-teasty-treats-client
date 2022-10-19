// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjkjwwgfhqVWBWWkfFggvTvDiwAptJ7hE",
  authDomain: "online-tasty-treats.firebaseapp.com",
  projectId: "online-tasty-treats",
  storageBucket: "online-tasty-treats.appspot.com",
  messagingSenderId: "538445351279",
  appId: "1:538445351279:web:a245c582ed7f2fabf7c09a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;

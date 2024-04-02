// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn-0YAD906ofHw7Onb4CElZR3IxWRAEnk",
  authDomain: "user-access-project-9600d.firebaseapp.com",
  projectId: "user-access-project-9600d",
  storageBucket: "user-access-project-9600d.appspot.com",
  messagingSenderId: "625355241380",
  appId: "1:625355241380:web:7251188d822a1ddd73b331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
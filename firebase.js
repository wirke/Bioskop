// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbxIHC6MaeCRyyu0WW68GucyzLr_qfaLo",
  authDomain: "bioskop-46a84.firebaseapp.com",
  projectId: "bioskop-46a84",
  storageBucket: "bioskop-46a84.appspot.com",
  messagingSenderId: "346276188726",
  appId: "1:346276188726:web:ce2cc648a51695173e3e97",
  measurementId: "G-MWT0HSTNDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
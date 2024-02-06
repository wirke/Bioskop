import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

const firebaseConfig = {
  apiKey: "AIzaSyBbxIHC6MaeCRyyu0WW68GucyzLr_qfaLo",
  authDomain: "bioskop-46a84.firebaseapp.com",
  projectId: "bioskop-46a84",
  storageBucket: "bioskop-46a84.appspot.com",
  messagingSenderId: "346276188726",
  appId: "1:346276188726:web:ce2cc648a51695173e3e97",
  measurementId: "G-MWT0HSTNDJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const perf = getPerformance(app);

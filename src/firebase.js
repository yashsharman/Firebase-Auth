import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBCKyABX33R7-j19nJJDbWZ3UsAJnmUbl8",
  authDomain: "fir-signin-2fb4e.firebaseapp.com",
  projectId: "fir-signin-2fb4e",
  storageBucket: "fir-signin-2fb4e.appspot.com",
  messagingSenderId: "856978923542",
  appId: "1:856978923542:web:d1774c797324d7786e9537",
  measurementId: "G-8HWQW1N9GG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };

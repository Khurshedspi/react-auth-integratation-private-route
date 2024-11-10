// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_LBe0FrW5NPpwyGWue_eSZAdQ7aTIoe0",
  authDomain: "auth-moha-milon-6754e.firebaseapp.com",
  projectId: "auth-moha-milon-6754e",
  storageBucket: "auth-moha-milon-6754e.firebasestorage.app",
  messagingSenderId: "592299543579",
  appId: "1:592299543579:web:ad66a96f4a19f5ddb17cbe",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

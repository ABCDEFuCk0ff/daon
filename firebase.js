import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDB_7oMRX_OUjrlZCMavczCeymETrEf5z4",
  authDomain: "daonteam1-e1311.firebaseapp.com",
  projectId: "daonteam1-e1311",
  storageBucket: "daonteam1-e1311.firebasestorage.app",
  messagingSenderId: "656838669289",
  appId: "1:656838669289:web:5b3b38c6f1b71dc1655178",
  measurementId: "G-Z4K33DTJJK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

export { auth, db, googleProvider };
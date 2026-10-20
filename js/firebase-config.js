import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAb21A8xIv1n99biiKX_dLj43QBR6rddHg",
  authDomain: "zara-nail.firebaseapp.com",
  projectId: "zara-nail",
  storageBucket: "zara-nail.firebasestorage.app",
  messagingSenderId: "344377626013",
  appId: "1:344377626013:web:63039a78264e54f89ab374",
  measurementId: "G-B381Y523GP"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
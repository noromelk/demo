import { auth, db } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
    const errorMsg = document.getElementById("errorMsg");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Ստուգում ենք օգտատիրոջ դերը բազայում
      const userDoc = await getDoc(doc(db, "users", user.uid));
      
      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.role === "owner") {
          window.location.href = "owner.html";
        } else if (userData.role === "worker") {
          window.location.href = "worker.html";
        }
      } else {
        errorMsg.innerText = "Օգտատիրոջ տվյալները չեն գտնվել:";
      }
    } catch (error) {
      errorMsg.innerText = "Սխալ էլ․ հասցե կամ գաղտնաբառ:";
    }
  });
}
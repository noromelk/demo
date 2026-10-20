import { db } from "./firebase-config.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const addWorkerForm = document.getElementById("addWorkerForm");

if (addWorkerForm) {
  addWorkerForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const branchId = document.getElementById("branchSelect").value;
    const email = document.getElementById("workerEmail").value;
    const password = document.getElementById("workerPassword").value;
    const successMsg = document.getElementById("successMsg");

    try {
      // Այստեղ տվյալները պահվում են Firestore-ում
      // Իրականում Auth User սարքելու համար կարող ես օգտագործել Secondary Firebase App կամ Admin SDK
      const newWorkerId = "worker_" + Date.now();

      await setDoc(doc(db, "users", newWorkerId), {
        email: email,
        role: "worker",
        branchId: branchId,
        name: "", // Աշխատողը ինքը կլրացնի
        service: "", // Աշխատողը ինքը կլրացնի
        createdAt: new Date()
      });

      successMsg.innerText = `Աշխատակիցը ավելացված է (${branchId}): Փոխանցեք Email/Password-ը:`;
      addWorkerForm.reset();
    } catch (error) {
      console.error("Error adding worker: ", error);
    }
  });
}
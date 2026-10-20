import { auth, db } from "./firebase-config.js";
import { doc, updateDoc, collection, addDoc, query, where, getDocs } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 1. Պրոֆիլի պահպանում
const saveProfileBtn = document.getElementById("saveProfileBtn");
if (saveProfileBtn) {
  saveProfileBtn.addEventListener("click", async () => {
    const user = auth.currentUser;
    const name = document.getElementById("workerName").value;
    const service = document.getElementById("workerService").value;

    if (user) {
      await updateDoc(doc(db, "users", user.uid), {
        name: name,
        service: service
      });
      alert("Պրոֆիլը թարմացվեց:");
    }
  });
}

// 2. Ազատ ժամի ավելացում
const addSlotBtn = document.getElementById("addSlotBtn");
if (addSlotBtn) {
  addSlotBtn.addEventListener("click", async () => {
    const user = auth.currentUser;
    const date = document.getElementById("slotDate").value;
    const time = document.getElementById("slotTime").value;

    if (user && date && time) {
      await addDoc(collection(db, "slots"), {
        workerId: user.uid,
        date: date,
        time: time,
        isBooked: false
      });
      alert("Ժամը ավելացվեց:");
    }
  });
}
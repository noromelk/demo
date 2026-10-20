import { db } from "./firebase-config.js";
import { collection, getDocs, query, where } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

console.log("Main script loaded successfully!");

// 1. Հասցեների ընտրություն
const branchBtns = document.querySelectorAll(".branch-btn");
branchBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const selectedBranch = e.target.getAttribute("data-branch");
    console.log("Selected Branch:", selectedBranch);
    
    // Անցնում ենք 2-րդ քայլին
    document.getElementById("step1").style.display = "none";
    document.getElementById("step2").style.display = "block";
  });
});
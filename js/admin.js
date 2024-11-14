// admin.js - Handles admin login and dashboard actions
const adminPassword = "POancakes45";

function adminLogin() {
  const enteredPassword = document.getElementById("admin-password").value;
  if (enteredPassword === adminPassword) {
    document.getElementById("login-section").style.display = "none";
    document.getElementById("admin-dashboard").style.display = "block";
  } else {
    alert("Incorrect password. Please try again.");
  }
}

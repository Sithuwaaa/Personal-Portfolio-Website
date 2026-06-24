/* =============================================
   SITHARA PERERA — PORTFOLIO JAVASCRIPT
   script.js
   ============================================= */

/* -------- 1. HAMBURGER MENU TOGGLE -------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  // When the hamburger button is clicked
  hamburger.addEventListener("click", function () {
    // Toggle the "open" class on the nav menu and the button
    navLinks.classList.toggle("open");
    hamburger.classList.toggle("open");
  });

  // Close the menu when any nav link is clicked
  navLinks.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
    });
  });
}

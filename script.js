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

/* -------- 2. SMOOTH SCROLL for anchor links -------- */
// For any link that points to a section on the same page (starts with #)
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");

    // Ignore empty "#" links
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      // Smoothly scroll to the target section
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

/* -------- 3. ACTIVE NAV HIGHLIGHT -------- */
// Highlights the nav link matching the current page
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navItems = document.querySelectorAll(".nav-links .nav-link");

navItems.forEach(function (link) {
  const linkPage = link.getAttribute("href").split("/").pop();

  // If this link points to the page we're on, mark it active
  if (linkPage === currentPage) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});

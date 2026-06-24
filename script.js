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

/* -------- 4. CONTACT FORM VALIDATION -------- */
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Stop the form from submitting normally

    // Get the input fields
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const messageField = document.getElementById("message");

    // Get the error message spans
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const messageError = document.getElementById("message-error");

    // Clear any previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    nameField.classList.remove("input-error");
    emailField.classList.remove("input-error");
    messageField.classList.remove("input-error");

    let isValid = true;

    // Check name is not empty
    if (nameField.value.trim() === "") {
      nameError.textContent = "Please enter your full name.";
      nameField.classList.add("input-error");
      isValid = false;
    }

    // Check email is valid using a pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailField.value.trim() === "") {
      emailError.textContent = "Please enter your email address.";
      emailField.classList.add("input-error");
      isValid = false;
    } else if (!emailPattern.test(emailField.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      emailField.classList.add("input-error");
      isValid = false;
    }

    // Check message is at least 10 characters
    if (messageField.value.trim().length < 10) {
      messageError.textContent =
        "Please write a message (at least 10 characters).";
      messageField.classList.add("input-error");
      isValid = false;
    }

    // If everything is valid, show success and reset the form
    if (isValid) {
      const successMsg = document.getElementById("form-success");
      successMsg.hidden = false;
      contactForm.reset();

      // Hide the success message after 5 seconds
      setTimeout(function () {
        successMsg.hidden = true;
      }, 5000);
    }
  });
}

// Get all the nav links
const navLinks = document.querySelectorAll("nav a");

// Add smooth scrolling to nav links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const targetId = link.getAttribute("href").slice(1); // Get the target section ID
    const targetSection = document.getElementById(targetId); // Find the target section

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" }); // Smoothly scroll to the section
    }
  });
});

// Listen for scroll events
window.addEventListener("scroll", () => {
  let current = "";

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Typing effect code remains unchanged
const typingElement = document.getElementById("typing");
const words = [
  "Frontend Developer",
  "Coder",
  "Web Designer",
  "Freelancer",
  "UI/UX Designer",
];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 75;
const delayBetweenWords = 800;

function typeEffect() {
  currentWord = words[wordIndex];

  if (!isDeleting) {
    typingElement.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;

    if (letterIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
      return;
    }
  } else {
    typingElement.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;

    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(typeEffect, isDeleting ? erasingSpeed : typingSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});

// Redirect button
document
  .getElementById("redirectButton")
  .addEventListener("click", function () {
    window.location.href = "https://example.com";
  });

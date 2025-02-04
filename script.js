// Toggle Navbar for Burger Menu
const burger = document.getElementById("burger");
const navbar = document.getElementById("navbar");

burger.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

// Intersection Observer for Fade-In Animation
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Feather Splash Background
function createFeatherSplash() {
  const heroSection = document.getElementById("hero");

  for (let i = 0; i < 50; i++) {
    const feather = document.createElement("div");
    feather.classList.add("feather");

    // Randomize position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    feather.style.left = `${x}vw`;
    feather.style.top = `${y}vh`;

    // Randomize size
    const size = Math.random() * 10 + 5; // Between 5px and 15px
    feather.style.width = `${size}px`;
    feather.style.height = `${size}px`;

    // Randomize animation duration and delay
    const duration = Math.random() * 5 + 3; // Between 3s and 8s
    const delay = Math.random() * 5; // Up to 5s delay
    feather.style.animationDuration = `${duration}s`;
    feather.style.animationDelay = `${delay}s`;

    heroSection.appendChild(feather);
  }
}

// Initialize Feather Splash
createFeatherSplash();

// Mouse Interaction
const feathers = document.querySelectorAll(".feather");
const heroSection = document.getElementById("hero");

heroSection.addEventListener("mousemove", (e) => {
  const { clientX, clientY } = e;

  feathers.forEach((feather) => {
    const rect = feather.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate distance between mouse and feather
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // Apply slight movement based on distance
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistance = 300; // Maximum distance for interaction effect
    const strength = Math.min(distance / maxDistance, 1);

    feather.style.transform = `translate(${deltaX * strength * 0.1}px, ${
      deltaY * strength * 0.1
    }px)`;
  });
});

// Scroll to Hero Functionality
function scrollToHero() {
  document.getElementById("hero").scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

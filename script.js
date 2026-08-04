// =========================================================
// Mobile menu
// =========================================================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  hamburger.classList.remove("open");
  mobileMenu.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

function toggleMobileMenu() {
  const isOpen = mobileMenu.classList.toggle("open");
  hamburger.classList.toggle("open", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
}

hamburger.addEventListener("click", toggleMobileMenu);

document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// =========================================================
// Navbar scroll shadow
// =========================================================
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});

// =========================================================
// Typewriter effect
// =========================================================
const roles = [
  "Full Stack Web Developer",
  "React & Node.js Enthusiast",
  "Problem Solver",
  "UI/UX Explorer",
];
const typewriterEl = document.getElementById("typewriterText");
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = roles[roleIndex];

  if (!deleting) {
    charIndex++;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1600);
      return;
    }
  } else {
    charIndex--;
    typewriterEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeLoop, deleting ? 40 : 80);
}

if (typewriterEl) {
  typeLoop();
}

// =========================================================
// Scroll reveal
// =========================================================
const revealEls = document.querySelectorAll(".reveal, .reveal-stagger");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// =========================================================
// Active nav link on scroll
// =========================================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);

sections.forEach((section) => sectionObserver.observe(section));

// =========================================================
// Back to top button
// =========================================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("visible", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================================================
// Contact form (no backend wired up — friendly placeholder)
// =========================================================
const contactForm = document.querySelector("#contact form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = contactForm.querySelector("button");
    const originalText = button.textContent;
    button.textContent = "Message Sent!";
    contactForm.reset();
    setTimeout(() => {
      button.textContent = originalText;
    }, 2200);
  });
}

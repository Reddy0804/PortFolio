document.addEventListener("DOMContentLoaded", () => {
  // Preloader removal
  const preloader = document.getElementById("preloader");
  window.addEventListener("load", () => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  });

  // Sticky Header Effect
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Dark Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️"
      : "🌙";
  });

  // Animate Progress Bars in Skills Section
  const progressBars = document.querySelectorAll(".progress-bar");
  progressBars.forEach((bar) => {
    const percentage = bar.getAttribute("data-percentage");
    setTimeout(() => {
      bar.style.width = percentage + "%";
    }, 500);
  });

  // Reveal Sections on Scroll (repeat animation each time they enter the viewport)
  const reveals = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    { threshold: 0.2 }
  );
  reveals.forEach((section) => revealObserver.observe(section));

  // Scroll To Top Button
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});

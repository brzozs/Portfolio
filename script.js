document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for internal anchor links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        const href = this.getAttribute("href");
        if (href.startsWith("#")) {
          // In-page link: smooth scroll
          event.preventDefault();
          const targetSection = document.querySelector(href);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }
        // (Links to other pages are handled by normal navigation)
      });
    });
  
    // Reveal sections on scroll (fade-in effect)
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
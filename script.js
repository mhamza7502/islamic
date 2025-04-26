document.addEventListener('DOMContentLoaded', function() {
  // Mobile hamburger toggle
  const menuButton = document.getElementById('menuButton');
  const navLinks = document.getElementById('navLinks');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Smooth scrolling for links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
      }

      // Close nav on mobile after click
      if (window.innerWidth <= 768 && navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
      }
    });
  });

  // Scroll reveal animation
  const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const elementsToReveal = document.querySelectorAll('.reveal-text, .reveal-element');
  elementsToReveal.forEach(element => {
    revealObserver.observe(element);
  });
});

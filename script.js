document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', function() {
      this.classList.toggle('active');
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '60px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navLinks.style.backdropFilter = 'blur(20px)';
        navLinks.style.padding = '20px';
        navLinks.style.borderBottom = '1px solid #e2e2e2';
      }
    });
  }

  // Smooth scrolling for navigation links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }

      // Close menu after clicking link (for mobile)
      if (window.innerWidth <= 768 && navLinks && navLinks.style.display === 'flex') {
        menuButton.classList.remove('active');
        navLinks.style.display = 'none';
      }
    });
  });

  // Scroll animation reveal
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

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

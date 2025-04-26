document.addEventListener('DOMContentLoaded', function () {

  // Mobile Hamburger Toggle
  const menuButton = document.getElementById('menuButton');
  const navLinks = document.getElementById('navLinks');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show');
      menuButton.classList.toggle('active');
    });
  }

  // Smooth Scroll for Anchor Links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 70,
          behavior: 'smooth'
        });
      }
      // Close mobile menu after click
      if (navLinks.classList.contains('show')) {
        navLinks.classList.remove('show');
        menuButton.classList.remove('active');
      }
    });
  });

  // Scroll Reveal Animation
  const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver(function (entries, revealObserver) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, revealOptions);

  const revealElements = document.querySelectorAll('.reveal-text, .reveal-element');
  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

});

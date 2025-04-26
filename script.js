// Mobile Hamburger Menu
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-button');
  const navLinks = document.querySelector('.nav-links');

  if (menuButton) {
    menuButton.addEventListener('click', function () {
      navLinks.classList.toggle('show');
    });
  }
});

// Reveal animation on scroll
document.addEventListener('DOMContentLoaded', function () {
  const elements = document.querySelectorAll('.reveal-text, .reveal-element');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => observer.observe(el));
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

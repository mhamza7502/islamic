// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  menuButton.addEventListener('click', function() {
    navLinks.classList.toggle('show');
  });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80, // offset for header
        behavior: 'smooth'
      });
    }
  });
});

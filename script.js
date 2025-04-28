// If you have a hamburger, script for toggle (optional if not needed)
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu-button');
  const navLinks = document.getElementById('nav-links');

  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});

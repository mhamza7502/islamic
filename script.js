// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Universal layout fix for all devices and viewport changes
let layoutFixTimeout;
function fixLayoutIssues() {
  // Clear any existing timeout
  clearTimeout(layoutFixTimeout);
  
  // Force layout recalculation after any viewport change
  layoutFixTimeout = setTimeout(function() {
    // Trigger a reflow by accessing offsetHeight
    document.body.offsetHeight;
    
    // Force recalculation of program cards
    const programCards = document.querySelectorAll('.program-card-v2, .program-card-v4');
    programCards.forEach(card => {
      card.style.height = 'auto';
      card.style.minHeight = 'auto';
      // Trigger reflow
      card.offsetHeight;
    });
    
    // Force recalculation of program grid
    const programGrids = document.querySelectorAll('.program-grid');
    programGrids.forEach(grid => {
      grid.style.alignItems = 'stretch';
      // Trigger reflow
      grid.offsetHeight;
    });
    
    // Force recalculation of programs list
    const programsLists = document.querySelectorAll('.programs-list');
    programsLists.forEach(list => {
      list.style.height = 'auto';
      // Trigger reflow
      list.offsetHeight;
    });
  }, 100);
}

// Handle orientation changes (mobile devices)
window.addEventListener('orientationchange', fixLayoutIssues);

// Handle resize events (all devices)
window.addEventListener('resize', fixLayoutIssues);

// Handle window focus events (when switching between tabs/apps)
window.addEventListener('focus', fixLayoutIssues);

// Handle DOM content loaded to ensure initial layout is correct
document.addEventListener('DOMContentLoaded', fixLayoutIssues);

// Handle load event to catch any late layout issues
window.addEventListener('load', fixLayoutIssues);

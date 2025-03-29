// Initialize cards with indexes
document.querySelectorAll('.portfoliocard').forEach((card, index) => {
    card.style.setProperty('--index', index + 1);
  });
  
  // Fallback animation for browsers without ScrollTimeline support
  if (typeof ScrollTimeline === 'undefined') {
    const cards = document.querySelectorAll('.portfoliocard .card__content');
    
    window.addEventListener('scroll', () => {
      const viewportHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      cards.forEach((card, index) => {
        const cardTop = card.closest('.portfoliocard').getBoundingClientRect().top + scrollPosition;
        const progress = Math.min(1, Math.max(0, (scrollPosition - cardTop + viewportHeight) / viewportHeight));
        
        const scale = 1.1 - (0.1 * (cards.length - index - 1)) * progress;
        card.style.transform = `scale(${scale})`;
      });
    });
  }
  // Get the hamburger and mobile menu elements
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle the mobile menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
});

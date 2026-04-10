// ── SMOOTH SCROLLING ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile menu if open
      navLinks.classList.remove('open');
    }
  });
});

// ── MOBILE MENU TOGGLE ──
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// ── PROJECT CARD FILTER ──
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const status = card.getAttribute('data-status');
      if (filter === 'all' || status === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ── NAV SHADOW ON SCROLL ──
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 40) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});
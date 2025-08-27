// Helper
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

// Theme toggle
const themeToggle = $('#theme-toggle');
const root = document.documentElement;

if (localStorage.getItem('theme')) {
  root.setAttribute('data-theme', localStorage.getItem('theme'));
}

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// Burger menu (pakai toggle class)
const burger = $('.burger');
const navLinks = $('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Smooth scroll
$$('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      navLinks.classList.remove('open'); // Tutup menu setelah klik
    }
  });
});

// Intersection animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  },
  { threshold: 0.1 }
);

$$('section').forEach((section) => {
  observer.observe(section);
});

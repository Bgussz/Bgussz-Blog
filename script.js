// basic helpers
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

// theme toggle
const themeToggle = $('#themeToggle');
const rootBody = document.body;
const currentTheme = localStorage.getItem('bg-theme');

if (currentTheme === 'dark') {
  rootBody.classList.add('dark');
  themeToggle.textContent = '☀️';
} else {
  themeToggle.textContent = '🌙';
}

themeToggle.addEventListener('click', () => {
  rootBody.classList.toggle('dark');
  const isDark = rootBody.classList.contains('dark');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('bg-theme', isDark ? 'dark' : 'light');
});

// burger menu (pakai toggle class)
const burger = $('#burger');
const navLinks = $('.nav-links');

burger && burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// smooth scroll
$$('.nav-links a').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navLinks.classList.remove('open'); // close mobile menu
    }
  });
});

// set year
$('#year').textContent = new Date().getFullYear();

// intersection observer for animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.18 });

$$('.animate').forEach(el => observer.observe(el));

const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');

navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

mainNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const header = document.getElementById('site-header');
let lastScroll = window.scrollY;

window.addEventListener('scroll', () => {
  const current = window.scrollY;
  header.style.boxShadow = current > 10 ? '0 8px 24px rgba(42,35,32,0.08)' : 'none';
  lastScroll = current;
});

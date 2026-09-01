document.getElementById('year').textContent = new Date().getFullYear();

const toggle = document.querySelector('.nav-toggle');
const links = document.getElementById('nav-links');

function setMenu(open) {
  if (!toggle || !links) return;
  links.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
}

if (toggle && links) {
  toggle.addEventListener('click', () => {
    setMenu(!links.classList.contains('is-open'));
  });
  links.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setMenu(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setMenu(false);
  });
}

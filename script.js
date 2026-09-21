const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const previousEmail = 'uttamjcareers@gmail.com';
const contactEmail = 'cybercraftstudio@cybercraftstudio.net';

document.querySelectorAll(`a[href*="${previousEmail}"]`).forEach((link) => {
  link.href = link.href.replace(previousEmail, contactEmail);
  if (link.textContent.includes(previousEmail)) link.textContent = contactEmail;
});

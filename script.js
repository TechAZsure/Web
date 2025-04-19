const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const closeBtn = document.getElementById('close-btn');
const darkModeToggle = document.getElementById('dark-mode-toggle');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

closeBtn.addEventListener('click', () => {
  navLinks.classList.remove('show');
});

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

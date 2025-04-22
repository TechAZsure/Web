// Carousel
const slides = document.querySelectorAll('.slide');
const indicators = document.getElementById('indicators');
let currentIndex = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  if (index === 0) dot.classList.add('active');
  indicators.appendChild(dot);
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

function showSlide(index) {
  const carousel = document.getElementById('carousel');
  carousel.style.transform = `translateX(-${index * 100}%)`;
  slides.forEach(s => s.classList.remove('active'));
  slides[index].classList.add('active');

  const dots = indicators.querySelectorAll('span');
  dots.forEach(dot => dot.classList.remove('active'));
  dots[index].classList.add('active');

  currentIndex = index;
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 5000);

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
// Currently not used, but ready for dynamic interactivity
// Future feature: Add to cart logic, dynamic search, etc.
// Placeholder console log for button clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Item added to cart!');
  });
});



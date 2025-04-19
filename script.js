// Smooth scroll on hover for specific links
document.querySelectorAll('.hover-scroll').forEach(link => {
  link.addEventListener('mouseenter', function(e) {
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
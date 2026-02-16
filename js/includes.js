// Load HTML includes
document.addEventListener('DOMContentLoaded', () => {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(async (el) => {
    const file = el.getAttribute('data-include');
    try {
      const response = await fetch(file + '?v=' + Date.now());
      if (response.ok) {
        el.outerHTML = await response.text();
      }
    } catch (e) {
      console.error(`Failed to load ${file}:`, e);
    }
  });

  // Wiggle peek character on click
  const peekChar = document.querySelector('.peek-character');
  if (peekChar) {
    peekChar.addEventListener('click', () => {
      peekChar.style.animation = 'none';
      peekChar.offsetHeight; // force reflow
      peekChar.style.animation = 'wiggle 0.6s ease-in-out 1 forwards';
    });
  }

  // Trigger peek character animation when contact section scrolls into view
  const contact = document.querySelector('#contact .container');
  if (contact) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          contact.classList.add('is-visible');
          observer.disconnect();
        }
      });
    }, { threshold: 0.5 });
    observer.observe(contact);
  }
});

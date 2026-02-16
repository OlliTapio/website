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

  // Peek character wiggle helpers
  const peekChar = document.querySelector('.peek-character');
  const triggerWiggle = () => {
    if (!peekChar) return;
    peekChar.style.animation = 'none';
    peekChar.offsetHeight;
    peekChar.style.animation = 'wiggle 0.6s ease-in-out 1';
  };

  // Wiggle peek character on click
  if (peekChar) {
    peekChar.addEventListener('click', triggerWiggle);
  }

  // Trigger peek character animation when contact section scrolls into view
  const contact = document.querySelector('#contact .container');
  if (contact) {
    const isMobile = window.matchMedia('(max-width: 640px)').matches;
    let peekTimeout = null;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          peekTimeout = setTimeout(() => {
            contact.classList.add('is-visible');
            // Wiggle after the slide-in transition finishes
            setTimeout(triggerWiggle, 400);
          }, isMobile ? 1200 : 400);
        } else {
          clearTimeout(peekTimeout);
          contact.classList.remove('is-visible');
          if (peekChar) peekChar.style.animation = '';
        }
      });
    }, { threshold: isMobile ? 0.8 : 0.5 });
    observer.observe(contact);
  }
});

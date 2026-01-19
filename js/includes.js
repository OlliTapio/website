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
});

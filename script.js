// Mobile nav toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      links.style.display = links.classList.contains('open') ? 'flex' : '';
    });
  }

  // Contact form (front-end only — swap the alert for a real endpoint later)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Message sent ✓';
      btn.disabled = true;
      form.reset();
      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 2600);
    });
  }
});

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

  // Contact form — submits to Formspree so messages actually reach your inbox
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const original = btn.textContent;
      btn.textContent = 'Sending...';
      btn.disabled = true;

      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          btn.textContent = 'Message sent ✓';
          form.reset();
        } else {
          btn.textContent = 'Something went wrong — try again';
        }
      } catch (err) {
        btn.textContent = 'Something went wrong — try again';
      }

      setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 3200);
    });
  }
});

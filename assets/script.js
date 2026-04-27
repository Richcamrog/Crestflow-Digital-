// Contact form — fetch submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Honeypot check
    if (document.getElementById('website_url_confirm').value) return;

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = 'Sending…';

    try {
      const data = new FormData(contactForm);
      // Fire contacts dashboard save in background — don't block success screen
      fetch('https://aivision.srv1480153.hstgr.cloud/contacts-api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(Object.fromEntries(data)).toString(),
      }).catch(() => {});
      await fetch('https://n8n.srv1480153.hstgr.cloud/webhook/crestflow-contact', {
        method: 'POST',
        body: data,
      });
      contactForm.style.display = 'none';
      document.getElementById('formSuccess').style.display = 'block';
    } catch {
      btn.disabled = false;
      btn.textContent = originalText;
      btn.insertAdjacentHTML('afterend', '<p style="color:#e53e3e;margin-top:10px;font-size:0.875rem;">Something went wrong — please try again or email me directly.</p>');
    }
  });
}

// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

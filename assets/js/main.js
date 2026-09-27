(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      nav.classList.toggle('open', open);
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      }
    });
  }
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
  const form = document.querySelector('#inquiry');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const message = `Hello, I would like to enquire about MM2H.\nName: ${data.get('name')}\nCountry: ${data.get('country') || 'Not specified'}\nInterest: ${data.get('interest')}\nMessage: ${data.get('message')}`;
    window.open(`https://wa.me/8801332843551?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
})();

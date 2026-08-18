(() => {
  const header = document.querySelector('[data-tempera-header]');
  const menu = document.querySelector('#TemperaMobileMenu');
  const toggle = document.querySelector('[data-tempera-menu-toggle]');

  if (!header || !menu || !toggle) return;

  const setMenu = (open) => {
    menu.hidden = !open;
    menu.classList.toggle('is-open', open);
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('tempera-menu-open', open);
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setMenu(false);
      toggle.focus();
    }
  });

  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 380 && window.innerWidth >= 768);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) setMenu(false);
    updateHeader();
  });
})();

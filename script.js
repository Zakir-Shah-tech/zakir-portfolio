// Only job of JavaScript on this site: open and close the menu on small screens.
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); btn.setAttribute('aria-expanded', 'false'); }
});

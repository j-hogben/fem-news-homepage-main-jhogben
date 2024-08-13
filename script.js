const hamburgerMenu = document.querySelector('#hamburger-menu');
const hamburgerCheckbox = hamburgerMenu.querySelector('input[type="checkbox"]');

hamburgerCheckbox.addEventListener('change', () => {
  if (hamburgerCheckbox.checked) {
    hamburgerMenu.setAttribute('aria-expanded', true);
  } else {
    hamburgerMenu.setAttribute('aria-expanded', false);
  }
});

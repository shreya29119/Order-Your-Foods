function classToggle() {
  const navs = document.querySelectorAll('.nav-items')

  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle);

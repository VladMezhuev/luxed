const iconMenu = document.getElementById('js-trigger')
iconMenu.addEventListener('click', () => {
  const menu = document.getElementById('js-menu')
  menu.classList.toggle('is-active')
  iconMenu.classList.toggle('is-active')
})

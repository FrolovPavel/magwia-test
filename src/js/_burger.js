const burgerBtn = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')

burgerBtn.addEventListener('click', toggleNav)


function toggleNav () {
  burgerBtn.classList.toggle('active-nav')
  nav.classList.toggle('active-nav')
  document.body.classList.toggle('no-scroll')
  window.addEventListener('resize', removeNav)
}

function removeNav () {
  burgerBtn.classList.remove('active-nav')
  nav.classList.remove('active-nav')
  document.body.classList.remove('no-scroll')
  window.removeEventListener('resize', removeNav)
}

const burgerBtn = document.querySelector('.header__burger')
const nav = document.querySelector('.nav')

burgerBtn.addEventListener('click', () => {
  burgerBtn.classList.toggle('active')
  nav.classList.toggle('active')
  document.body.classList.toggle('no-scroll')
})

window.addEventListener('resize', () => {
  burgerBtn.classList.remove('active')
  nav.classList.remove('active')
  document.body.classList.remove('no-scroll')
})

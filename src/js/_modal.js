const btnsRequest = document.querySelectorAll('.request')
const btnCloseModal = document.querySelector('.modal__close')
const btnModal = document.querySelector('.modal__btn')
const modal = document.querySelector('.modal')

function addListenerBtns () {
  btnCloseModal.addEventListener('click', hideModal)
  btnModal.addEventListener('click', hideModal)
  modal.addEventListener('click', hideModal)

  btnsRequest.forEach(btn => {
    btn.addEventListener('click', showModal)
  })

}

function showModal () {
  modal.classList.add('active-modal')
  document.body.classList.add('no-scroll')
  window.addEventListener('keydown', hideModal)
}

function hideModal (event) {
  const condition = event.target === modal
    || event.target.parentElement === btnCloseModal
    || event.target.parentElement === btnModal
    || event.target.nodeName === 'use'
    || event.keyCode === 27

  if(condition) {
    modal.classList.remove('active-modal')
    document.body.classList.remove('no-scroll')
    window.removeEventListener('keydown', hideModal)
  }
}

addListenerBtns()

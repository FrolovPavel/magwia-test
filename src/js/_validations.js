const inputs = document.querySelectorAll('.modal__input')
const modalBtn = document.querySelector('.modal__btn')
const regPhone = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
const regEmail = /^\S+@\S+\.\S+$/

function addListenerInputs () {
  inputs.forEach(input => {
    input.addEventListener('input', validateInput)
  })
}

function validateInput (event) {
  if(event.target.name === 'fio') {
    let isValid = event.target.value.length >= 3
    isValid
      ? removeNotValidStyle(event)
      : addNotValidStyle(event)
  }
  if(event.target.name === 'email') {
    let isValid = regEmail.test(event.target.value)
    isValid
      ? removeNotValidStyle(event)
      : addNotValidStyle(event)

  }
  if(event.target.name === 'phone') {
    let isValid = regPhone.test(event.target.value)
    isValid
      ? removeNotValidStyle(event)
      : addNotValidStyle(event)
  }

  undisabledBtn()
}

function addNotValidStyle (event) {
  event.target.classList.add('not-valid')
  event.target.classList.remove('valid')
}

function removeNotValidStyle (event) {
  event.target.classList.add('valid')
  event.target.classList.remove('not-valid')
}

function undisabledBtn () {
  let isDisabled = false
  inputs.forEach(input => {
    if(!input.classList.contains('valid')) {
      isDisabled = true
    }
  })
  modalBtn.disabled = isDisabled

}

addListenerInputs()

const btnRequest = document.querySelector('.articles__btn')
const articlesWrapper = document.querySelector('.articles__wrapper')
const api = 'https://my-json-server.typicode.com/FrolovPavel/magwai-db/cards'
let cards = []
const limit = 5
let start = 0

btnRequest.addEventListener('click', fetchCards)

async function fetchCards ()  {
  if(start >= 20) return
  btnRequest.disabled = true

  try {
    const response = await fetch(`${api}?_start=${start}&_limit=${limit}`)
    const result = await response.json()

    cards = result
    start += limit

    btnRequest.disabled = false
    if(start >= 20) btnRequest.style.display = 'none'
    renderCards()
  } catch (e) {
    console.log(`Ошибка получения данных ${e}`)
  }
}

function formatDate (dateIso) {
  let date = new Date(dateIso)

  return date.toLocaleString('en-us', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

function renderCards () {
  cards.forEach(card => {
    articlesWrapper.insertAdjacentHTML( 'beforeend',
`<article class="articles__card card">
          <img class="card__image" src="${card.image}" alt="image card">
          <div class="card__wrapper">
              <h3 class="card__title">${card.title}</h3>
              <p class="card__subtitle">
                  How to increase your productivity with a Music
              </p>
              <p class="card__text">
                  Sed ut perspiciatis unde omnis iste natus error 
                  sit voluptatem santium doloremque laudantium, 
                  totam rem sed ut perspiciatis unde omnis iste 
                  natus error sit voluptatem accusantium dolo…
              </p>
              <div class="card__author">
                  Posted by <span>${card.author.name}</span>, on 
                  <time datetime="${card.author.timePosted}">
                      ${formatDate(card.author.timePosted)}
                  </time>
              </div>
              <button class="btn btn--dark">Continue reading</button>
          </div>
      </article>`
    )
  })
}



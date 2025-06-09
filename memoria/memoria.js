document.addEventListener('DOMContentLoaded', () => {
    // opções de cartas (animais e objetos infantis)
    const cards = [
      { name: 'bola', img: 'images_memoria/bola.png' },
      { name: 'cachorro', img: 'images_memoria/cachorro.png' },
      { name: 'carro', img: 'images_memoria/carro.png' },
      { name: 'cavalo', img: 'images_memoria/cavalo.png' },
      { name: 'coelho', img: 'images_memoria/coelho.png' },
      { name: 'gato', img: 'images_memoria/gato.png' },
      { name: 'macaco', img: 'images_memoria/macaco.png' },
      { name: 'pato', img: 'images_memoria/pato.png' },
      { name: 'bola', img: 'images_memoria/bola.png' },
      { name: 'cachorro', img: 'images_memoria/cachorro.png' },
      { name: 'carro', img: 'images_memoria/carro.png' },
      { name: 'cavalo', img: 'images_memoria/cavalo.png' },
      { name: 'coelho', img: 'images_memoria/coelho.png' },
      { name: 'gato', img: 'images_memoria/gato.png' },
      { name: 'macaco', img: 'images_memoria/macaco.png' },
      { name: 'pato', img: 'images_memoria/pato.png' },
    ]

    // embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random())

    // recuperar elementos
    const board = document.querySelector('.board')
    const resultView = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    // criar o quadro de cartas
    function createBoard() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images_memoria/board.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        board.appendChild(card)
      }
    }

    // checagem de combinações
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]

      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images_memoria/board.png')
        cards[optionTwoId].setAttribute('src', 'images_memoria/board.png')
        alert('Você clicou na mesma imagem')
      } else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'images_memoria/check.png')
        cards[optionTwoId].setAttribute('src', 'images_memoria/check.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images_memoria/board.png')
        cards[optionTwoId].setAttribute('src', 'images_memoria/board.png')
      }
      cardsChosen = []
      cardsChosenId = []
      resultView.textContent = 'Pares Encontrados: ' + cardsWon.length
      if  (cardsWon.length === cards.length / 2) {
        resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
      }
    }

    // virar as cartas
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500)
      }
    }

    createBoard()
})

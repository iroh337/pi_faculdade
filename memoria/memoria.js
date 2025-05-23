document.addEventListener('DOMContentLoaded', () => {
    //opções de cartas
    const cards = [
      {
        name: 'android',
        img: 'images_memoria/android.png'
      },
      {
        name: 'chrome',
        img: 'images_memoria/chrome.png'
      },
      {
        name: 'git',
        img: 'images_memoria/git.png'
      },
      {
        name: 'stackoverflow',
        img: 'images_memoria/stackoverflow.png'
      },
      {
        name: 'linux',
        img: 'images_memoria/linux.png'
      },
      {
        name: 'github',
        img: 'images_memoria/github.png'
      },
      {
        name: 'android',
        img: 'images_memoria/android.png'
      },
      {
        name: 'chrome',
        img: 'images_memoria/chrome.png'
      },
      {
        name: 'git',
        img: 'images_memoria/git.png'
      },
      {
        name: 'stackoverflow',
        img: 'images_memoria/stackoverflow.png'
      },
      {
        name: 'linux',
        img: 'images_memoria/linux.png'
      },
      {
        name: 'github',
        img: 'images_memoria/github.png'
      }
    ]
  
    //embaralhar todas as cartas
    cards.sort(() => 0.5 - Math.random())
  
    //recupaerar elementos
    const board = document.querySelector('.board')
    const resultView = document.querySelector('#result')
    let cardsChosen = [] //cartas escolhidas
    let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
    let cardsWon = [] //cartas combinadas
  
    //criar o quadro de cartas
    function createBoard() {
      for (let i = 0; i < cards.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images_memoria/board.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        board.appendChild(card)
      }
    }
  
    //checagem de combinações
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      //verificar clique na mesma imagem 
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images_memoria/board.png')
        cards[optionTwoId].setAttribute('src', 'images_memoria/board.png')
        alert('Você clicou na mesma imagem')
      }
      //verificar combinação se click em imagens diferentes
      else if (cardsChosen[0] === cardsChosen[1]) {
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
      //mostrar placar
      resultView.textContent = 'Pares Encontrados: '+cardsWon.length
      if  (cardsWon.length === cards.length/2) {
        resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
      }
    }
  
    //virar as cartas
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cards[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cards[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  
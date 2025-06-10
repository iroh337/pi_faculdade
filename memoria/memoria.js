// Espera o carregamento completo do conteúdo HTML antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

  // Lista de cartas (pares de imagens com nomes) que serão usadas no jogo da memória
  const cards = [
    { name: 'bola', img: 'images_memoria/bola.png' },
    { name: 'cachorro', img: 'images_memoria/cachorro.png' },
    { name: 'carro', img: 'images_memoria/carro.png' },
    { name: 'cavalo', img: 'images_memoria/cavalo.png' },
    { name: 'coelho', img: 'images_memoria/coelho.png' },
    { name: 'gato', img: 'images_memoria/gato.png' },
    { name: 'macaco', img: 'images_memoria/macaco.png' },
    { name: 'pato', img: 'images_memoria/pato.png' },
    // duplicando as cartas para formar pares
    { name: 'bola', img: 'images_memoria/bola.png' },
    { name: 'cachorro', img: 'images_memoria/cachorro.png' },
    { name: 'carro', img: 'images_memoria/carro.png' },
    { name: 'cavalo', img: 'images_memoria/cavalo.png' },
    { name: 'coelho', img: 'images_memoria/coelho.png' },
    { name: 'gato', img: 'images_memoria/gato.png' },
    { name: 'macaco', img: 'images_memoria/macaco.png' },
    { name: 'pato', img: 'images_memoria/pato.png' },
  ]

  // Embaralha as cartas de forma aleatória
  cards.sort(() => 0.5 - Math.random())

  // Seleciona os elementos do DOM para manipular
  const board = document.querySelector('.board') // tabuleiro onde as cartas serão exibidas
  const resultView = document.querySelector('#result') // elemento que mostra os pares encontrados
  let cardsChosen = []     // guarda os nomes das cartas escolhidas
  let cardsChosenId = []   // guarda os índices das cartas escolhidas
  let cardsWon = []        // guarda os pares encontrados corretamente

  // Função que cria o tabuleiro do jogo
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img') // cria um elemento de imagem para a carta
      card.setAttribute('src', 'images_memoria/board.png') // define imagem padrão (verso da carta)
      card.setAttribute('data-id', i) // define um identificador único para a carta
      card.addEventListener('click', flipCard) // adiciona o evento de clique para virar a carta
      board.appendChild(card) // adiciona a carta ao tabuleiro
    }
  }

  // Função que verifica se houve uma combinação correta
  function checkForMatch() {
    const cards = document.querySelectorAll('img') // seleciona todas as cartas no DOM
    const optionOneId = cardsChosenId[0] // índice da primeira carta clicada
    const optionTwoId = cardsChosenId[1] // índice da segunda carta clicada

    // Caso o jogador clique duas vezes na mesma carta
    if(optionOneId == optionTwoId) {
      // volta ambas para o verso
      cards[optionOneId].setAttribute('src', 'images_memoria/board.png')
      cards[optionTwoId].setAttribute('src', 'images_memoria/board.png')
      alert('Você clicou na mesma imagem')
    }
    // Se as cartas forem iguais (match)
    else if (cardsChosen[0] === cardsChosen[1]) {
      // marca as cartas como encontradas
      cards[optionOneId].setAttribute('src', 'images_memoria/check.png')
      cards[optionTwoId].setAttribute('src', 'images_memoria/check.png')
      // remove o evento de clique para que não possam ser clicadas novamente
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen) // adiciona o par à lista de pares encontrados
    } else {
      // se não for um par, vira as cartas de volta
      cards[optionOneId].setAttribute('src', 'images_memoria/board.png')
      cards[optionTwoId].setAttribute('src', 'images_memoria/board.png')
    }

    // limpa as escolhas para a próxima jogada
    cardsChosen = []
    cardsChosenId = []

    // atualiza o placar
    resultView.textContent = 'Pares Encontrados: ' + cardsWon.length

    // verifica se o jogador encontrou todos os pares
    if  (cardsWon.length === cards.length / 2) {
      resultView.textContent = 'Parabéns! Você conseguiu encontrar todas as cartas'
    }
  }

  // Função chamada quando o jogador clica em uma carta
  function flipCard() {
    let cardId = this.getAttribute('data-id') // obtém o id da carta clicada
    cardsChosen.push(cards[cardId].name) // armazena o nome da carta escolhida
    cardsChosenId.push(cardId)           // armazena o id da carta escolhida
    this.setAttribute('src', cards[cardId].img) // mostra a imagem da carta

    // se duas cartas forem escolhidas, verifica se formam um par após 0.5 segundos
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  // Inicializa o jogo criando o tabuleiro
  createBoard();
})
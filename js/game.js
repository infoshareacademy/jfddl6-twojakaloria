class Game {
  constructor(container) {
    this.container = document.querySelector('.game-container') || container;

    this.board = null
    this.boardHeight = 400
    this.boardWidth = 400

    this.rankBoard = null
    this.rankBoardHeight = 25
    this.rankBoardWidth = this.boardWidth

    this.basketDimension = 40
    this.basket = this.createBasket()

    this.init()
  }

  makeBoard() {
    this.board = document.createElement('div')
    this.board.style.height = this.boardHeight + 'px'
    this.board.style.width = this.boardWidth + 'px'
    this.board.style.backgroundColor = 'red'
    this.board.style.margin = '0 auto'
    this.container.appendChild(this.board)
  }

  makeRanking() {
    this.rankBoard = document.createElement('div')
    this.rankBoard.style.height = this.rankBoardHeight + 'px'
    this.rankBoard.style.width = this.rankBoardWidth + 'px'
    this.rankBoard.style.backgroundColor = 'black'
    this.rankBoard.style.margin = '0 auto'
    this.container.appendChild(this.rankBoard)
  }

  createBasket() {
    return new Basket(
      this.boardWidth - this.basketDimension / 2,
      this.boardHeight - this.basketDimension + this.rankBoardHeight,
      this.basketDimension
    )
  }

  render() {
    this.board.appendChild(this.basket.render())
  }

  init() {
    this.makeRanking()
    this.makeBoard()
    this.render()
  }

}

class Basket {
  constructor(maxX, maxY, basketDimension) {
    this.x = maxX / 2
    this.y = maxY
    this.basketDimension = basketDimension
  }

  render() {
    const basketDiv = document.createElement('div')
    basketDiv.style.height = this.basketDimension + 'px'
    basketDiv.style.width = this.basketDimension + 'px'
    basketDiv.style.backgroundColor = 'white'
    basketDiv.style.position = 'absolute'
    basketDiv.style.left = this.x + 'px'
    basketDiv.style.top = this.y + 'px'

    return basketDiv
  }
}

const newGame = new Game()
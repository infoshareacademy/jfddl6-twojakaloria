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

    this.obstacles = []
    this.obstacleDimension = 40

    this.gameInterval = null
    this.tickCount = 0
    this.speed = 100

    this.init()
  }

  init() {
    this.makeRanking()
    this.makeBoard()
    this.startGameInterval()
    this.render()
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
      this.boardHeight - this.basketDimension,
      this.basketDimension
    )
  }

  addObstacle() {
    this.obstacles = this.obstacles.concat(
      new Obstacle(
        this.boardWidth - this.obstacleDimension,
        this.boardHeight - this.obstacleDimension,
        this.obstacleDimension
      )
    )
    console.log(this.obstacles)
  }

  moveObstacles() {
    this.obstacles.forEach(obstacle => obstacle.moveDown())

    this.render()
  }

  checkIfObstacleIsOnTheGround(obstacle, i) {
    if (obstacle.y >= this.boardHeight - this.obstacleDimension)
      this.deleteObstacle(i)
  }

  deleteObstacle(i) {
    this.obstacles = this.obstacles
      .slice(0, i)
      .concat(this.obstacles.slice(i + 1))
  }

  gameTick() {
    if (this.tickCount === 0) this.addObstacle()

    this.tickCount++
    this.moveObstacles()

    if (this.tickCount > 10) this.tickCount = 0
  }

  startGameInterval() {
    this.gameInterval = setInterval(this.gameTick.bind(this), this.speed)
  }

  render() {
    this.board.innerHTML = ''
    this.board.appendChild(this.basket.render())

    this.obstacles.forEach((obstacle, i) => {
      this.board.appendChild(obstacle.render())
      this.checkIfObstacleIsOnTheGround(obstacle, i)
    })
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

class Obstacle {
  constructor(maxX, maxY, obstacleDimension) {
    this.x = randomInt(0, maxX)
    this.y = 0
    this.maxY = maxY
    this.obstacleDimension = obstacleDimension
  }

  moveDown() {
    this.y += 5
  }

  render() {
    const obstacleDiv = document.createElement('div')
    obstacleDiv.style.height = this.obstacleDimension + 'px'
    obstacleDiv.style.width = this.obstacleDimension + 'px'
    obstacleDiv.style.backgroundColor = 'black'
    obstacleDiv.style.position = 'absolute'
    obstacleDiv.style.left = this.x + 'px'
    obstacleDiv.style.top = this.y + 'px'

    return obstacleDiv
  }
}

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

const newGame = new Game()
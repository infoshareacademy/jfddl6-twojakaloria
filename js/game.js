class Game {
  constructor(container) {
    this.container = document.querySelector(".game-container") || container;

    this.board = null;
    this.boardHeight = 400;
    this.boardWidth = 400;

    this.rankBoard = null;
    this.score = 0;
    this.rankBoardHeight = 25;
    this.rankBoardWidth = this.boardWidth;

    this.basketDimension = 40;
    this.basket = this.createBasket();

    this.obstacles = [];
    this.obstacleDimension = 40;

    this.friends = []

    this.gameInterval = null;
    this.tickCount = 0;
    this.speed = 100;

    this.level = 1;
    this.lifes = 3;

    this.init();
  }

  init() {
    this.makeRanking();
    this.makeBoard();
    this.startGameInterval();
    this.addEventListeners();
    this.render();
  }

  makeBoard() {
    this.board = document.createElement("div");
    this.board.style.height = this.boardHeight + "px";
    this.board.style.width = this.boardWidth + "px";
    this.board.style.margin = "0 auto";
    this.board.style.background = "green";
    this.container.appendChild(this.board);
  }

  makeRanking() {
    this.rankBoard = document.createElement("div");
    this.rankBoard.style.height = this.rankBoardHeight + "px";
    this.rankBoard.style.width = this.rankBoardWidth + "px";
    this.rankBoard.style.backgroundColor = "black";
    this.rankBoard.style.color = "white";
    this.rankBoard.style.margin = "0 auto";
    this.rankBoard.style.display = "flex";
    this.rankBoard.style.justifyContent = "space-between";
    this.rankBoard.style.zIndex = "5";
    this.container.appendChild(this.rankBoard);
  }

  createBasket() {
    return new Basket(
      this.boardWidth - this.basketDimension / 2,
      this.boardHeight - this.basketDimension + this.rankBoardHeight,
      this.basketDimension
    );
  }

  addEventListeners() {
    window.addEventListener("keydown", e => {
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          this.basket.moveLeft();
          break;
        case "ArrowRight":
          e.preventDefault();
          this.basket.moveRight();
          break;
        default:
          break;
      }
    });
  }

  addObstacle() {
    this.obstacles = this.obstacles.concat(
      new Obstacle(
        this.boardWidth - this.obstacleDimension,
        this.boardHeight - this.obstacleDimension,
        this.obstacleDimension
      )
    );
  }

  addFriend() {
    this.friends = this.friends.concat(
      new Friend(
        this.boardWidth - this.obstacleDimension,
        this.boardHeight - this.obstacleDimension,
        this.obstacleDimension
      )
    )
  }

  moveObstacles() {
    this.obstacles.forEach(obstacle => obstacle.moveDown());

    this.render();
  }

  moveFriends() {
    this.friends.forEach(friend => friend.moveDown())
  }


  checkIfObstacleIsOnTheGround(obstacle, i) {
    if (obstacle.y >= this.boardHeight) {
      this.deleteObstacle(i);
      console.log(obstacle)
    }
  }

  checkIfFriendIsOnTheGround(friend, i) {
    if (friend.y >= this.boardHeight) {
      this.deleteFriends(i);
      this.lifes--
      if (this.lifes === 0) {
        this.checkLifes()
      }
    }
  }

  detectObstaclesInTheBasket() {
    this.obstacles.forEach((obstacle, i) => {
      const isColliding = this.detectCollision(
        {
          x: obstacle.x,
          y: obstacle.y,
          width: obstacle.obstacleDimension,
          height: obstacle.obstacleDimension
        },
        {
          x: this.basket.x,
          y: this.basket.y,
          width: this.basket.basketDimension,
          height: this.basket.basketDimension
        }
      );

      if (isColliding) {
        this.catchObstacleInTheBasket(i);
      }
    });
  }

  detectFriendsInTheBasket() {
    this.friends.forEach((friend, i) => {
      const isColliding = this.detectCollision(
        {
          x: friend.x,
          y: friend.y,
          width: friend.obstacleDimension,
          height: friend.obstacleDimension
        },
        {
          x: this.basket.x,
          y: this.basket.y,
          width: this.basket.basketDimension,
          height: this.basket.basketDimension
        }
      );

      if (isColliding) {
        this.catchFriendsInTheBasket(i)
      }
    });
  }

  detectCollision(a, b) {
    return !(
      a.y + a.height < b.y ||
      a.y > b.y + b.height ||
      a.x + a.width < b.x ||
      a.x > b.x + b.width
    );
  }

  catchObstacleInTheBasket(i) {
    this.deleteObstacle(i);
    if (this.score > 0) {
      this.scoreDown()  
    }
  }

  catchFriendsInTheBasket(i) {
    this.deleteFriends(i);
    this.scoreUp();
  }

  deleteObstacle(i) {
    this.obstacles = this.obstacles
      .slice(0, i)
      .concat(this.obstacles.slice(i + 1));
  }

  deleteFriends(i) {
    this.friends = this.friends
      .slice(0, i)
      .concat(this.friends.slice(i + 1));
  }

  scoreUp() {
    this.score++;
    this.render();

    this.checkScore();
  }

  scoreDown() {
    this.score--;
    this.render()
    this.checkScore();
  }
  checkScore() {
    if (this.score === 5) this.levelUp();
    if (this.score === 15) this.levelUp();
    if (this.score === 25) this.levelUp();
  }

  checkLifes() {
      this.board.innerHTML = "";
      this.rankBoard.innerHTML = "";
      this.container.innerHTML = "";
      this.gameInterval = null;
      const text = document.createElement("div");
      const buttonYes = document.createElement("button");
      const buttonNo = document.createElement("button");
      text.innerText = "Do you wanna play again?";
      text.style.color = "white";
      text.style.textTransform = "uppercase";
      text.style.fontSize = "50px";
      text.style.margin = "0 auto";
      text.style.backgroundColor = "black";
      text.style.textAlign = "center";
      buttonYes.innerText = "Yes";
      buttonNo.innerText = "No";
      buttonYes.style.height = "30px";
      buttonNo.style.height = "30px";
      this.container.appendChild(text);
      this.container.appendChild(buttonYes);
      this.container.appendChild(buttonNo);
      this.container.style.display = "flex";
      this.container.style.flexDirection = "column";

      buttonYes.addEventListener("click", () => {
        location.reload();
      });

      buttonNo.addEventListener("click", () => {
        alert("Thank You!");
      });
    
  }

  levelUp() {
    this.level++;
    this.speed = this.speed - 25;
    this.render();
    this.startGameInterval();
  }

  gameTick() {
    if (this.tickCount === 0) this.addObstacle();
    if (this.tickCount === 10) this.addFriend();

    this.detectObstaclesInTheBasket();
    this.detectFriendsInTheBasket()
    this.moveObstacles();
    this.moveFriends()
    this.tickCount++;

    if (this.tickCount > 30) this.tickCount = 0;
  }

  startGameInterval() {
    this.gameInterval = setInterval(this.gameTick.bind(this), this.speed);
  }

  render() {
    this.board.innerHTML = "";
    this.rankBoard.innerHTML = `<div>
    Your score is: ${this.score}</div>
    <div>Level: ${this.level}</div>
    <div>Lifes: ${this.lifes}</div>
    `;
    this.board.appendChild(this.basket.render());

    this.obstacles.forEach((obstacle, i) => {
      this.board.appendChild(obstacle.render());
      this.checkIfObstacleIsOnTheGround(obstacle, i);
    });

    this.friends.forEach((friend, i) => {
      this.board.appendChild(friend.render());
      this.checkIfFriendIsOnTheGround(friend, i);
    });
  }
}

class Basket {
  constructor(maxX, maxY, basketDimension) {
    this.x = maxX / 2;
    this.y = maxY;
    this.basketDimension = basketDimension;
  }

  render() {
    const basketDiv = document.createElement("div");
    basketDiv.style.height = this.basketDimension + "px";
    basketDiv.style.width = this.basketDimension + "px";
    basketDiv.style.background = "url('img/koszyk.png')";
    basketDiv.style.backgroundRepeat = "no-repeat";
    basketDiv.style.backgroundSize = "contain";
    basketDiv.style.position = "absolute";
    basketDiv.style.left = this.x + "px";
    basketDiv.style.top = this.y + "px";

    return basketDiv;
  }

  moveLeft() {
    if (this.x > 0) {
      this.x = this.x - 20;
    }
  }

  moveRight() {
    if (this.x < 360) {
      this.x = this.x + 20;
    }
  }
}

class Obstacle {
  constructor(maxX, maxY, obstacleDimension) {
    this.x = randomInt(0, maxX);
    this.y = 20;
    this.maxY = maxY;
    this.obstacleDimension = obstacleDimension;
  }

  moveDown() {
    this.y += 5;
  }

  render() {
    const obstacleDiv = document.createElement("div");
    obstacleDiv.style.height = this.obstacleDimension + "px";
    obstacleDiv.style.width = this.obstacleDimension + "px";
    obstacleDiv.style.background = "url('img/pizza.png')";
    obstacleDiv.style.backgroundRepeat = "no-repeat";
    obstacleDiv.style.backgroundSize = "contain";
    obstacleDiv.style.position = "absolute";
    obstacleDiv.style.left = this.x + "px";
    obstacleDiv.style.top = this.y + "px";

    return obstacleDiv;
  }
}

class Friend {
  constructor(maxX, maxY, obstacleDimension) {
    this.x = randomInt(0, maxX);
    this.y = 20;
    this.maxY = maxY;
    this.obstacleDimension = obstacleDimension;
  }

  moveDown() {
    this.y += 3;
  }

  render() {
    const friendDiv = document.createElement("div");
    friendDiv.style.height = this.obstacleDimension + "px";
    friendDiv.style.width = this.obstacleDimension + "px";
    friendDiv.style.background = "url('img/applle.png')";
    friendDiv.style.backgroundRepeat = "no-repeat";
    friendDiv.style.backgroundSize = "contain";
    friendDiv.style.position = "absolute";
    friendDiv.style.left = this.x + "px";
    friendDiv.style.top = this.y + "px";

    return friendDiv;
  }
}
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const newGame = new Game();

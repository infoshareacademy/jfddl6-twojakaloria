class Game {
  constructor(container) {
    this.container = container;
    this.items = [];
    this.speed = 5;

    this.init();
  }
  itemPosition() {
    for (let i = 0; i < 5; i++) {
      this.items.push({
        x: Math.floor(Math.random() * 300),
        y: -5
      });
    }
  }

  init() {
    this.render();
    this.itemPosition();
    this.render();
  }
  render() {
    this.container.innerHTML = "";

    this.container.style.backgroundColor = "red";
    this.container.style.height = "500px";
    this.container.style.width = "500px";

    this.items.forEach(item => {
      this.renderItem(item);
    });
  }

  renderItem(item) {
    const itemDiv = document.createElement("div");
    itemDiv.style.height = `30px`;
    itemDiv.style.width = `30px`;
    itemDiv.style.position = "absolute";
    itemDiv.style.left = item.x + "px";
    itemDiv.style.backgroundColor = "black";
    this.container.appendChild(itemDiv);
    itemDiv.style.top = item.y + "px";
  }
}

const ourContainer = document.querySelector(".game-container");

const game = new Game(ourContainer);

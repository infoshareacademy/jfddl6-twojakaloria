class Game {
  constructor(container) {
    this.container = container;
    this.items = []
    this.truck = [
      {
        x: 0,
        y: 465
      }
    ];
    this.init();
  }
  init() {
    this.addItem();
    // console.log(this.items);
    this.render();
  }
  render() {
    this.container.innerHTML = "";
    this.container.style.backgroundColor = "red";
    this.container.style.position = "relative";
    this.container.style.height = "500px";
    this.container.style.width = "500px";
    this.items.forEach((item) => {
      this.renderItem(item);
    });
      this.renderTruck(truck);
  }
  addItem() {
    for (let i = 0; i <= 5; i++) {
      const item ={x:Math.round(Math.random()*460),y:-5}
      this.items[i]=(item);
    }
  }
  renderItem(item) {
    const itemDiv = document.createElement("div");
    itemDiv.style.height = `30px`;
    itemDiv.style.width = `30px`;
    itemDiv.style.position = "absolute";
    itemDiv.style.left = item.x + "px";
    itemDiv.style.backgroundColor = "black"
    // itemDiv.style.top = `${item.y = item.y + 5}px`;
    const movingItem = setInterval(() => {
      itemDiv.style.top = `${item.y = item.y + 5}px`;
      if (itemDiv.style.top === "470px") {
        clearInterval(movingItem);
        itemDiv.style.display = "none";
      }
    }, 500);
    this.container.appendChild(itemDiv);
  }

  renderTruck(truck) {
    const truckDiv = document.createElement("div");
    truckDiv.style.height = `30px`;
    truckDiv.style.width = `50px`;
    truckDiv.style.position = "absolute";
    truckDiv.style.left = truck.x + "0px";
    truckDiv.style.backgroundColor = "white";
    truckDiv.style.top = truck.y + "px";
    this.container.addEventListener("mousemove", function(event) {
      eventMouse(event);
    });
    const eventMouse = e => {
      if (e.offsetX <= 455) {
        truckDiv.style.left = e.offsetX + "px";
      }
    };
    this.container.appendChild(truckDiv);
  }
}
const ourContainer = document.querySelector(".game-container");

const game = new Game(ourContainer);

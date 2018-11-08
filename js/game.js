class Game {
  constructor(container) {
    this.container = container;
    this.items = [{x: 128, y: -5},
     {x: 169, y: -5},
      {x: 420, y: -5},
     {x: 192, y: -5},
      {x: 423, y: -5},
      {x: 389, y: -5}]
    this.truck = [
      {
        x: 0,
        y: 465
      }
    ];
    this.init();
  }
  init() {
    // this.addItem();
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
      this.renderTruck(console.log(this.truck));
  }
  // addItem() {
  //   for (let i = 0; i <= 5; i++) {
  //     const item ={x:Math.round(Math.random()*460),y:-5}
  //     this.items[i]=(item);
  //   }
  // }
  renderItem(item) {
    const truckDiv = document.createElement("div");
    truckDiv.style.height = `30px`;
    truckDiv.style.width = `30px`;
    truckDiv.style.position = "absolute";
    truckDiv.style.left = item.x + "px";
    truckDiv.style.backgroundColor = "black";
    this.container.appendChild(truckDiv);
    // truckDiv.style.top = `${item.y = item.y + 5}px`;
    const movingItem = setInterval(() => {
      truckDiv.style.top = `${item.y = item.y + 5}px`;
      if (truckDiv.style.top === "470px") {
        clearInterval(movingItem);
        truckDiv.style.display = "none";
      }
    }, 500);
  }

  renderTruck(truck) {
    const itemDiv = document.createElement("div");
    this.container.addEventListener("mousemove", function(event) {
      eventMouse(event);
    });
    const eventMouse = e => {
      if (e.offsetX <= 455) {
        itemDiv.style.left = e.offsetX + "px";
      }
    };
    itemDiv.style.height = `30px`;
    itemDiv.style.width = `50px`;
    itemDiv.style.position = "absolute";
    itemDiv.style.left = truck.x + "0px";
    itemDiv.style.backgroundColor = "white";
    itemDiv.style.top = truck.y + "px";
    this.container.appendChild(itemDiv);
  }
}
const ourContainer = document.querySelector(".game-container");

const game = new Game(ourContainer);

class Game {
  constructor(container) {
    this.container = container;
    this.items = [
      {
        x: 470,
        y: -5
      },
      {
        x: 220,
        y: -5
      }
    ];
    this.truck = [
      {
        x: 0,
        y: 465
      }
    ];
    this.init();
  }
  init() {
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
    this.truck.forEach(truck =>{
    this.renderTruck(truck);});
  }
  renderItem(item) {
    const truckDiv = document.createElement("div");
    truckDiv.style.height = `30px`;
    truckDiv.style.width = `30px`;
    truckDiv.style.position = "absolute";
    truckDiv.style.left = item.x + "px";
    truckDiv.style.backgroundColor = "black";
    this.container.appendChild(truckDiv);
    truckDiv.style.top = `${(item.y = item.y + 5)}px`;

    const movingItem = setInterval(() => {
      truckDiv.style.top = `${(item.y = item.y + 5)}px`;
      if (truckDiv.style.top === "470px") {
        clearInterval(movingItem);
        truckDiv.style.display = "none";
      }
    }, 100);
  }

  renderTruck(truck) {
    const itemDiv = document.createElement("div");
    itemDiv.style.height = `30px`;
    itemDiv.style.width = `50px`;
    itemDiv.style.position = "absolute";
    itemDiv.style.left = truck.x+'px'
    itemDiv.style.backgroundColor = "white";
    itemDiv.style.top = truck.y + "px";
    this.container.appendChild(itemDiv);
    this.container.addEventListener('mousemove', function(event) {eventMouse(event)})
    const eventMouse = (e) => {let x = e.clientX;return x;}

}
}

const ourContainer = document.querySelector(".game-container");

const game = new Game(ourContainer);

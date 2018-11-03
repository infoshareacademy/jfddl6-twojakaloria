(function() {
let container = document.querySelector("#hero");
let hero = container.querySelectorAll("#item");
document.getElementById("hero").addEventListener("mouseenter", mouseEnter);
document.getElementById("hero").addEventListener("mouseleave", mouseLeave);
  function change() {
    let current = container.querySelector(`#item.current`);
    let next = container.querySelector(`#item.current + #item`) || hero[0];
    if (current) {
      current.classList.remove("current");
    }
    if (next) {
      next.classList.add("current");
    }
  }
  change();
  function mouseLeave() {
    this.time = setInterval(change, 5000);
    console.log(`start`);
  }
  function mouseEnter() {
    clearInterval(this.time);
    console.log(`stop`);
  }
})();

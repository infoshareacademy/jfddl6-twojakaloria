(function() {
  var container = document.querySelector("#hero");
  var hero = container.querySelectorAll("#item");
  function change() {
    document.getElementById("hero").onmouseenter = function() {
      mouseEnter();
    };
    document.getElementById("hero").onmouseleave = function() {
      mouseLeave();
    };
    var current = container.querySelector(`#item.current`);
    var next = container.querySelector(`#item.current + #item`) || hero[0];
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

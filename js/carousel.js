(function() {
  var container = document.querySelector("#hero");
  var hero = container.querySelectorAll("#item");
  function change() {
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
  setInterval(change, 15000);
})();

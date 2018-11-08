(function() {
  let container = document.querySelector(".carouselle");
  let carouselle = container.querySelectorAll(".items");
  document.querySelector(".section__hero").addEventListener("mouseenter", mouseEnter);
  document.querySelector(".section__hero").addEventListener("mouseleave", mouseLeave);
  document.querySelector(".section-hero__button-left").addEventListener("click", changeLeft);
  document.querySelector(".section-hero__button-right").addEventListener("click", changeRight);
  function change() {
    let current = container.querySelector(`.items.current`);
    let next = container.querySelector(`.items.current + .items`) || carouselle[0];
    if (current) {
      current.classList.remove("current");
    }
    if (next) {
      next.classList.add("current");
    }
  }
  function changeLeft() {
    let current = container.querySelector(`.items.current`);
    let next = container.querySelector(`.items.current`).previousElementSibling || carouselle[2];
    if (current) {
      current.classList.remove("current");
    }
    if (next) {
      next.classList.add("current");
    }
  }
  function changeRight() {
    let current = container.querySelector(`.items.current`);
    let next = container.querySelector(`.items.current`).nextElementSibling || carouselle[0];
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

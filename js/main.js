"use strict";
//burger
const burger = document.querySelector(".burger");
  const menu = document.querySelector("nav");
  const bodyEl = document.body;

  burger.addEventListener("click", function () {
    if (this.classList.contains("burger--active")) {
      this.classList.remove("burger--active");
      bodyEl.classList.remove("stop-scroll");
      menu.classList.remove("nav--active");
    } else {
      this.classList.add("burger--active");
      bodyEl.classList.add("stop-scroll");
      menu.classList.add("nav--active");
    }
  });

  menu.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    bodyEl.classList.remove("stop-scroll");
    menu.classList.remove("nav--active");
  });

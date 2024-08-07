"use strict";

const hamburgerMenu = document.querySelector(".hamburger__menu-toggle");
const darkmodeBtn = document.querySelector(".aside__darkmodebutton");
const darkmodeImg = document.querySelector(".darkmode__icon");
const body = document.querySelector("body");

hamburgerMenu.addEventListener("click", () => {
  let visible = document
    .querySelector(".nav")
    .classList.toggle("nav__aside-visible");
  // console.log(visible);
  if (visible) {
    hamburgerMenu.src = "./svg/X-brown_Vector.svg";
  } else {
    hamburgerMenu.src = "./svg/Hamburger_Vector.svg";
  }
});

darkmodeBtn.addEventListener("click", () => {
  let moonVisible = darkmodeImg.classList.contains("moon");
  if (moonVisible) {
    darkmodeImg.classList.toggle("moon");
    // console.log('darkmode on - sun shown');
    body.classList.remove("grey-light");
    body.classList.add("grey-dark");

    darkmodeBtn.classList.remove("grey-light");
    darkmodeBtn.classList.add("grey-dark");

    darkmodeImg.src = "./svg/Sun_Vector.svg";
  } else {
    darkmodeImg.classList.toggle("moon");
    // console.log('darkmode off - moon shown');
    body.classList.remove("grey-dark");
    body.classList.add("grey-light");

    darkmodeBtn.classList.remove("grey-dark");
    darkmodeBtn.classList.add("grey-light");

    darkmodeImg.src = "./svg/Moon_Vector.svg";
  }
});

//HEADER + MAIN RESPONSIVE
const header = document.getElementById("header");
const main = document.getElementById("main");

document.addEventListener("DOMContentLoaded", () => {
  const observer = new ResizeObserver((entries) => {
    for (let entry of entries) {
      if (entry.target === header) {
        const headerHeight = header.getBoundingClientRect().height;
        main.style.paddingTop = headerHeight + "px";
      }
    }
  });
  observer.observe(header);
});

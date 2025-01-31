const red = document.querySelector("#red");
const box = document.querySelector(".box");
const blue = document.querySelector("#blue");
const green = document.querySelector("#green");
const square = document.querySelector("#square");
const soft = document.querySelector("#soft");
const hard = document.querySelector("#hard");
const small = document.querySelector("#small");
const medium = document.querySelector("#medium");
const large = document.querySelector("#large");

const colorbox = ["red", "blue", "green"];
red.addEventListener("click", () => {
  box.classList.remove(...colorbox);
  box.classList.add("red");
});
blue.addEventListener("click", () => {
  box.classList.remove(...colorbox);
  box.classList.add("blue");
});
green.addEventListener("click", () => {
  box.classList.remove(...colorbox);
  box.classList.add("green");
});
const round = ["square", "soft", "hard"];
square.addEventListener("click", () => {
  box.classList.remove(...round);
  box.classList.add("square");
});
soft.addEventListener("click", () => {
  box.classList.remove(...round);
  box.classList.add("soft");
});
hard.addEventListener("click", () => {
  box.classList.remove(...round);
  box.classList.add("hard");
});
const size = ["small", "medium", "large"];
small.addEventListener("click", () => {
  box.classList.remove(...size);
  box.classList.add("small");
});
medium.addEventListener("click", () => {
  box.classList.remove(...size);
  box.classList.add("medium");
});
large.addEventListener("click", () => {
  box.classList.remove(...size);
  box.classList.add("large");
});

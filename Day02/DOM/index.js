const red = document.querySelector(".red");
const box = document.querySelector(".box");
const blue = document.querySelector(".blue");
const green = document.querySelector(".green");
const square = document.querySelector(".square");
const soft = document.querySelector(".soft");
const hard = document.querySelector(".hard");
const small = document.querySelector(".small");
const medium = document.querySelector(".medium");
const large = document.querySelector(".large");
red.addEventListener("click", () => {
  box.style.backgroundColor = "red";
});
blue.addEventListener("click", () => {
  box.style.backgroundColor = "blue";
});
green.addEventListener("click", () => {
  box.style.backgroundColor = "green";
});
square.addEventListener("click", () => {
  box.style.borderRadius = "0px";
});
soft.addEventListener("click", () => {
  box.style.borderRadius = "30px";
});
hard.addEventListener("click", () => {
  box.style.borderRadius = "9999px";
});
small.addEventListener("click", () => {
  box.style.width = "100px";
  box.style.height = "100px";
});
medium.addEventListener("click", () => {
  box.style.width = "200px";
  box.style.height = "200px";
});
large.addEventListener("click", () => {
  box.style.width = "300px";
  box.style.height = "300px";
});

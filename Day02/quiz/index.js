const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const colorList = [..."1234567890abcdefg"];
const getOneOfHex = () => colorList[getRandom(0, colorList.length)];
const getColor = () =>
  "#" +
  Array(6)
    .fill(0)
    .map((v) => getOneOfHex())
    .join("");
Array(10)
  .fill(0)
  .forEach((v) => {
    const btn = document.createElement("button");
    const color = getColor();
    btn.innerText = color;
    btn.addEventListener("click", () => {
      const box = document.querySelector("#box");
      box.style.backgroundColor = color;
    });
    document.body.appendChild(btn);
  });

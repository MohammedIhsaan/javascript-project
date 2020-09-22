const colors = ["green", "yellow", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  console.log(document.body);
  const getColor = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[getColor];
  color.innerHTML = colors[getColor];
});

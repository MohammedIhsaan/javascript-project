const increament = document.getElementById("inc");
const reset = document.getElementById("res");
const decreament = document.getElementById("dec");
const value = document.getElementById("span");
const btn = document.querySelectorAll(".btn");
console.log(btn);
let count = 0;

//// Method 1

increament.addEventListener("click", () => {
  count += 1;
  value.innerHTML = count;
  if (count > 0) {
    value.style.color = "green";
  }
});
decreament.addEventListener("click", () => {
  count -= 1;
  value.innerHTML = count;
  if (count < 0) {
    value.style.color = "red";
  }
});
reset.addEventListener("click", () => {
  count = 0;
  value.innerHTML = count;
  if (count == 0) {
    value.style.color = "black";
  }
});

////Method 2

// btn.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const style = e.currentTarget.classList;
//     console.log(style);
//     console.log(e);
//     console.log(style.contains("increase"));
//     if (style.contains("increase")) {
//       console.log("hello");
//       count++;
//       value.style.color = "green";
//     } else if (style.contains("decrease")) {
//       count--;
//       value.style.color = "red";
//     } else {
//       count = 0;
//       value.style.color = "black";
//     }
//     if (count > 0) {
//       value.style.color = "green";
//     }
//     if (count < 0) {
//       value.style.color = "red";
//     }
//     value.textContent = count;
//   });
// });

const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form input");
const box = document.querySelector(".box");

let post = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let obj = {};

  for (let i of inputs) {
    obj[i.name] = i.value;
  }
  console.log(obj.name);
});

// function sdfdsf(params) {
//   for (let i of inputs) {
//     console.log(i.value);
//   }
// }

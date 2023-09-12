const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".form input");
const box = document.querySelector(".box");

let post = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let obj = {};

  inputs.forEach ((i) => {
    obj[i.name] = i.value;
  }) 
  console.log(obj);

  post.push({...obj})
  console.log(post);
});


// function sdfdsf(params) {
//   for (let i of inputs) {
//     console.log(i.value);
//   }
// }

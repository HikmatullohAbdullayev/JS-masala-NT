const btn = document.querySelector(".newItem");
let form = document.querySelector("form");
let input = document.querySelectorAll(" input");
let ul = document.querySelector(".lists");
console.log();

let user = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let obj = {};

  input.forEach((item) => {
    obj[item.name] = item.value;
    user.push({ ...obj, id: Date.now() });
    item.value = "";
  });
    user.push({...obj})
    console.log(user);


    ul.innerHTML += `<li>${obj.Familya}</li>`
    ul.innerHTML += `<li>${obj.ism}</li>`
  

});


let form = document.querySelector(".form");
let input = document.querySelector(".input");
let box = document.querySelector(".box");

let lists = [];

let render = () => {
  box.innerHTML = lists
    .map(
      (item) =>
        ` 

    <div>
    <h2 class= "text" >${item.name}</h2>
    <button class ="btnEdit" onclick= "editItem (${item.id})" ><span class="material-symbols-outlined">
    edit
    </span> </button>
  <button class ="btnDelete" onclick="deleteItem (${item.id})" >   <span class="material-symbols-outlined">
  delete
  </span></button>
  </div>
    
    `
    )
    .join("");
};



const deleteItem = (id) => {
     lists = lists.filter((item) => item.id !== id);
     render()
};

const editItem = (id) => {
    const newValue = prompt("")
    lists = lists.map((obj) => (obj.id === id ? {id, name:newValue} : obj))
    render()
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  lists.unshift({ name: input.value, id: Date.now() });
  input.value = "";
  console.log(lists);

  render();
});

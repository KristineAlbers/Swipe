//let userObject = localStorage.getItem('userObject');
//let userObject = localStorage.getItem(4);

//console.log(userObject);

let deletedItems = JSON.parse(localStorage.getItem("deletedItems"));

console.log(deletedItems);

// deletedItems.forEach((element) => {
//   console.log(JSON.parse(element));
//   let result = element;
//   console.log(result.id);
// });

deletedItems.forEach(element => {
 let result = JSON.parse(element);
console.log(result.userName);


const main = document.querySelector("main");
const section = document.createElement("section");
section.classList.add("animate__animated", "container");
section.setAttribute("id", result.id);

const deleteItem = document.createElement("div");
deleteItem.classList.add("deleteItem");
//deleteItem.textContent = 'Delete';

const trashbin = document.createElement('i');
trashbin.classList.add('fas', 'fa-trash-alt');

const swipeItem = document.createElement("article");
swipeItem.classList.add("swipeItem");
swipeItem.textContent = result.name;

main.appendChild(section);
section.appendChild(deleteItem);
section.appendChild(swipeItem);
deleteItem.appendChild(trashbin);
});

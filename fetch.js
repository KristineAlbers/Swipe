axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
  const users = response.data;
  console.log(`GET users`, users);

  users.forEach((user) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.classList.add("animate__animated", "container");
    section.setAttribute("id", user.id);

    const deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");
    //deleteItem.textContent = 'Delete';

    const trashbin = document.createElement('i');
    trashbin.classList.add('fas', 'fa-trash-alt');

    const swipeItem = document.createElement("article");
    swipeItem.classList.add("swipeItem");
    swipeItem.textContent = user.name;

    main.appendChild(section);
    section.appendChild(deleteItem);
    section.appendChild(swipeItem);
    deleteItem.appendChild(trashbin);
  });
});

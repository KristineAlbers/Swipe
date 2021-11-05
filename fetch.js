axios.get("https://jsonplaceholder.typicode.com/users/").then((response) => {
  const users = response.data;
  console.log(`GET users`, users);

  users.forEach((user) => {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.classList.add("animate__animated", 'container');
    section.setAttribute('id', user.id);

    const deleteItem = document.createElement("div");
    deleteItem.classList.add("deleteItem");

    const jokeItem = document.createElement("article");
    jokeItem.classList.add("jokeItem");
    jokeItem.textContent = user.name;

    main.appendChild(section);
    section.appendChild(deleteItem);
    section.appendChild(jokeItem);
  });
});

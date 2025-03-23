const form = document.querySelector("form");
const shoppingList = document.querySelector(".shopping-list");
const inputName = document.getElementById("itemName");

form.addEventListener("submit", (event) => {
  //Previnindo que ele faca o padrao.
  event.preventDefault();

  //Invocando a funcao para criar o item.
  createItem();

  //Limpando o campo de texto apos a criacao do item.
  inputName.value = "";
});

function createItem() {
  // Criação dos elementos
  const item = document.createElement("li");
  const checkboxDiv = document.createElement("div");
  const input = document.createElement("input");
  const textName = document.createElement("p");
  const deleteItem = document.createElement("i");

  // Definindo classes
  item.classList.add("list-item");
  textName.classList.add("paragraph");
  deleteItem.classList.add("hgi", "hgi-stroke", "hgi-delete-02", "delete-item");

  // Definindo o tipo do input
  input.setAttribute("type", "checkbox");

  // Atribuindo o valor do nome ao texto
  textName.innerText = inputName.value;

  // Organizando a estrutura dos elementos
  checkboxDiv.append(input, textName);
  item.append(checkboxDiv, deleteItem);

  // Adicionando o item à lista
  shoppingList.appendChild(item);
}

shoppingList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-item")) {
    const item = event.target.closest("li");
    item.remove();
  }
});

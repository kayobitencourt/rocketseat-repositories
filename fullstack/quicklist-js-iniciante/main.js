const form = document.querySelector("form");
const shoppingList = document.querySelector(".shopping-list");
const inputName = document.getElementById("itemName");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  createItem();
  inputName.value = "";
});

function createItem() {
  const item = document.createElement("li");
  const checkboxDiv = document.createElement("div");
  const input = document.createElement("input");
  const textName = document.createElement("p");
  const deleteItem = document.createElement("i");

  item.classList.add("list-item");
  checkboxDiv.append(input, textName);
  input.setAttribute("type", "checkbox");
  item.append(checkboxDiv, deleteItem);
  textName.classList.add("paragraph");
  textName.innerText = inputName.value;
  deleteItem.classList.add("hgi", "hgi-stroke", "hgi-delete-02", "delete-item");
  shoppingList.appendChild(item);
}

shoppingList.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-item")) {
    const item = event.target.closest("li");
    item.remove();
  }
});

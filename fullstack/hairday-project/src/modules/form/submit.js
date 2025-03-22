import dayjs from "dayjs";
const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = inputToday;

//Define a data minima sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();
  console.log("enviado");
};

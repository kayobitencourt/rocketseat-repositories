import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";
import { scheduleDay } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const clientName = document.getElementById("client");

//Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//Carrega a data atual
selectedDate.value = inputToday;

//Define a data minima sendo a data atual
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();
  try {
    const name = clientName.value.trim();

    if (!name) {
      return alert("Nome nao preenchido");
    }

    //Recupera horario selecionado
    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      return alert("Informe o horario selecionado");
    }

    //Recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //Inserindo hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    //Gera um novo id
    const id = new Date().getTime();

    //Faz o agendamento
    await scheduleNew({
      id,
      name,
      when,
    });

    //Recarrega os agendamentos
    await scheduleDay();

    clientName.value = "";
  } catch (error) {
    console.log("Nao foi possivel:", error);
  }
};

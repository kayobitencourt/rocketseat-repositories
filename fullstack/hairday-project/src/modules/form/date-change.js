//Seleciona o input de data
import { scheduleDay } from "../schedules/load";
const selectedDate = document.getElementById("date");

//Recarrega a lista de dados quando o input mudar

selectedDate.onchange = () => scheduleDay();

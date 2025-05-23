import { hoursLoad } from "../form/hours-load.js";
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { schedulesShow } from "./show.js";
const selectedDate = document.getElementById("date");

export async function scheduleDay() {
  //obtem a data do input
  const date = selectedDate.value;

  //Busca na API os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //Exibe os agendamentos
  schedulesShow({ dailySchedules });

  //Renderiza as horas disponiveis
  hoursLoad({ date, dailySchedules });
}

import { openingHours } from "../../utils/opening-hours.js";
import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date }) {
  //Limpa a list
  hours.innerHTML = "";
  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na data
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs());

    //Define se o horario esta disponivel
    return {
      hour,
      avaliable: isHourPast,
    };
  });

  //Renderiza os horarios
  opening.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-avaliable" : "hour-unavaliable");

    li.textContent = hour;

    if (hour === "9:00") {
      hourHeaderAdd("Manha");
    } else if (hour === "13:00") {
      hourHeaderAdd("Tarde");
    } else if (hour === "18:00") {
      hourHeaderAdd("Noite");
    }

    hours.append(li);
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  hours.append(header);
}

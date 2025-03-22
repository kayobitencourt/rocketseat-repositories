import { openingHours } from "../../utils/opening-hours.js";
import dayjs from "dayjs";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function hoursLoad({ date, dailySchedules }) {
  //Limpa a list
  hours.innerHTML = "";

  //Obtem a lista de todos os horarios ocupados
  const unavailableHours = dailySchedules.map((schedule) =>
    dayjs(schedule.when).format("HH:mm")
  );

  const opening = openingHours.map((hour) => {
    const [scheduleHour] = hour.split(":");

    //Adiciona a hora na data
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    const avaliable = !unavailableHours.includes(hour) && !isHourPast;
    return {
      hour,
      avaliable,
    };
  });

  //Renderiza os horarios
  opening.forEach(({ hour, avaliable }) => {
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(avaliable ? "hour-avaliable" : "hour-unavailable");

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

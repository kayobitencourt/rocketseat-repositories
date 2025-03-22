import { hoursLoad } from "../form/hours-load.js";
const selectedDate = document.getElementById("date");

export function scheduleDay() {
  //obtem a data do input
  const date = selectedDate.value;

  hoursLoad({ date });
}

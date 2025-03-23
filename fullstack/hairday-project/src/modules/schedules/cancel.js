import { scheduleCancel } from "../../services/schedule-remove-item.js";
import { scheduleDay } from "./load.js";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-item")) {
      const item = event.target.closest("li");

      //Pega o id
      const { id } = item.dataset;

      if (id) {
        const isConfirm = confirm(
          "tem certeza que deseja cancelar o agendamento?"
        );

        if (isConfirm) {
          await scheduleCancel({ id });
          scheduleDay();
        }
      }
    }
  });
});

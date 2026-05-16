import { schedulesDay } from "./load.js";
import { scheduleCancel } from "../../services/schedules-cancel.js";
const periods = document.querySelectorAll(".period");

//gera um evento de clique para cada lista
periods.forEach((period) => {
  //captura o evento de clique em cada lista
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      //obtém a li pai do elemento clicado
      const item = event.target.closest("li");

      //pega o id do agendamento para remover
      const { id } = item.dataset;

      //confirma que o id foi selecionado
      if (id) {
        //confirma se o usuário quer cancelar
        const isConfirm = confirm(
          "Tem certeza que deseja cancelar o agendamento",
        );

        if (isConfirm) {
          //faz a requisição na api para cancelar
          await scheduleCancel({ id });

          //reload da page
          schedulesDay;
        }
      }
    }
  });
});

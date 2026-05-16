import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js";
import { hoursLoad } from "../form/hours-load";
import { schedulesShow } from "../schedules/show.js";

//seleciona o input de data
const selectedDate = document.getElementById("date");

export async function schedulesDay() {
  //obtém a data do input
  const date = selectedDate.value;

  //busca na api os agendamentos
  const dailySchedules = await scheduleFetchByDay({ date });

  //exibe os agendamentos
  console.log({ dailySchedules });
  schedulesShow({ dailySchedules });

  //renderiza as horas disponíveisB
  hoursLoad({ date });
}

import { schedulesDay } from "../schedules/load";

//seleciona o input de data
const selectDate = document.getElementById("date");

//recarregar a lista de horários quando a data mudar
selectDate.onchange = () => schedulesDay();

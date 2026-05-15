import dayjs from "dayjs";

import { scheduleNew } from "../../services/schedule-new.js";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

//data atal para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//data atual para formatar o input
selectedDate.value = inputToday;

//define a data mínima como a data atual
selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  //previne o comportamente padrão de carregar a página
  event.preventDefault();

  try {
    //Recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Infore o nome do cliente!");
    }

    //horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    if (!hourSelected) {
      return alert("Selecione a hora.");
    }

    //recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    //isnerir a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");
    const id = new Date().getTime();

    await scheduleNew({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realziar o agendamento. ");
  }
};

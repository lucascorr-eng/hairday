import dayjs from "dayjs";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");

//data atal para o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

//data atual para formatar o input
selectedDate.value = inputToday;

//define a data mínima como a data atual
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  //previne o comportamente padrão de carregar a página
  event.preventDefault();
  console.log("ENVIADO!");
};

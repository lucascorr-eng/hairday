export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((available) => {
    available.addEventListener("click", (selected) => { 
      //remove a classe hour-selected de todas as classes li não selecionadas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      //adiciona a classe na li selecionada
      selected.target.classList.add("hour-selected");
    });
  });
}

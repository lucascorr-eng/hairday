export function hoursClick() {
  const hours = document.querySelectorAll(".hour-available");

  hours.forEach((avaliable) => {
    avaliable.addEventListener("click", (selected) => { 
      //rmeove a classe hour-selected de todas as classes li não selecioandas
      hours.forEach((hour) => {
        hour.classList.remove("hour-selected");
      });

      //adiciona a classe na li selecioanda
      selected.target.classList.add("hour-selected");
    });
  });
}

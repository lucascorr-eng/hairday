import dayjs from "dayjs";
import { apiCofig } from "./api-config";

export async function scheduleFetchByDay({ date }) {
  try {
    //fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    //converte para json
    const data = await response.json;

    //filtra os agendamento pelo dia selecionado
    const dailySchedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day"),
    );
  } catch (error) {
    console.log(error);
    alert("Não foi possivel buscar os agendamentos do dia selecionado.");
  }
}

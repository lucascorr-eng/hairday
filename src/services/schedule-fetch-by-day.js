import dayjs from "dayjs";
import { apiConfig } from "./api-config.js";

export async function scheduleFetchByDay({ date }) {
  try {
    //fazendo a requisição
    const response = await fetch(`${apiConfig.baseURL}/schedules`);

    if (!response.ok) {
      throw new Error(
        `Erro ao buscar agendamentos. Status: ${response.status}`,
      );
    }
    //converte para json
    const data = await response.json();

    //filtra os agendamento pelo dia selecionado
    return data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"));

    return dailySchedules;
  } catch (error) {
    console.log(error);
    alert("Não foi possível buscar os agendamentos do dia selecionado.");
    return [];
  }
}

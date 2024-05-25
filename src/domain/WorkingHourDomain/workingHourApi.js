import { api } from "../../api";

const PATH = "/working-hours";

async function getAll() {
  const { data } = await api.get(PATH);
  return data;
}

export const workingHourApi = { getAll };

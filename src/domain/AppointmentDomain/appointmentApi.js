import { api } from "../../api";

const PATH = "appointments";

async function create(request) {
  const { data } = await api.post(PATH, request);
  return data;
}

async function getByUserId(userId) {
  const { data } = await api.get(PATH + "/by-user/" + userId);
  return data;
}

export const appointmentApi = { create, getByUserId };

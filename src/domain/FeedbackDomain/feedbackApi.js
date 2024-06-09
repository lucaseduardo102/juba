import { api } from "../../api";

const PATH = "/feedbacks";

async function create(request) {
  const { data } = await api.put(PATH, request);
  return data;
}

async function getById(appointmentId) {
  const { data } = await api.get(PATH + "/" + appointmentId);
  return data;
}

async function getAll() {
  const { data } = await api.get(PATH);
  return data;
}
export const feedbackApi = { create, getById, getAll };

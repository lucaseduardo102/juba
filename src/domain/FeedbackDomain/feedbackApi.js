import { api } from "../../api";

const PATH = "/feedbacks";

async function create(request) {
  const { data } = await api.put(PATH, request);
  return data;
}

export const feedbackApi = { create };

import { api } from "../../api";

async function create(request) {
  const { data } = await api.post("/payments", request);
  return data;
}

export const paymentApi = { create };

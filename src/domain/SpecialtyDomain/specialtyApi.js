import { api } from "../../api";

const PATH = "specialties";

async function update(request) {
  const { data } = await api.patch(PATH, request);
  return data;
}

export const specialtyApi = {
  update,
};

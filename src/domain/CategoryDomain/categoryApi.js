import { api } from "../../api";

const PATH = "/categories";

async function getAll(specialties) {
  const { data } = await api.get(PATH, { params: { specialties } });
  return data;
}

async function create({ name }) {
  const { data } = await api.post(PATH, { name });
  return data;
}

async function update({ id, name }) {
  const { data } = await api.put(PATH + "/" + id, { name });
  return data;
}

async function remove(categoryId) {
  return await api.delete(PATH + "/" + categoryId);
}
export const categoryApi = {
  getAll,
  create,
  update,
  remove,
};

import { api } from "../../api";

const PATH = "/categories";

async function getAll(specialties) {
  const { data } = await api.get(PATH, { params: { specialties } });
  return data;
}

async function getCategoriesAndSpecialties() {
  return await api.get(PATH + "/specialties");
}

async function create(name) {
  return await api.post(PATH, { name });
}

async function update(request) {
  return await api.put(PATH + "/" + request.id, { name: request.name });
}

async function remove(categoryId) {
  return await api.delete(PATH + "/" + categoryId);
}
export const categoryApi = {
  getAll,
  getCategoriesAndSpecialties,
  create,
  update,
  remove,
};

import { api } from "../../api";

const PATH = "/profiles";

async function create(request) {
  const { data } = await api.post(PATH, request);
  return data;
}

async function recoveryPassword(request) {
  return await api.post(`${PATH}/recovery-password`, request);
}

async function update(request) {
  return await api.patch(`${PATH}/${request.id}`, {
    name: request.name,
    cpf: request.cpf,
    statusProfile: request.statusProfile,
  });
}

async function remove(id) {
  return await api.delete(`${PATH}/${id}`);
}

export const profileApi = {
  create,
  update,
  remove,
  recoveryPassword,
};

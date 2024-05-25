import { api } from "../../api";

const PATH = "/profiles";

async function create(request) {
  const { data } = await api.post(PATH, request);
  return data;
}

async function recoveryPassword(request) {
  const { data } = await api.post(PATH + "/recovery-password", request);
  return data;
}

async function update({ id, name, cpf, statusProfile = true, userId }) {
  const { data } = await api.patch(PATH + "/" + id, {
    name,
    cpf,
    statusProfile,
    userId,
  });
  return data;
}

async function remove({ id }) {
  return await api.delete(PATH + "/" + id);
}

export const profileApi = {
  create,
  update,
  remove,
  recoveryPassword,
};

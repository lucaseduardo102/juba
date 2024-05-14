import { api } from "../../api";

const PATH = "/users";

async function getById(userId) {
  const { data } = await api.get(PATH + "/" + userId);
  return data;
}

async function getAll(profiles) {
  const { data } = await api.get(PATH, { params: { profiles } });
  return data;
}

async function auth(request) {
  const { data } = await api.post(`/auth`, request);
  return data;
}

async function create(request) {
  const { data } = await api.post(PATH, request);
  return data;
}
/* 
async function update(request) {
  return await api.patch(`${PATH}/${request.userId}`, {
    email: request.email,
    password: request.password,
    permissionId: request?.permission,
  });
}
*/

async function update({ userId, email, password, permission }) {
  const response = await api.patch(`${PATH}/${userId}`, {
    email,
    password,
    permission,
  });
  return response.data;
}

export const userApi = {
  auth,
  create,
  getById,
  getAll,
  update,
};

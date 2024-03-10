import { api } from "../../api";

const PATH = '/users';

async function getById(userId) {
  return await api.get(`${PATH}/${userId}`);
}

async function getAll() {
  return await api.get(PATH);
}

async function getProfilesByUser(userId) {
  return await api.get(`${PATH}/${userId}/profiles`);
}

async function auth(request) {
  return await api.post(`${PATH}/login`, request);
}

async function create(request) {
  return await api.post(PATH, request);
}

async function update(request) {
  return await api.patch(`${PATH}/${request.userId}`, {
    email: request.email,
    password: request.password,
    permissionId: request.permissionId,
  });
}

export const userApi = {
  auth,
  create,
  getById,
  getAll,
  getProfilesByUser,
  update,
};

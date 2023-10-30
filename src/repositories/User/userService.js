import { api } from "../../services";

const PATH = "/user";

async function getAll() {
  const response = await api.get(`${PATH}`);
  return response.data;
}

async function getById(userId) {
  const response = await api.get(`${PATH}/${userId}`);
  return response.data;
}

async function getByPermissionId(userPermissionId) {
  const response = await api.get(`${PATH}/permission/${userPermissionId}`);
  return response.data;
}

async function signIn(email, password) {
  const response = await api.post(`${PATH}/login`, { email, password });
  return response.data;
}

async function signUp(email, password, userPermissionId) {
  const response = await api.post(`${PATH}/register`, {
    email,
    password,
    userPermissionId,
  });
  return response.data;
}

async function update(userId, email, password, userPermissionId) {
  const response = await api.patch(`${PATH}/permission/${userId}`, {
    email,
    password,
    userPermissionId,
  });
  return response.data;
}

export const userService = {
  getAll,
  getById,
  getByPermissionId,
  signIn,
  signUp,
  update,
};

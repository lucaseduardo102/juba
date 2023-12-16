import {api} from '../../services';

const PATH = '/user';

async function getList() {
  return await api.get(PATH);
}

async function getListByPermission(id) {
  return await api.get(`${PATH}/permission/${id}`);
}

async function auth(email, password) {
  return await api.post(`${PATH}/login`, {email, password});
}

async function create(
  email,
  password,
  userPermissionId,
) {
  return await api.post(`${PATH}/register`, {
    email,
    password,
    userPermissionId,
  });
}

async function update(
  id,
  email,
  password,
  userPermissionId,
) {
  return await api.patch(`${PATH}/${id}`, {
    email,
    password,
    userPermissionId,
  });
}

async function updatePassword(
  email,
  cpf,
  password,
) {
  return await api.patch(`${PATH}/recovery-password`, {
    email,
    cpf,
    password,
  });
}

export const userApi = {
  auth,
  create,
  getList,
  getListByPermission,
  update,
  updatePassword
};

import {api} from '../../api';

const PATH = '/user';

async function getList() {
  return await api.get(PATH);
}

async function getListByPermission(permissionId) {
  return await api.get(`${PATH}/permission/${permissionId}`);
}

async function auth(email, password) {
  return await api.post(`${PATH}/login`, {email, password});
}

async function create(
  email,
  password,
  permissionId,
) {
  return await api.post(`${PATH}`, {
    email,
    password,
    permissionId,
  });
}

async function update(
  userId,
  email,
  password,
  permissionId,
) {
  return await api.patch(`${PATH}/${userId}`, {
    email,
    password,
    permissionId,
  });
}


export const userApi = {
  auth,
  create,
  getList,
  getListByPermission,
  update,
};

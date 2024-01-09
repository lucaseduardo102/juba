import {api} from '../../api';

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


export const userApi = {
  auth,
  create,
  getList,
  getListByPermission,
  update,
};

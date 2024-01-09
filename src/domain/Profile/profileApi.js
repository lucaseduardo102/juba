import {api} from '../../api';

const PATH = '/profile';

async function getListByUser(userId) {
  return await api.get(`${PATH}/user/${userId}`);
}

async function getListByPermission(permissionId) {
  return await api.get(`${PATH}/permission/${permissionId}`);
}

async function create(
  name,
  cpf,
  statusProfile,
  userId,
) {
  return await api.post(PATH, {
    name,
    cpf,
    statusProfile,
    userId,
  });
}

async function fullyUpdate(
  profileId,
  name,
  cpf,
  statusProfile,
  userId,
) {
  return await api.put(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
    userId,
  });
}

async function update(
  profileId,
  name,
  cpf,
  statusProfile,
) {
  return await api.patch(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
  });
}

async function updatePassword(
  email,
  profileCpf,
  newPassword,
) {
  return await api.patch(`${PATH}/recovery`, {
    email,
    profileCpf,
    newPassword,
  });
}

async function remove(id) {
  return await api.delete(`${PATH}/${id}`);
}

export const profileApi = {
  getListByUser,
  getListByPermission,
  create,
  fullyUpdate,
  update,
  updatePassword,
  remove,
};

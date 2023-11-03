import {api} from '@services';

const PATH = '/profile';

async function getListByUser(userId: string) {
  return await api.get(`${PATH}/user/${userId}`);
}

async function getListByPermission(permissionId: number) {
  return await api.get(`${PATH}/permission/${permissionId}`);
}

async function create(
  name: string,
  cpf: string,
  statusProfile: boolean,
  userId: string,
) {
  return await api.post(PATH, {
    name,
    cpf,
    statusProfile,
    userId,
  });
}

async function fullyUpdate(
  profileId: string,
  name: string,
  cpf: string,
  statusProfile: boolean,
  userId: string,
) {
  return await api.put(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
    userId,
  });
}

async function update(
  profileId: string,
  name: string,
  cpf: string,
  statusProfile: boolean,
) {
  return await api.patch(`${PATH}/${profileId}`, {
    name,
    cpf,
    statusProfile,
  });
}

async function remove(id: string) {
  return await api.delete(`${PATH}/${id}`);
}

export const profileApi = {
  getListByUser,
  getListByPermission,
  create,
  fullyUpdate,
  update,
  remove,
};

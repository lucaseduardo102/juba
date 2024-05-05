import {api} from '../../api'; 

const PATH = '/permissions';

async function getUsersByPermission(permissionType) {
  return await api.get(`${PATH}/${permissionType}/users`);
}

async function getProfilesByPermission(permissionType) {
  return await api.get(`${PATH}/${permissionType}/profiles`);
}

export const permissionApi = {
  getUsersByPermission,
  getProfilesByPermission,
};
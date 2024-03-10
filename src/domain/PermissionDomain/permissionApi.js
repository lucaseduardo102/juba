import {api} from '../../api'; 

const PATH = '/permissions';

async function getUsersByPermission() {
  return await api.get(`${PATH}/${permissionType}/users`);
}

async function getProfilesByPermission() {
  return await api.get(`${PATH}/${permissionType}/profiles`);
}

export const permissionApi = {
  getUsersByPermission,
  getProfilesByPermission,
};
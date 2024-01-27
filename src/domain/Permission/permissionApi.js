import {api} from '../../api'; 

const PATH = '/permission';

async function getListOfUsersAndProfiles(){
    return await api.get(`${PATH}/users/profiles`);
  }

export const permissionApi = {
    getListOfUsersAndProfiles,
};
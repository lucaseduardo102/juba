/*
import { api } from '../../../services/api';
import {UserType} from '../repoTypes';

const PATH = '';

export async function authUser(user: UserType) {
  return await api.post('login', user);
}

export async function createUserClient(userDataForm: UserType) {
  const {email, password} = userDataForm,
    user = {
      email,
      password,
      userPermission: {id: 3},
    };
  const response = await api.post('', user);
  if (response.status === 201) {
    return `Usuário "${response.data.email}" criado com sucesso!`;
  } else {
    return 'Usuário já cadastrado!';
  }
}

*/
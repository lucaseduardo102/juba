import { api } from "../../services/api";

const PATH = "/user";

async function signIn(email, senha) {
  try {
    const response = await api.post(`${PATH}/login`, { email, senha });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function createUser(email, password, userPermissionId) {
  try {
    const response = await api.post(`${PATH}/register`, {
      email,
      password,
      userPermissionId: 3,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export const user = {
  signIn,
  createUser,
};

import { userApi } from "../userApi";
import { useFetchApi } from "../../../hooks/useFetchApi";

export function useUserRecoveryPassword() {
  return useFetchApi({
    apiFn: ({ email, cpf, password }) =>
      userApi.updatePassword(email, cpf, password),
  });
}

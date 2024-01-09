import { profileApi } from "../profileApi";
import { useFetchApi } from "../../../hooks/useFetchApi";

export function useProfileRecoveryPassword() {
  return useFetchApi({
    apiFn: ({ email, cpf, password }) =>
      profileApi.updatePassword(email, cpf, password),
  });
}

import { userApi } from "../userApi";
import { useFetchApi } from "../../../hooks/useFetchApi";

export function useUserAuth() {
  return useFetchApi({
    apiFn: ({ email, password }) => userApi.auth(email, password),
  });
}

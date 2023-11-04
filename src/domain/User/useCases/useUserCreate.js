import { userApi } from "../userApi";
import { useFetchApi } from "../../infra/useFetchApi";

export function useUserCreate() {
  return useFetchApi({
    apiFn: ({ email, password, permissionId }) =>
      userApi.create(email, password, permissionId),
  });
}

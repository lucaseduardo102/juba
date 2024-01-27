import { useFetchApi } from "../../../hooks/useFetchApi";
import { permissionApi } from '../permissionApi';

export function usePermissionGetListOfUsersAndProfiles() {
  return useFetchApi({
    apiFn: permissionApi.getListOfUsersAndProfiles,
  });

}
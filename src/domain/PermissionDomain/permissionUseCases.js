import { useFetch } from "../../hooks/useFetch";
import { permissionApi } from "./permissionApi";

export function useGetProfilesByPermissionType() {
  return useFetch(permissionApi.getProfilesByPermission);
}

export function useGetUsersByPermissionType() {
  return useFetch(permissionApi.getUsersByPermission);
}

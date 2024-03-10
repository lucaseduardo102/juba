import { userApi } from "./userApi";
import { useFetch } from "../../hooks/useFetch";

export function useUserAuth() {
  return useFetch(userApi.auth);
}
export function useUserCreate() {
  return useFetch(userApi.create);
}
export function useUserGetProfilesByUserId() {
  return useFetch(userApi.getProfilesByUser);
}
export function useUserGetAll() {
  return useFetch(userApi.getAll);
}
export function useUserGetById() {
  return useFetch(userApi.getById);
}
export function useUserUpdate() {
  return useFetch(userApi.update);
}

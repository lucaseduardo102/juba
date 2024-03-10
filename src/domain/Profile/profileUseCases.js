import {useFetch} from "../../hooks/useFetch";
import {profileApi} from "./profileApi";

export function useCreateProfile() {
  return useFetch(profileApi.create);
}

export function useRecoveryPassword() {
  return useFetch(profileApi.recoveryPassword);
}

export function useRemoveProfile() {
  return useFetch(profileApi.remove);
}

export function useUpdateProfile() {
  return useFetch(profileApi.update);
}
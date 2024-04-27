import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "../../hooks/useFetch";
import { profileApi } from "./profileApi";

export function useProfileCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["ProfileGetAll", "UserGetById", "UserGetAll"],
      });
    },
  });
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

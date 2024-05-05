import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFetch } from "../../hooks/useFetch";
import { profileApi } from "./profileApi";
import { QueryKeys, invalidateQueries } from "../../services";

const keysToInvalidate = [
  QueryKeys.ProfileGetAll,
  QueryKeys.UserGetAll,
  QueryKeys.UserGetById,
];

export function useProfileCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.create,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: keysToInvalidate,
      });
    },
  });
}

export function useRecoveryPassword() {
  return useFetch(profileApi.recoveryPassword);
}

export function useProfileRemove() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.remove,
    onSuccess: () => {
      invalidateQueries({ queryClient, queryKeys: keysToInvalidate });
    },
  });
}

export function useProfileUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: profileApi.update,
    onSuccess: () => {
      invalidateQueries({
        queryClient,
        queryKeys: keysToInvalidate,
      });
    },
  });
}

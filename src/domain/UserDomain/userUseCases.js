import { userApi } from "./userApi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../../services/queryClient/QueryKeys";

export function useUserAuth() {
  return useMutation({ mutationFn: userApi.auth });
}

export function useUserGetAll({ withProfiles = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.UserGetAll],
    queryFn: () => userApi.getAll(withProfiles),
  });
}

export function useUserGetById(userId) {
  return useQuery({
    queryKey: [QueryKeys.UserGetById],
    queryFn: () => userApi.getById(userId),
  });
}

export function useUserCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.UserGetAll] });
    },
  });
}

export function useUserUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.UserGetAll] });
    },
  });
}

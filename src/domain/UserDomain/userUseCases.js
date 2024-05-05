import { userApi } from "./userApi";
import { useFetch } from "../../hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../../services/queryClient/QueryKeys";

export function useUserAuth() {
  return useMutation({ mutationFn: userApi.auth });
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
export function useUserGetProfilesByUserId() {
  return useFetch(userApi.getProfilesByUser);
}
export function useUserGetAll({ withProfiles = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.UserGetAll],
    queryFn: () => userApi.getAll({ profiles: withProfiles }),
  });
}
export function useUserGetById(userId) {
  return useQuery({
    queryKey: [QueryKeys.UserGetById],
    queryFn: () => userApi.getById(userId),
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

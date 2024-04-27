import { userApi } from "./userApi";
import { useFetch } from "../../hooks/useFetch";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useUserAuth() {
  return useFetch(userApi.auth);
}
export function useUserCreate() {
  return useFetch(userApi.create);
}
export function useUserGetProfilesByUserId() {
  return useFetch(userApi.getProfilesByUser);
}
export function useUserGetAll({ withProfiles = true } = {}) {
  return useQuery({
    queryKey: ["UserGetAll"],
    queryFn: () => userApi.getAll({ profiles: withProfiles }),
  });
}
export function useUserGetById(userId) {
  return useQuery({
    queryKey: ["UserGetById"],
    queryFn: () => userApi.getById(userId),
  });
}
export function useUserUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: userApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["UserGetAll"] });
    },
  });
}

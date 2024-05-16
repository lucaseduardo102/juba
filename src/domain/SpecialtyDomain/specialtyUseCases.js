import { useMutation, useQueryClient } from "@tanstack/react-query";
import { specialtyApi } from "./specialtyApi";
import { QueryKeys } from "../../services";

export function useSpecialtyCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: specialtyApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.CategoryGetAll] });
    },
  });
}

export function useSpecialtyUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: specialtyApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.CategoryGetAll] });
    },
  });
}

import { categoryApi } from "./categoryApi";
import { QueryKeys } from "../../services/queryClient/QueryKeys";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useCategoryCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoryApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.CategoryGetAll] });
    },
  });
}
export function useCategoryGetAll({ withSpecialties = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.CategoryGetAll],
    queryFn: () => categoryApi.getAll(withSpecialties),
  });
}

export function useCategoryUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: categoryApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.CategoryGetAll] });
    },
  });
}

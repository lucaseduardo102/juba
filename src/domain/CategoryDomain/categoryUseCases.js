import { categoryApi } from "./categoryApi";
import { useFetch } from "../../hooks/useFetch";
import { QueryKeys } from "../../services/queryClient/QueryKeys";
import { useQuery } from "@tanstack/react-query";

function useCreate() {
  return useFetch(categoryApi.create);
}
export function useCategoryGetAll({ withSpecialties = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.CategoryGetAll],
    queryFn: () => categoryApi.getAll(withSpecialties),
  });
}
function useGetCategoriesAndSpecialties() {
  return useFetch(categoryApi.getCategoriesAndSpecialties);
}
function useRemove() {
  return useFetch(categoryApi.remove);
}
function useUpdate() {
  return useFetch(categoryApi.update);
}

// export const categoryUseCases = {
//   create,
//   getAll,
//   getCategoriesAndSpecialties,
//   update,
//   remove,
// };

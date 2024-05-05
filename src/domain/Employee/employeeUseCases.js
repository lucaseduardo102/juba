import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../services";
import { employeeApi } from "./employeeApi";

export function useEmployeeGetAll({ available = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.EmployeeGetAll],
    queryFn: () => employeeApi.getAll(available),
  });
}

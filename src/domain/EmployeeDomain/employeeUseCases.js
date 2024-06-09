import { useMutation, useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../services";
import { employeeApi } from "./employeeApi";

export function useEmployeeGetAll({ available = true } = {}) {
  return useQuery({
    queryKey: [QueryKeys.EmployeeGetAll],
    queryFn: () => employeeApi.getAll(available),
  });
}

export function useEmployeeUpdate() {
  return useMutation({ mutationFn: employeeApi.update });
}

export function useEmployeeGetAvailableSpecialties({
  employeeId,
  date,
  time,
}) {
  return useQuery({
    queryKey: [QueryKeys.EmployeeGetAvailableSpecialties],
    queryFn: () => employeeApi.getAvailableSpecialties(employeeId, date, time),
  });
}
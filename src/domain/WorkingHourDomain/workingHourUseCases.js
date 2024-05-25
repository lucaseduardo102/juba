import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "../../services";
import { workingHourApi } from "./workingHourApi";

export function useWorkingHourGetAll() {
  return useQuery({
    queryKey: [QueryKeys.WorkingHourGetAll],
    queryFn: workingHourApi.getAll,
  });
}

// export async function createNewWorkingHour(workingHour) {
//   try {
//     await api.post(PATH, workingHour);
//     Alert({ message: "Novo horário criado com sucesso." });
//   } catch (error) {
//     if (isAxiosError(error) && error.response?.status === 401) {
//       Alert({ message: "Horários já cadastrados." });
//     }
//   }
// }

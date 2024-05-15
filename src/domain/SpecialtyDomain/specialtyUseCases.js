import { useMutation } from "@tanstack/react-query";
import { specialtyApi } from "./specialtyApi";

export function useSpecialtyUpdate() {
  return useMutation({ mutationFn: specialtyApi.update });
}

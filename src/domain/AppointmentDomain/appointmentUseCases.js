import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../../services";
import { appointmentApi } from "./appointmentApi";

export function useAppointmentCreate({ specialtyId }) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: appointmentApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.ScheduleGetSchedule, specialtyId],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetByUserId],
      });
    },
  });
}

export function useAppointmentsGetByUserId({ userId }) {
  return useQuery({
    queryKey: [QueryKeys.AppointmentGetByUserId],
    queryFn: () => appointmentApi.getByUserId(userId),
  });
}

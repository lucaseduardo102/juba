import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { QueryKeys } from "../../services";
import { appointmentApi } from "./appointmentApi";

export function useAppointmentCreate({ specialtyId, date = undefined }) {
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
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetAll, date],
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

export function useAppointmentGetById(appointmentId) {
  return useQuery({
    queryKey: [QueryKeys.AppointmentGetById],
    queryFn: () => appointmentApi.getById(appointmentId),
  });
}

export function useAppointmentUpdate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: appointmentApi.update,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetById],
      });
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetAll],
      });
    },
  });
}

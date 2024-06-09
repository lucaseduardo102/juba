import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { feedbackApi } from "./feedbackApi";
import { QueryKeys } from "../../services";

export function useFeedbackCreate() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: feedbackApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.AppointmentGetByUserId],
      });
    },
  });
}
export function useFeedbackGetById(appointmentId) {
  return useQuery({
    queryKey: [QueryKeys.FeedbackGetById],
    queryFn: () => feedbackApi.getById(appointmentId),
  });
}

export function useFeedbackGetAll() {
  return useQuery({
    queryKey: [QueryKeys.FeedbackGetAll],
    queryFn: () => feedbackApi.getAll(),
  });
}

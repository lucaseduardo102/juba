import { useMutation } from "@tanstack/react-query";
import { feedbackApi } from "./feedbackApi";

export function useFeedbackCreate() {
  return useMutation({ mutationFn: feedbackApi.create });
}

// Alterar o feedback
// invalidar as Queries
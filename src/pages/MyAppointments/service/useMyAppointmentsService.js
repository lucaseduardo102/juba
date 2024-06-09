import { useAuthStore } from "../../../services";
import { useAppointmentsGetByUserId } from "../../../domain";

export function useMyAppointmentsService() {
  const {
    authCredentials: {
      user: { id },
    },
  } = useAuthStore();

  const {
    data: appointments,
    isLoading,
    isError,
  } = useAppointmentsGetByUserId({
    userId: id,
  });

  return {
    appointments,
    isLoading,
    isError,
  };
}

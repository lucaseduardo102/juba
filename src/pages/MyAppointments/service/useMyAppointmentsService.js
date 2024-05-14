import { useAuthStore } from "../../../services";
import { useAppointmentsGetByUserId } from "../../../domain";
import { useVisibility } from "../../../hooks/useVisibility";
import { useState } from "react";

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

  const modalFeedback = useVisibility();
  const [selectedAppointmentId, setSelectedAppointmentId] = useState();

  const openModalFeedback = (appointmentId) => {
    modalFeedback.handleVisibility();
    setSelectedAppointmentId(appointmentId);
  };

  return {
    appointments,
    isLoading,
    isError,
    selectedAppointmentId,
    modalFeedback,
    openModalFeedback,
  };
}

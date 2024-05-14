import { Load, Screen, ScreenTitle } from "../../components";
import { ModalAssessment } from "./components/ModalAssessment";
import { CardContent } from "./components/CardContent";
import { useMyAppointmentsService } from "./service/useMyAppointmentsService";

export function MyAppointments() {
  const {
    appointments,
    isLoading,
    isError,
    selectedAppointmentId,
    modalFeedback,
    openModalFeedback,
  } = useMyAppointmentsService();

  return (
    <Screen fluid="sm">
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          {appointments?.length === 0 && (
            <ScreenTitle>Nenhum atendimento marcado</ScreenTitle>
          )}
          {appointments?.map((appointment) => (
            <CardContent
              key={appointment.id}
              appointment={appointment}
              openModalFeedback={openModalFeedback}
            />
          ))}
        </>
      )}
      {modalFeedback.isVisible && (
        <ModalAssessment
          appointmentId={selectedAppointmentId}
          handleVisibility={modalFeedback.handleVisibility}
        />
      )}
    </Screen>
  );
}

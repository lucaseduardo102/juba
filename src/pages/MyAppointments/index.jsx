import { Load, Screen, ScreenTitle } from "../../components";
import { CardContent } from "./components/CardContent";
import { useMyAppointmentsService } from "./service/useMyAppointmentsService";
import { ActionButtons } from "./components/ActionButtons";

export function MyAppointments() {
  const { appointments, isLoading, isError } = useMyAppointmentsService();

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
            <CardContent key={appointment.id} appointment={appointment}>
              <ActionButtons appointment={appointment} />
            </CardContent>
          ))}
        </>
      )}
    </Screen>
  );
}

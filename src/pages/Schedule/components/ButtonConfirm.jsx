import { useNavigate } from "react-router-dom";
import {
  ToastMessages,
  useScheduleStore,
  useToastStore,
} from "../../../services";
import { useAppointmentCreate } from "../../../domain";
import { Button, Spinner } from "react-bootstrap";

export function ButtonConfirm() {
  const {
    appointment: {
      client: { id: clientId },
      specialty: { id: specialtyId },
      employee: { id: employeeId },
      date,
      time,
    },
    clearAppointment,
  } = useScheduleStore();
  const { mutate, isPending } = useAppointmentCreate({
    specialtyId,
  });

  const { showToast } = useToastStore();
  const navigate = useNavigate();

  const mutateOptions = {
    onSuccess: () => {
      showToast({
        message: ToastMessages.Schedule.AppointmentCreate.success,
      });
      clearAppointment();
      navigate("/meus-agendamentos", { replace: true });
    },
    onError: () => {
      showToast({
        message: ToastMessages.Schedule.AppointmentCreate.error,
      });
    },
  };

  const sendToConfirm = () => {
    mutate(
      {
        clientId,
        employeeId,
        specialtyId,
        dateTime: date + " " + time,
      },
      mutateOptions
    );
  };

  return (
    <Button
      style={{ marginTop: 50 }}
      variant="outline-dark"
      onClick={sendToConfirm}
      disabled={isPending}
    >
      Confirmar {isPending && <Spinner size="sm" />}
    </Button>
  );
}

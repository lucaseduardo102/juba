import { useState } from "react";
import { useAppointmentUpdate } from "../../../domain";
import { ToastMessages, useToastStore } from "../../../services";
import { Button, Form, Spinner } from "react-bootstrap";

const EMPTY_OPTION = {
  type: "VAZIO",
  title: "Selecione uma opção",
};

export function FormStatusOptions({
  appointmentId,
  status,
  statusTypeMessages,
  handleVisibility,
}) {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const updatedStatus = selectedStatus !== status;
  const appointmentUpdate = useAppointmentUpdate();
  const { showToast } = useToastStore();

  const handleSelectedStatus = (event) => {
    setSelectedStatus(event.target.value);
  };

  const request = {
    appointmentId,
    appointmentStatus: selectedStatus,
  };

  const mutateOptions = {
    onSuccess: () => {
      showToast({
        message: ToastMessages.Attendances.UpdateAppointment.success,
      });
      handleVisibility();
    },
    onError: () => {
      showToast({
        message: ToastMessages.Attendances.UpdateAppointment.error,
      });
    },
  };

  const sendData = () => {
    appointmentUpdate.mutate(request, mutateOptions);
  };

  return (
    <>
      <Form.Label>Ações</Form.Label>
      <Form.Select value={selectedStatus} onChange={handleSelectedStatus}>
        <option value={EMPTY_OPTION.type}>{EMPTY_OPTION.title}</option>
        {statusTypeMessages[status]?.map(({ type, title }) => (
          <option key={type} value={type}>
            {title}
          </option>
        ))}
      </Form.Select>
      <div className="d-flex justify-content-end mt-4">
        <Button
          variant="dark"
          onClick={sendData}
          disabled={!updatedStatus || appointmentUpdate.isPending}
        >
          Confirmar {appointmentUpdate.isPending && <Spinner size="sm" />}
        </Button>
      </div>
    </>
  );
}

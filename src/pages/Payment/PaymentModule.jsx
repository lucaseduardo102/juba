import { useState } from "react";
import { Button, Form, FormControl, Spinner } from "react-bootstrap";
import { useScheduleStore, useToastStore } from "../../services";
import { useAppointmentCreate } from "../../domain";
import { useNavigate } from "react-router-dom";

export function PaymentBox() {
  const [paymentMethod, setPaymentMethod] = useState();

  const {
    appointment: { date, time, specialty, employee, client },
    clearAppointment,
  } = useScheduleStore();

  const { showToast } = useToastStore();
  const { mutate, isPending } = useAppointmentCreate({
    specialtyId: specialty?.id,
  });

  const navigate = useNavigate();

  const sendToCreate = () => {
    mutate(
      {
        employeeId: employee?.id,
        clientId: client?.id,
        specialtyId: specialty?.id,
        dateTime: date + " " + time,
        appointmentStatus: "MARCADO",
      },
      {
        onSuccess: () => {
          showToast({ message: "Atendimento agendado com sucesso" });
          clearAppointment();
          navigate("/meus-agendamentos", { replace: true });
        },
        onError: () => {
          showToast({
            message: "Erro ao realizar o agendamento. Tente novamente.",
          });
          navigate("/agendamento", { replace: true });
        },
      }
    );
  };

  return (
    <>
      <div className="d-flex justify-content-center gap-4 my-4">
        <PaymentButton
          title="Cartão de Crédito/Débito"
          isSelected={paymentMethod === 0}
          onClick={() => setPaymentMethod(0)}
        />
        <PaymentButton
          title="Pix/Dinheiro"
          isSelected={paymentMethod === 1}
          onClick={() => setPaymentMethod(1)}
        />
      </div>

      {paymentMethod === 1 ? (
        <div className="text-center">
          <b>
            O pagamento será efetuado ao final do atendimento. Deseja
            prosseguir?
          </b>
          <div className="d-flex justify-content-center">
            <Button
              variant="outline-success"
              className="mt-4"
              style={{ width: 300 }}
              onClick={sendToCreate}
              disabled={isPending}
            >
              Confirmar {isPending && <Spinner size="sm" />}
            </Button>
          </div>
        </div>
      ) : (
        <Form>
          <Form.Group>
            <Form.Label>Número do cartão</Form.Label>
            <FormControl></FormControl>
          </Form.Group>
          <Form.Group>
            <Form.Label>Data de expiração</Form.Label>
            <FormControl></FormControl>
          </Form.Group>

          <Form.Label>CVV</Form.Label>
          <FormControl></FormControl>
        </Form>
      )}
    </>
  );
}

function PaymentButton({ title, isSelected, onClick }) {
  return (
    <Button
      variant={isSelected ? "dark" : "outline-dark"}
      style={{ width: 300, padding: 40 }}
      onClick={onClick}
    >
      {title}
    </Button>
  );
}

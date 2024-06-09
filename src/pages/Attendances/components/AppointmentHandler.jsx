import { Modal } from "react-bootstrap";
import { Load } from "../../../components";
import { useAppointmentGetById } from "../../../domain";
import { mask } from "../../../utils";
import { Description } from "./Description";
import { Line } from "./Line";
import { StatusOptions } from "./StatusOptions";

export function AppointmentHandler({ appointmentInfo, handleVisibility }) {
  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>
        <h4 className="fs-4">Atendimento</h4>
      </Modal.Header>
      <Modal.Body>
        {appointmentInfo?.appointmentId ? (
          <FormHandleAppointment
            appointmentId={appointmentInfo?.appointmentId}
            handleVisibility={handleVisibility}
          />
        ) : (
          <FormRegisterAppointment appointmentInfo={appointmentInfo} />
        )}
      </Modal.Body>
    </Modal>
  );
}

function FormHandleAppointment({ appointmentId, handleVisibility }) {
  const {
    data: appointment,
    isLoading,
    isError,
  } = useAppointmentGetById(appointmentId);

  if (isLoading || isError) {
    return <Load />;
  }

  return (
    <>
      <SchedulingDescription
        employee={appointment?.employee}
        scheduling={appointment?.scheduling}
      />
      <ServiceDescription specialty={appointment?.specialty} />
      <ClientDescription client={appointment?.client} />
      <StatusDescription status={appointment?.status}>
        <StatusOptions
          status={appointment?.status}
          appointmentId={appointment?.id}
          handleVisibility={handleVisibility}
        />
      </StatusDescription>
    </>
  );
}

function SchedulingDescription({ scheduling, employee }) {
  return (
    <Description title="Descrição do atendimento">
      <Line label="Dia" value={mask.parseDateToBrl(scheduling?.date)} />
      <Line label="Horário" value={scheduling?.startTime} />
      <Line label="Funcionário" value={employee?.name} />
    </Description>
  );
}

function ServiceDescription({ specialty }) {
  return (
    <Description title="Descrição do serviço">
      <Line label="Serviço" value={specialty?.name} />
      <Line
        label="Preço"
        value={`R$ ${mask.currencyFormatBRL(specialty?.price ?? 0.0)}`}
      />
      <Line label="Duração" value={specialty?.timeDuration} />
    </Description>
  );
}

function ClientDescription({ client }) {
  return (
    <Description title="Descrição do cliente">
      <Line label="Nome" value={client?.name} />
    </Description>
  );
}

function StatusDescription({ status, children }) {
  return (
    <div className="mb-3">
      <h5 className="fs-5">Estado do atendimento</h5>
      <div>
        <span>{mask.formatStatus(status)}</span>
      </div>
      {children}
    </div>
  );
}

function FormRegisterAppointment({ appointmentInfo }) {
  const { employee, date, workingHour } = appointmentInfo;

  const scheduling = {
    date,
    startTime: workingHour?.time,
  };

  // TODO: BUSCAR SERVIÇOS

  //TODO: BUSCAR CLIENTES
  //TODO: SALVAR E COLOCAR SPINNER
  return <SchedulingDescription employee={employee} scheduling={scheduling} />;
}

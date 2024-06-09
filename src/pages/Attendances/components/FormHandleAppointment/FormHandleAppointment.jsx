import { Load } from "../../../../components";
import { useAppointmentGetById } from "../../../../domain";
import { mask } from "../../../../utils";
import { SchedulingDescription } from "../AppointmentHandler";
import { Description } from "../Description";
import { Line } from "../Line";
import { StatusOptions } from "../StatusOptions";

export function FormHandleAppointment({ appointmentId, handleVisibility }) {
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

import { Form, FormGroup, Modal } from "react-bootstrap";
import { useEmployeeGetAvailableSpecialties } from "../../../domain";
import { mask } from "../../../utils";
import { Description } from "./Description";
import { Line } from "./Line";
import { useState } from "react";
import { FormHandleAppointment } from "./FormHandleAppointment/FormHandleAppointment";
import { FormRegisterAppointment } from "./FormRegisterAppointment/FormRegisterAppointment";

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
          <FormRegisterAppointment
            appointmentInfo={appointmentInfo}
            handleVisibility={handleVisibility}
          />
        )}
      </Modal.Body>
    </Modal>
  );
}

export function SchedulingDescription({ scheduling, employee }) {
  return (
    <Description title="Descrição do atendimento">
      <Line label="Dia" value={mask.parseDateToBrl(scheduling?.date)} />
      <Line label="Horário" value={scheduling?.startTime} />
      <Line label="Funcionário" value={employee?.name} />
    </Description>
  );
}

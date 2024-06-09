import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useScheduleGetAllByDate } from "../../domain";
import { Load, Screen } from "../../components";
import { mask } from "../../utils";
import { useVisibility } from "../../hooks/useVisibility";
import { InputDate } from "./components/InputDate";
import { AppointmentHandler } from "./components/AppointmentHandler";

export function Attendances() {
  const [startDate, setStartDate] = useState(new Date());

  const selectedDate = mask.formatDate(startDate);
  const {
    data: appointments,
    isError,
    isLoading,
  } = useScheduleGetAllByDate(selectedDate);

  return (
    <Screen fluid="sm">
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <InputDate startDate={startDate} setStartDate={setStartDate} />
          {appointments?.map((appointment) => (
            <AppointmentCard
              key={appointment.id}
              appointment={appointment}
              date={selectedDate}
            />
          ))}
        </>
      )}
    </Screen>
  );
}

function AppointmentCard({ appointment, date }) {
  const { id, name, workingHours } = appointment;
  return (
    <Card key={id}>
      <Card.Body>
        <Card.Title>
          <h2 className="fs-4 mb-4">{name}</h2>
        </Card.Title>
        <div className="d-flex flex-row flex-wrap gap-3">
          {workingHours?.map((workingHour) => (
            <BoxTimes
              key={workingHour.time}
              date={date}
              workingHour={workingHour}
              appointment={appointment}
            />
          ))}
        </div>
      </Card.Body>
    </Card>
  );
}

function BoxTimes({ date, workingHour, appointment }) {
  const isPauseBreak = !workingHour.available && !workingHour?.appointmentId;
  const { isVisible, handleVisibility } = useVisibility();

  const appointmentInfo = {
    appointmentId: workingHour?.appointmentId,
    employee: { id: appointment?.id, name: appointment?.name },
    date,
    workingHour,
  };

  if (!isPauseBreak) {
    return (
      <>
        <Button
          variant={workingHour.available ? "outline-dark" : "outline-danger"}
          onClick={handleVisibility}
        >
          {workingHour.time}
        </Button>
        {isVisible && (
          <AppointmentHandler
            appointmentInfo={appointmentInfo}
            handleVisibility={handleVisibility}
          />
        )}
      </>
    );
  }
}
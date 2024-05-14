import { Button, Form } from "react-bootstrap";
import { useScheduleStore } from "../../../services";
import { ClientSelector } from "./ClientSelector";

export function AvailableTimes({ availableTimes }) {
  const {
    appointment: { time: selectedTime },
    handleChangeValue,
  } = useScheduleStore();

  if (availableTimes?.length > 0) {
    return (
      <>
        <Form.Label className="ms-2 mt-3">Horários disponíveis</Form.Label>

        <div className="d-flex flex-wrap gap-3">
          {availableTimes.map((item) => {
            return (
              <Button
                key={item.time}
                variant={selectedTime === item.time ? "dark" : "outline-dark"}
                size="sm"
                onClick={() => handleChangeValue("time", item.time)}
              >
                {item.time}
              </Button>
            );
          })}
        </div>
        {selectedTime && <ClientSelector />}
      </>
    );
  }
}

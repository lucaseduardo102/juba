import { Load } from "../../../components";
import { Form, Button } from "react-bootstrap";
import { mask } from "../../../utils";
import { useScheduleGetSchedule } from "../../../domain";
import { useScheduleStore } from "../../../services";
import { EmployeeSelector } from "./EmployeeSelector";

export function ScheduleSelector({ specialtyId }) {
  const {
    appointment: { date: selectedDate },
    handleChangeValue,
  } = useScheduleStore();

  const {
    data: schedule,
    isLoading,
    isError,
  } = useScheduleGetSchedule({ specialtyId });

  const handleDate = (date) => {
    if (selectedDate !== date) {
      handleChangeValue("date", date);
    }
  };

  if (isLoading || isError) {
    return <Load />;
  }

  return (
    <>
      <Form.Label className="ms-2 mt-3">Dia</Form.Label>
      <div className="d-flex gap-2">
        {schedule?.map((item) => (
          <Button
            key={item.date}
            variant={item.date === selectedDate ? "dark" : "outline-dark"}
            size="sm"
            onClick={() => handleDate(item.date)}
            disabled={!item.available}
          >
            {mask.parseDateToBrl(item.date)}
          </Button>
        ))}
      </div>

      {selectedDate && <EmployeeSelector />}
    </>
  );
}

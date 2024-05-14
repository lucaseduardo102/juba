import { Form } from "react-bootstrap";
import { useScheduleStore } from "../../../services";
import { useScheduleGetSchedule } from "../../../domain";
import { AvailableTimes } from "./AvailableTime";

export function EmployeeSelector() {
  const {
    availableEmployees,
    availableTimes,
    handleEmployee,
    selectedEmployee,
  } = useEmployeeService();

  return (
    <>
      <Form.Label className="ms-2 mt-3">Barbeiro</Form.Label>
      <Form.Select value={selectedEmployee?.id} onChange={handleEmployee}>
        {availableEmployees?.length === 0 && !selectedEmployee ? (
          <option>Nenhum funcionário disponível</option>
        ) : (
          <option>Selecione um barbeiro</option>
        )}

        {availableEmployees?.map((employee) => (
          <option key={employee.id} value={employee.id}>
            {employee.name}
          </option>
        ))}
      </Form.Select>
      {availableTimes && <AvailableTimes availableTimes={availableTimes} />}
    </>
  );
}

const useEmployeeService = () => {
  const {
    appointment: { date: selectedDate, employee: selectedEmployee, specialty },
    handleChangeValue,
  } = useScheduleStore();

  const { data: schedule } = useScheduleGetSchedule({
    specialtyId: specialty?.id,
  });

  const availableEmployees = schedule
    ?.filter(({ date }) => date === selectedDate)
    ?.flatMap(({ employees }) => employees ?? []);

  const availableTimes = availableEmployees
    ?.filter(({ id }) => id === selectedEmployee?.id)
    ?.flatMap(({ workingHours }) => workingHours ?? []);

  const getEmployee = (employeeId) => {
    const employee = availableEmployees?.find(({ id }) => id === employeeId);
    return employee ? { id: employee.id, name: employee.name } : null;
  };

  const handleEmployee = (event) => {
    handleChangeValue("employee", getEmployee(event.target.value));
  };

  return {
    selectedEmployee,
    availableEmployees,
    availableTimes,
    handleEmployee,
  };
};

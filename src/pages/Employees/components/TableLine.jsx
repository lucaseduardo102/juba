import { useState } from "react";
import { WorkingHourLine } from "./WorkingHourLine";
import { Button, Form, Spinner } from "react-bootstrap";
import { ModalSpecialty } from "./ModalSpecialty";
import { ToastMessages, useToastStore } from "../../../services";
import { useEmployeeUpdate } from "../../../domain";

export function TableLine({
  employee: { id, name, workingHour, specialties },
}) {
  const [isDisabled, setIsDisabled] = useState(true);

  const [selectedWorkingHour, setSelectedWorkingHour] = useState(
    workingHour?.id
  );

  const handleSelectedWorkingHour = (event) => {
    setSelectedWorkingHour(event.target.value);
  };

  const handleIsDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const { mutate, isPending } = useEmployeeUpdate();
  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      handleIsDisabled();
      showToast({ message: ToastMessages.Employees.Update.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Employees.Update.error });
    },
  };

  const sendData = () => {
    mutate(
      {
        employeeId: id,
        workingHourId: selectedWorkingHour,
      },
      mutateOptions
    );
  };

  return (
    <tr>
      <th>
        <Form.Control value={name} disabled />
      </th>
      <WorkingHourLine
        selectedWorkingHour={selectedWorkingHour}
        onChangeSelectedWorkingHour={handleSelectedWorkingHour}
        isDisabled={isDisabled}
      />
      <ModalSpecialty currentSpecialties={specialties} employeeId={id} />

      <th className="text-center">
        {isPending ? (
          <Spinner />
        ) : (
          <div className="d-flex gap-2">
            <Button variant="outline-dark" onClick={handleIsDisabled}>
              <i
                className={`bi bi-${isDisabled ? "pencil-square" : "x-lg"}`}
              ></i>
            </Button>
            {!isDisabled && (
              <Button variant="outline-dark" onClick={sendData}>
                <i className="bi bi-check-lg"></i>
              </Button>
            )}
          </div>
        )}
      </th>
    </tr>
  );
}

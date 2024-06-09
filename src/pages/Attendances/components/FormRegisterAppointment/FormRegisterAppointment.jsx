import { Button, Form, Spinner } from "react-bootstrap";
import {
  useAppointmentCreate,
  useEmployeeGetAvailableSpecialties,
  useUserGetAll,
} from "../../../../domain";
import { Description } from "../Description";
import { mask } from "../../../../utils";
import { useState } from "react";
import { SchedulingDescription } from "../AppointmentHandler";
import { Load } from "../../../../components";
import { ToastMessages, useToastStore } from "../../../../services";

const EMPTY_OPTION = {
  value: "VAZIO",
  title: "Selecione uma opção",
};

export function FormRegisterAppointment({ appointmentInfo, handleVisibility }) {
  const { employee, date, workingHour } = appointmentInfo;

  //TODO: BUSCAR CLIENTES
  //TODO: SALVAR E COLOCAR SPINNER

  const [newAppointment, setNewAppointment] = useState({
    specialtyId: EMPTY_OPTION.value,
    clientId: EMPTY_OPTION.value,
    employee,
    date,
    time: workingHour?.time,
  });

  const handleNewAppointment = (key, value) => {
    setNewAppointment((state) => ({ ...state, [key]: value }));
  };

  return (
    <>
      <SchedulingDescription
        employee={employee}
        scheduling={{
          date,
          startTime: workingHour?.time,
        }}
      />

      <SpecialtySelector
        handleNewAppointment={handleNewAppointment}
        newAppointment={newAppointment}
      />
      {newAppointment.specialtyId !== EMPTY_OPTION.value && (
        <ClientSelector
          newAppointment={newAppointment}
          handleNewAppointment={handleNewAppointment}
          handleVisibility={handleVisibility}
        />
      )}
    </>
  );
}

function SpecialtySelector({ newAppointment, handleNewAppointment }) {
  const {
    date,
    time,
    specialtyId,
    employee: { id: employeeId },
  } = newAppointment;

  const {
    data: specialties,
    isError,
    isLoading,
  } = useEmployeeGetAvailableSpecialties({
    date,
    employeeId,
    time,
  });

  const canContinue = specialties && specialties.length > 0;

  const descriptionTitle = canContinue
    ? "Descrição do serviço"
    : "Nenhum serviço disponível";

  const selectedSpecialty = specialties?.find(({ id }) => id === specialtyId);

  if (isLoading || isError) {
    return <Load />;
  }
  return (
    <>
      <Description title={descriptionTitle}>
        {canContinue && (
          <>
            <Form.Group className="mb-2">
              <Form.Label className="ms-1 mb-1">Nome</Form.Label>
              <Form.Select
                value={specialtyId}
                onChange={({ target: { value } }) =>
                  handleNewAppointment("specialtyId", value)
                }
              >
                <option value={EMPTY_OPTION.value}>{EMPTY_OPTION.title}</option>
                {specialties?.map(({ id, name }) => {
                  return (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
            {selectedSpecialty?.id && (
              <div className="d-flex justify-content-between gap-5">
                <Form.Group>
                  <Form.Label className="ms-1 mb-1">Preço</Form.Label>
                  <Form.Control
                    value={
                      "R$ " +
                      mask.currencyFormatBRL(selectedSpecialty?.price ?? 0.0)
                    }
                    disabled
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="ms-1 mb-1">Duração</Form.Label>
                  <Form.Control
                    value={selectedSpecialty?.timeDuration}
                    disabled
                  />
                </Form.Group>
              </div>
            )}
          </>
        )}
      </Description>
    </>
  );
}

function ClientSelector({
  newAppointment,
  handleNewAppointment,
  handleVisibility,
}) {
  const { data: users, isError, isLoading } = useUserGetAll();

  const [selectedData, setSelectedData] = useState({
    permission: EMPTY_OPTION.value,
    userId: EMPTY_OPTION.value,
  });

  const handleSelectedData = (key, value) => {
    setSelectedData((state) => ({ ...state, [key]: value }));
  };

  const filteredUsers = users?.filter(
    ({ permission }) => permission === selectedData.permission
  );

  const filteredProfiles = filteredUsers?.find(
    ({ id }) => id === selectedData.userId
  )?.profiles;

  const canContinue =
    selectedData.permission !== EMPTY_OPTION.value &&
    selectedData.userId !== EMPTY_OPTION.value &&
    newAppointment.clientId !== EMPTY_OPTION.value;

  if (isLoading || isError) {
    return <Load />;
  }
  return (
    <>
      <Description title="Descrição do cliente" hasLine={false}>
        <Form.Group className="mb-2">
          <Form.Label className="ms-1 mb-1">Permissão</Form.Label>
          <Form.Select
            value={selectedData.permission}
            onChange={({ target: { value } }) =>
              handleSelectedData("permission", value)
            }
          >
            <option value={EMPTY_OPTION.value}>{EMPTY_OPTION.title}</option>
            <option value="CLIENTE">Cliente</option>
            <option value="BARBEIRO">Barbeiro</option>
            <option value="ADMIN">Administrador</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="ms-1 mb-1">E-mail</Form.Label>
          <Form.Select
            value={selectedData.userId}
            onChange={({ target: { value } }) =>
              handleSelectedData("userId", value)
            }
          >
            <option value={EMPTY_OPTION.value}>{EMPTY_OPTION.title}</option>
            {filteredUsers?.map(({ id, email }) => (
              <option key={id} value={id}>
                {email}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-2">
          <Form.Label className="ms-1 mb-1">Perfil</Form.Label>
          <Form.Select
            value={newAppointment.clientId}
            onChange={({ target: { value } }) =>
              handleNewAppointment("clientId", value)
            }
          >
            <option value={EMPTY_OPTION.value}>{EMPTY_OPTION.title}</option>
            {filteredProfiles?.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Description>
      <ButtonConfirm
        canContinue={canContinue}
        newAppointment={newAppointment}
        handleVisibility={handleVisibility}
      />
    </>
  );
}

function ButtonConfirm({ canContinue, newAppointment, handleVisibility }) {
  const {
    specialtyId,
    employee: { id: employeeId },
    clientId,
    date,
    time,
  } = newAppointment;
  const { showToast } = useToastStore();

  const { isPending, mutate } = useAppointmentCreate({ specialtyId, date });

  const request = {
    clientId,
    employeeId,
    specialtyId,
    dateTime: date + " " + time,
  };

  const mutateOptions = {
    onSuccess: () => {
      showToast({
        message: ToastMessages.Attendances.CreateAppointment.success,
      });
      handleVisibility();
    },
    onError: () => {
      showToast({
        message: ToastMessages.Attendances.CreateAppointment.error,
      });
    },
  };

  const sendToConfirm = () => {
    mutate(request, mutateOptions);
  };

  return (
    <div className="d-flex justify-content-end mt-5">
      <Button
        variant="dark"
        disabled={!canContinue || isPending}
        onClick={sendToConfirm}
      >
        Confirmar {isPending && <Spinner size="sm" />}
      </Button>
    </div>
  );
}

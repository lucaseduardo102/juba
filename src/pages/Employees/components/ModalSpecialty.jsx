import { Button, Card, Form, Modal, Spinner } from "react-bootstrap";
import { useVisibility } from "../../../hooks/useVisibility";
import { useCategoryGetAll, useEmployeeUpdate } from "../../../domain";
import { Load } from "../../../components";
import { useState } from "react";
import { ToastMessages, useToastStore } from "../../../services";

export function ModalSpecialty(props) {
  const { handleVisibility, isVisible } = useVisibility();
  return (
    <th className="text-center">
      <Button variant="outline-dark" onClick={handleVisibility}>
        <i className="bi bi-info-lg"></i>
      </Button>
      {isVisible && (
        <Modal show onHide={handleVisibility}>
          <Modal.Header closeButton>
            <Modal.Title>Especialidades</Modal.Title>
          </Modal.Header>
          <SpecialtyForm {...props} handleVisibility={handleVisibility} />
        </Modal>
      )}
    </th>
  );
}

function SpecialtyForm({ currentSpecialties, employeeId, handleVisibility }) {
  const { data: categories, isError, isLoading } = useCategoryGetAll();

  const [attributedSpecialties, setAttributedSpecialties] = useState(
    currentSpecialties?.map(({ id }) => id)
  );

  const handleAttributedSpecialties = (specialtyId) => {
    setAttributedSpecialties((state) => {
      const isAttributed = !!state?.find((value) => value === specialtyId);
      if (isAttributed) {
        return state?.filter((value) => value !== specialtyId);
      }
      return [...state, specialtyId];
    });
  };

  return (
    <>
      <Modal.Body>
        {isLoading || isError ? (
          <Load />
        ) : (
          categories?.map((category) => (
            <CardSpecialties
              key={category.id}
              category={category}
              attributedSpecialties={attributedSpecialties}
              handleAttributedSpecialties={handleAttributedSpecialties}
            />
          ))
        )}
      </Modal.Body>
      <Modal.Footer>
        <ButtonConfirm
          handleVisibility={handleVisibility}
          attributedSpecialties={attributedSpecialties}
          currentSpecialties={currentSpecialties}
          employeeId={employeeId}
        />
      </Modal.Footer>
    </>
  );
}

function CardSpecialties({
  category,
  attributedSpecialties,
  handleAttributedSpecialties,
}) {
  const { id, name, specialties } = category;

  return (
    <Card className="mb-3">
      <Card.Header>
        <Card.Title>{name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Form.Group>
          {specialties?.map((specialty) => (
            <FormCheck
              key={specialty.id}
              attributedSpecialties={attributedSpecialties}
              handleAttributedSpecialties={handleAttributedSpecialties}
              specialty={specialty}
            />
          ))}
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

function FormCheck({
  attributedSpecialties,
  handleAttributedSpecialties,
  specialty,
}) {
  const { id, name } = specialty;
  const isSelected = !!attributedSpecialties?.find((value) => value === id);

  return (
    <Form.Check
      key={id}
      value={id}
      label={name}
      checked={isSelected}
      onChange={({ target: { value } }) => {
        handleAttributedSpecialties(value);
      }}
    />
  );
}

function ButtonConfirm({
  handleVisibility,
  currentSpecialties,
  attributedSpecialties,
  employeeId,
}) {
  const employeeUpdate = useEmployeeUpdate();
  const { showToast } = useToastStore();

  const { specialtyRequests } = useHandlerSpecialties(
    currentSpecialties,
    attributedSpecialties
  );

  const request = {
    employeeId,
    specialties: specialtyRequests,
  };
  const options = {
    onSuccess: () => {
      showToast({ message: ToastMessages.Employees.Update.success });
      handleVisibility();
    },
    onError: () => {
      showToast({ message: ToastMessages.Employees.Update.error });
    },
  };

  const sendData = () => {
    employeeUpdate.mutate(request, options);
  };
  return (
    <Button variant="outline-dark" onClick={sendData}>
      Salvar {employeeUpdate.isPending && <Spinner size="sm" />}
    </Button>
  );
}

function useHandlerSpecialties(currentSpecialties, attributedSpecialties) {
  // Obtém os IDs das especialidades atuais
  const currentSpecialtyIds = currentSpecialties.map(({ id }) => id);

  // Converte attributedSpecialties em um Set para busca rápida
  const attributedSpecialtySet = new Set(attributedSpecialties);

  // Filtra as especialidades mantidas, viciadas e excluídas
  const maintainedSpecialties = currentSpecialtyIds.filter((specialtyId) =>
    attributedSpecialtySet.has(specialtyId)
  );

  const maintainedSpecialtySet = new Set(maintainedSpecialties);

  const addictedSpecialties = attributedSpecialties.filter(
    (attributedSpecialtyId) =>
      !maintainedSpecialtySet.has(attributedSpecialtyId)
  );

  const addictedSpecialtySet = new Set(addictedSpecialties);

  const excludeSpecialties = currentSpecialtyIds.filter(
    (currentSpecialtyId) =>
      !maintainedSpecialtySet.has(currentSpecialtyId) &&
      !addictedSpecialtySet.has(currentSpecialtyId)
  );

  const specialtyRequests = [...addictedSpecialtySet, ...excludeSpecialties];

  return {
    specialtyRequests,
  };
}

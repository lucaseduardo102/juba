import { Button, Modal } from "react-bootstrap";
import { useVisibility } from "../../../hooks/useVisibility";
import { useCategoryGetAll } from "../../../domain";
import { Load } from "../../../components";

export function SpecialtyList({ currentSpecialties }) {
  const { data: categories, isError, isLoading } = useCategoryGetAll();

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
          <Modal.Body>
            {isLoading || isError ? (
              <Load />
            ) : (
              <>
                <>
                  {currentSpecialties?.map((specialty) => (
                    <div key={specialty.id}>{specialty.name}</div>
                  ))}
                </>
                <>
                  Todas
                  {categories?.map((category) => (
                    <div key={category.id}>{category.name}</div>
                  ))}
                </>
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="outline-dark" onClick={handleVisibility}>
              Fechar
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </th>
  );
}

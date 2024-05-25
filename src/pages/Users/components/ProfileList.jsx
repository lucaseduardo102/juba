import { Button, Modal, Table } from "react-bootstrap";
import { useVisibility } from "../../../hooks/useVisibility";
import { ProfileUpdate } from "./ProfileUpdate";
import { ProfileCreate } from "./ProfileCreate";

export function ProfileList({ profiles, userId }) {
  const modalList = useVisibility();
  const createForm = useVisibility();

  return (
    <>
      <Button
        variant="outline-dark"
        size="sm"
        onClick={modalList.handleVisibility}
      >
        <i className="bi bi-info-square"></i>
      </Button>
      {modalList.isVisible && (
        <Modal size="lg" show onHide={modalList.handleVisibility}>
          <Modal.Header closeButton>
            <Modal.Title>Perfis</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Table striped>
              <thead>
                <tr>
                  <th className="col-4">Nome</th>
                  <th className="col-4">CPF</th>
                  <th className="col-2">Status</th>
                  <th className="col-2 text-center">
                    <Button
                      variant="outline-dark"
                      size="sm"
                      onClick={createForm.handleVisibility}
                    >
                      <i className="bi bi-person-plus-fill"></i>
                    </Button>
                  </th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                {profiles?.map((profile) => {
                  return <ProfileUpdate key={profile.id} profile={profile} />;
                })}
                {createForm.isVisible && (
                  <ProfileCreate
                    userId={userId}
                    handleVisibility={createForm.handleVisibility}
                  />
                )}
              </tbody>
            </Table>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

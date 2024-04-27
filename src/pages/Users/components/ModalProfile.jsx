import { Table, TableHead } from "../../../components";
import { Modal } from "../../../components/Modal";
import { useUserGetById } from "../../../domain/UserDomain";
import { useVisibility } from "../../../hooks/useVisibility";
import { mask } from "../../../utils";
import { ModalCreateProfile } from "./Profile/ModalCreateProfile";
import { ModalUpdateProfile } from "./ModalUpdateProfile";
import { ModalDeleteProfile } from "./Profile/ModalDeleteProfile";

export function ModalProfile({ isVisible, closeModal, selectedData }) {
  const modalCreate = useVisibility();
  const modalProfileUpdate = useVisibility();
  const modalProfileDelete = useVisibility()

  const { userId } = selectedData;

  const { data: user, isLoading } = useUserGetById(userId);

  return (
    <Modal
      isVisible={isVisible}
      handleVisibility={closeModal}
      headerTitle="Perfis associados"
      customFooter={<Footer handleVisibility={modalCreate.handleVisibility} />}
    >
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {user && user?.profiles && (
        <>
          <div className="col-12">
            <Table>
              <TableHead>
                <tr>
                  <th scope="col" className="col-3">
                    Nome
                  </th>
                  <th scope="col" className="col-4 text-center">
                    CPF
                  </th>
                  <th scope="col" className="col-2 text-center">
                    Status
                  </th>
                  <th scope="col" className="col-3 text-center">
                    Status
                  </th>
                </tr>
              </TableHead>
              <tbody>
                {user?.profiles?.map((profile, index) => (
                  <tr key={index}>
                    <td className="col-3">{profile.name}</td>
                    <td className="col-4 text-center">
                      {mask.cpf(profile.cpf)}
                    </td>
                    <td className="col-2 text-center">
                      {profile.status ? "Ativo" : "Inativo"}
                    </td>
                    <td className="col-2 ">
                      <div className="d-flex justify-content-evenly">
                        <button className="btn btn-sm btn-warning">
                          <i
                            className="bi bi-pencil-square"
                            onClick={modalProfileUpdate.handleVisibility}
                          ></i>
                        </button>
                        <button className="btn btn-sm btn-danger">
                          <i
                            className="bi bi-trash-fill"
                            onClick={modalProfileDelete.handleVisibility}
                          ></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
          {user?.profiles?.length === 0 && (
            <p className="text-center">Nenhum perfil cadastrado</p>
          )}
        </>
      )}
      <ModalUpdateProfile {...modalProfileUpdate} />
      <ModalCreateProfile {...modalCreate} userId={userId} />
      <ModalDeleteProfile {...modalProfileDelete} userId={userId}/>
    </Modal>
  );
}

function Footer({ handleVisibility }) {
  return (
    <div className="modal-footer">
      <button className="btn btn-primary" onClick={handleVisibility}>
        Adicionar
      </button>
    </div>
  );
}

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Screen, ScreenTitle, Table, TableHead } from "../../components";
import { useUserGetById } from "../../domain/UserDomain";
import { useVisibility } from "../../hooks/useVisibility";
import { mask } from "../../utils";
import { ModalProfile } from "./components/ModalProfile";
import {
  useProfileCreate,
  useProfileUpdate,
} from "../../domain/Profile/profileUseCases";
import { Modal } from "../../components/Modal";
import { ModalUpdate } from "./components/ModalUpdate";
import { ModalCreate } from "./components/ModalCreate";
import { ModalDelete } from "./components/ModalDelete";

export function Profiles() {
  const { userId } = useParams();
  const { data: user, isLoading } = useUserGetById(userId);
  const modalCreate = useVisibility();
  const modalUpdate = useVisibility();
  const modalDelete = useVisibility();

  const [selectedProfile, setSelectedProfile] = useState();

  const openModalUpdate = (profile) => {
    setSelectedProfile(profile);
    modalUpdate.handleVisibility();
  };
  const openModalDelete = (profile) => {
    setSelectedProfile(profile);
    modalDelete.handleVisibility();
  };

  return (
    <Screen>
      {isLoading && (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      {user && user?.profiles && (
        <>
          <div className="d-flex align-items-center">
            <div className="text-center flex-grow-1">
              <ScreenTitle text="Perfis" />
            </div>
            <button
              className="btn btn-primary btn-sm"
              onClick={modalCreate.handleVisibility}
            >
              <i className="bi bi-plus"></i> Adicionar
            </button>
          </div>
          <div className="col-12">
            <Table>
              <TableHeaderLine />
              <tbody>
                {user?.profiles?.map((profile, index) => (
                  <tr key={index}>
                    <td className="col-3">{profile.name}</td>
                    <td className="col-4 text-center">
                      {mask.cpf(profile.cpf)}
                    </td>
                    <td className="col-2 text-center">
                      {profile.statusProfile ? "Ativo" : "Inativo"}
                    </td>
                    <td className="col-2 ">
                      <div className="d-flex justify-content-evenly">
                        <button
                          className="btn btn-sm btn-warning"
                          onClick={() => openModalUpdate(profile)}
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => openModalDelete(profile)}
                        >
                          <i className="bi bi-trash-fill"></i>
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

      {modalCreate.isVisible && (
        <ModalCreate modalCreate={modalCreate} userId={userId} />
      )}
      {modalUpdate.isVisible && (
        <ModalUpdate
          modalUpdate={modalUpdate}
          selectedProfile={selectedProfile}
        />
      )}

      {modalDelete.isVisible && (
        <ModalDelete
          modalDelete={modalDelete}
          selectedProfile={selectedProfile}
        />
      )}
    </Screen>
  );
}

function TableHeaderLine() {
  return (
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
        <th scope="col" className="col-1 text-center">
          Status
        </th>
      </tr>
    </TableHead>
  );
}

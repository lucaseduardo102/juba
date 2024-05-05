import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Screen, ScreenTitle } from "../../components/";
import { useVisibility } from "../../hooks/useVisibility";
import { ModalUpdate } from "./components/ModalUpdate";

import { ModalCreate } from "./components/ModalCreate";
import { useUserGetAll } from "../../domain";

export const Users = () => {
  const { data } = useUserGetAll();

  const modalUpdateUser = useModalFunctions();
  const modalCreateUser = useVisibility();

  const navigate = useNavigate();

  const navigateToProfileScreen = (userId) => {
    navigate("/profiles/" + userId);
  };

  return (
    <Screen>
      <ScreenTitle text="Lista de Usuários" />
      <div className="col-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="col-6">
                E-mail
              </th>
              <th scope="col" className="col-4 text-center">
                Permissão
              </th>
              <th scope="col" className="col-2 text-center">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  onClick={modalCreateUser.handleVisibility}
                >
                  <i className="bi bi-plus-lg"></i> Adicionar
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((user) => (
              <tr key={user.id}>
                <td>{user.email}</td>
                <td className="col-2 text-center">{user.permission}</td>

                <td className="col-3 text-center">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-dark m-1"
                    onClick={() => modalUpdateUser.openModal(user)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-dark m-1"
                    onClick={() => navigateToProfileScreen(user?.id)}
                  >
                    <i className="bi bi-info-square"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalUpdateUser.isVisible && modalUpdateUser.selectedData && (
        <ModalUpdate
          closeModal={modalUpdateUser.closeModal}
          user={modalUpdateUser.selectedData}
        />
      )}
      {modalCreateUser.isVisible && (
        <ModalCreate closeModal={modalCreateUser.handleVisibility} />
      )}
    </Screen>
  );
};

/**
 * Hook responsável por manter o estado do modal
 * @returns
 */
const useModalFunctions = () => {
  const { isVisible, handleVisibility } = useVisibility();

  const [selectedData, setSelectedData] = useState();

  const openModal = (data) => {
    setSelectedData(data);
    handleVisibility();
  };

  const closeModal = () => {
    setSelectedData();
    handleVisibility();
  };

  return {
    isVisible,
    handleVisibility,
    selectedData,
    openModal,
    closeModal,
  };
};

import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Screen, ScreenTitle } from "../../components/";
import { useUserGetAll } from "../../domain/UserDomain";
import "../Users/index.css";
import { useVisibility } from "../../hooks/useVisibility";
import { ModalUpdateUser } from "./components/ModalUpdateUser";

export const Users = () => {
  const { data, isError } = useUserGetAll();

  const modalUpdateUser = useModalFunctions();
  const modalProfile = useModalFunctions();

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
              <th scope="col" className="col-3">
                E-mail
              </th>
              <th scope="col" className="col-2 text-center">
                Permissão
              </th>
              <th scope="col" className="col-2 text-center">
                Ações
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
                    className="btn btn-warning m-1"
                    onClick={() => modalUpdateUser.openModal(user)}
                  >
                    Editar
                  </button>

                  <button
                    type="button"
                    className="btn btn-dark m-1"
                    onClick={
                      () => navigateToProfileScreen(user?.id)
                      // modalProfile.openModal({
                      // userId: user?.id,
                      // })
                    }
                  >
                    Ver perfis
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalUpdateUser.selectedData && (
        <ModalUpdateUser
          closeModal={modalUpdateUser.closeModal}
          isVisible={modalUpdateUser.isVisible}
          user={modalUpdateUser.selectedData}
        />
      )}
      {/* {modalProfile.selectedData && (
        <ModalProfile
          closeModal={modalProfile.closeModal}
          isVisible={modalProfile.isVisible}
          selectedData={modalProfile.selectedData}
        />
      )} */}
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

import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Screen, ScreenTitle } from "../../components/";
import { useProfileGetListOfUserAndPermission } from "../../domain/Profile";
import { Modal } from "./components/Modal";

export const Users = () => {
  const navigate = useNavigate();
  const { data, fetchData } = useProfileGetListOfUserAndPermission();
  const [isOpen,setIsOpen] = useState(false)
  
  useEffect(() => {
    fetchData();
  }, []);

  const deleteProfile = (profileId) => {
    return alert();
  };

  const navigateToProfileUpdate = (profileId) => {
    navigate(`/users/Editar/${profileId}`);
  };

  return (
    <Screen>
      <ScreenTitle text="Lista de Usuários" />
      <div className="col-12">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col" className="col-3">
                Nome
              </th>
              <th scope="col" className="col-3">
                E-mail
              </th>
              <th scope="col" className="col-2 text-center">
                Nível
              </th>
              <th scope="col" className="col-1 text-center">
                Status
              </th>
              <th scope="col" className="col-3 text-center">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((profile) => (
              <>
                <tr key={profile.id}>
                  <td>{profile.name}</td>
                  <td>{profile.user.email}</td>
                  <td className="col-2 text-center">
                    {profile.user.permission.type}
                  </td>
                  <td className="col-1 text-center">
                    {profile.statusProfile ? "Ativo" : "Inativo"}
                  </td>
                  <td className="col-3 text-center">
                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      onClick={() => navigateToProfileUpdate(profile.id)}
                    >
                      Editar
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger m-1"
                      onClick={() => setIsOpen(true)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
                {isOpen && <Modal profile={profile} />}
              </>
            ))}
          </tbody>
        </table>
      </div>
      

    </Screen>
  );
};

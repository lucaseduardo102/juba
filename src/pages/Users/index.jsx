import {  useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Screen, ScreenTitle } from "../../components/";
// import { useProfileGetListOfUserAndPermission } from "../../domain/Profile"; IRÁ ESTÁ NO permissionUseCases
import { Modal } from "./components/Modal";
import { useUserGetAll } from "../../domain/UserDomain";

export const Users = () => {
  const navigate = useNavigate();
  const { data, fetch, isError } = useUserGetAll();
  const [isOpen,setIsOpen] = useState(false)
  
  useEffect(() => {
    fetch();
  }, []);

  console.log(data)
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
            {data?.map((user) => (
              <>
                <tr key={user.id}>
                  <td>{user.email}</td>
                  <td className="col-2 text-center">
                    {user.permission}
                  </td>
                  {/* <td className="col-1 text-center">
                    {user.statusProfile ? "Ativo" : "Inativo"}
                  </td> */}
                  <td className="col-3 text-center">
                    <button
                      type="button"
                      className="btn btn-primary m-1"
                      onClick={() => navigateToProfileUpdate(user.id)}
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
                {isOpen && <Modal profile={user} />}
              </>
            ))}
          </tbody>
        </table>
      </div>
      

    </Screen>
  );
};

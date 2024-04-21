import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Screen, ScreenTitle } from "../../components/";
import { Modal } from "./components/Modal";
import { useUserGetAll, useUserUpdate } from "../../domain/UserDomain";
import '../Users/index.css'

export const Users = () => {
  const navigate = useNavigate();
  const { data, fetch, isError } = useUserGetAll();

  const [selectedProfile, setSelectedProfile] = useState();

  const selectProfile = (profile) => {
    setSelectedProfile(profile);
  };

  useEffect(() => {
    fetch({ profiles: true });
  }, []);


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
                  <Modal buttonTitle="Ver detalhes">
                    {/* Mapeia e renderiza os perfis associados */}
                    {user.profiles.map((profile, index) => (
                      <li key={index}>{profile.name}</li>
                    ))}
                  </Modal>                  
                </td>            
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Screen>
  );
};
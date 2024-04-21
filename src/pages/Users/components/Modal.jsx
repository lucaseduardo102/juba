import { useState } from "react";
import React from "react";
import { FaUserPlus, FaUserEdit } from "react-icons/fa";

export function Modal({
  headerTitle,
  buttonTitle,
  children,
  cancelButtonProps,
  confirmButtonProps,
  modalClassName = "modal-lg",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleVisibility = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-dark m-1"
        onClick={handleVisibility}
      >
        {buttonTitle}
      </button>
      <div
        className={`modal fade ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className={`modal-dialog ${modalClassName}`}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{headerTitle}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleVisibility}
              />
            </div>
            <div className="modal-body">
              <div className="profile-details">
                {/* Título "Perfil associado" */}
                <h6>Perfis associados:</h6>
                {!children || React.Children.count(children) === 0 ? (
                  <div>
                    <p>Não tem perfil associado</p>
                    <button type="button" className="btn btn-link">
                      <FaUserPlus /> Criar perfil
                    </button>
                  </div>
                ) : (
                  <div>
                    <ul>{children}</ul>
                    <button type="button" className="btn btn-link">
                      <FaUserPlus /> Criar perfil
                    </button>
                    <button type="button" className="btn btn-link">
                      <FaUserEdit /> Editar perfil associado
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleVisibility}
                {...cancelButtonProps}
              >
                Fechar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                {...confirmButtonProps}
                onClick={() => {
                  handleVisibility();
                  confirmButtonProps?.onClick();
                }}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

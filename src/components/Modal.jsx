export function Modal({
  isVisible,
  handleVisibility,
  headerTitle,
  children,
  cancelButtonProps,
  confirmButtonProps,
  customFooter,
  isLarge = false,
}) {
  return (
    <>
      <div
        className="modal fade show"
        tabIndex="-1"
        style={{
          display: "block",
          ...style.modalBackdrop,
        }}
      >
        <div className={`modal-dialog ${isLarge && "modal-lg"}`}>
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
              <div className="profile-details">{children}</div>
            </div>

            {confirmButtonProps?.onClick && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  data-bs-dismiss="modal"
                  onClick={handleVisibility}
                  {...cancelButtonProps}
                >
                  {cancelButtonProps?.title ?? "Fechar"}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  {...confirmButtonProps}
                >
                  {confirmButtonProps?.title ?? "Salvar"}
                </button>
              </div>
            )}
            {customFooter}
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

const style = {
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // cor escura com 50% de opacidade
    zIndex: 1040, // z-index deve ser menor que o z-index do modal (1050 por padrão)
  },
};

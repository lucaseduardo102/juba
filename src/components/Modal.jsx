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
        className={`modal fade ${isVisible ? "show" : ""}`}
        tabIndex="-1"
        role="dialog"
        style={{ display: isVisible ? "block" : "none" }}
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
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleVisibility}
                  {...cancelButtonProps}
                >
                  {cancelButtonProps?.title ?? "Fechar"}
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
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
    </>
  );
}

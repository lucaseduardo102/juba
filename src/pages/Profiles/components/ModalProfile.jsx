import { useFormik } from "formik";
import { Modal } from "../../../components/Modal";
import { ProfileForm } from "./ProfileForm";
import { useState } from "react";
import { AlertStatus } from "../../../components";
import { mask } from "../../../utils";

export function ModalProfile({
  handleVisibility,
  profile,
  headerTitle,
  isError,
  isSuccess,
  isPending,
  sendForm,
}) {
  const [statusProfile, setStatusProfile] = useState(
    profile?.statusProfile ?? true
  );

  const handleStatusProfile = () => {
    setStatusProfile(!statusProfile);
  };

  const formik = useFormik({
    initialValues: { name: profile?.name ?? "", cpf: profile?.cpf ?? "" },
    onSubmit: (values) => {
      sendForm(values.name, mask.removeCpf(values.cpf), statusProfile);
    },
  });

  return (
    <Modal
      isVisible
      handleVisibility={handleVisibility}
      headerTitle={headerTitle}
      customFooter={
        <ModalFooter onClick={formik.handleSubmit} isPending={isPending} />
      }
    >
      <AlertStatus
        isError={isError}
        isSuccess={isSuccess}
        customMessage={{ success: "Sucesso" }}
        successAction={handleVisibility}
      />
      <ProfileForm
        formik={formik}
        statusProfile={statusProfile}
        handleStatusProfile={handleStatusProfile}
      />
    </Modal>
  );
}

function ModalFooter({ onClick, isPending }) {
  return (
    <div className="modal-footer">
      <button
        type="submit"
        className="btn btn-dark"
        onClick={onClick}
        disabled={isPending}
      >
        Salvar
      </button>
    </div>
  );
}

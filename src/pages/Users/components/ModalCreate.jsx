import { useState } from "react";
import { Modal } from "../../../components/Modal";
import { useFormik } from "formik";
import { UserForm } from "./UserForm";
import { CreateUserSchema } from "../../../utils";
import { AlertStatus } from "../../../components";
import { useUserCreate } from "../../../domain";

export function ModalCreate({ closeModal }) {
  const { mutate, isError, isSuccess } = useUserCreate();

  const [permission, setPermission] = useState("CLIENTE");

  const formik = useFormik({
    validationSchema: CreateUserSchema,
    initialValues: { email: "", password: "" },
    onSubmit: (values) =>
      mutate({ email: values.email, password: values.password, permission }),
  });

  const handlePermission = (permission) => {
    setPermission(permission);
  };

  return (
    <Modal
      headerTitle="Novo usuário"
      handleVisibility={closeModal}
      confirmButtonProps={{ onClick: formik.handleSubmit }}
    >
      <AlertStatus
        isError={isError}
        isSuccess={isSuccess}
        successAction={closeModal}
      />
      <UserForm
        formik={formik}
        permission={permission}
        handlePermission={handlePermission}
      />
    </Modal>
  );
}

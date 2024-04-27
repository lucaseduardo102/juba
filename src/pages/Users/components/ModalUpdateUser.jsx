import { useFormik } from "formik";
import { Modal } from "../../../components/Modal";
import { UpdateUserSchema } from "../../../utils";
import { UserForm } from "./UserForm";
import { useEffect, useState } from "react";
import { useUserUpdate } from "../../../domain/UserDomain";
import { AlertStatus } from "../../../components";

export function ModalUpdateUser({ isVisible, closeModal, user }) {
  const { mutate, isSuccess, isError } = useUserUpdate();

  const [permission, setPermission] = useState(user?.permission ?? "CLIENTE");

  const handlePermission = (permission) => {
    setPermission(permission);
  };

  const formik = useFormik({
    validationSchema: UpdateUserSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) =>
      mutate({
        userId: user?.id,
        email: values.email,
        password: values.password,
        permission,
      }),
  });

  useEffect(() => {
    formik.setValues({
      email: user?.email,
    });
    setPermission(user?.permission);
  }, [user]);

  return (
    <Modal
      isVisible={isVisible}
      handleVisibility={closeModal}
      headerTitle="Gerenciar usuário"
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

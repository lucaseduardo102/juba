import { AlertStatus, ButtonOutline, Input } from "../../../../components";
import { Modal } from "../../../../components/Modal";
import { useState } from "react";
import { CreateProfileSchema, mask } from "../../../../utils";
import { useFormik } from "formik";
import { useProfileCreate } from "../../../../domain/Profile/profileUseCases";

export function ModalCreateProfile({ isVisible, handleVisibility, userId }) {
  const { mutate, isError, isSuccess } = useProfileCreate();

  const [isActive, setIsActive] = useState(true);

  const formik = useFormik({
    validationSchema: CreateProfileSchema,
    initialValues: {
      name: "",
      cpf: "",
    },
    onSubmit: (values) =>
      mutate({
        name: values.name,
        cpf: mask.removeCpf(values.cpf),
        statusProfile: isActive,
        userId,
      }),
  });

  return (
    <Modal
      headerTitle="Novo perfil"
      isVisible={isVisible}
      handleVisibility={handleVisibility}
      cancelButtonProps={{ title: "Cancelar" }}
      confirmButtonProps={{ onClick: formik.handleSubmit }}
    >
      <AlertStatus
        isError={isError}
        isSuccess={isSuccess}
        customMessage={{ success: "Perfil cadastrado com sucesso." }}
        successAction={handleVisibility}
      />
      <div>
        <Input
          label="Nome"
          type="text"
          placeholder="Lucas barbeiro"
          value={formik.values.name}
          onChange={formik.handleChange("name")}
          onBlur={formik.handleBlur("name")}
          maxLength={35}
          error={formik.touched.name && formik.errors.name}
        />
        <Input
          label="CPF"
          type="text"
          placeholder="123.456.789-10"
          value={mask.cpf(formik.values.cpf)}
          onChange={formik.handleChange("cpf")}
          onBlur={formik.handleBlur("cpf")}
          maxLength={14}
          error={formik.touched.cpf && formik.errors.cpf}
        />

        <div className="row mb-3">
          <label className="col-sm-3 col-form-label">Status</label>
          <div className="col-sm-9 d-flex flex-row justify-content-evenly">
            <ButtonOutline
              color="success"
              title="Ativo"
              isSelected={isActive}
              onClick={() => setIsActive(true)}
            />
            <ButtonOutline
              color="success"
              title="Inativo"
              isSelected={!isActive}
              onClick={() => setIsActive(false)}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}

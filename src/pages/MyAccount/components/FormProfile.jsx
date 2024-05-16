import { useState } from "react";
import { useProfileUpdate } from "../../../domain";
import { ToastMessages, useToastStore } from "../../../services";
import { useFormik } from "formik";
import { UpdateProfileByClientSchema, mask } from "../../../utils";
import { Button, Form, Spinner } from "react-bootstrap";

export function FormProfile({ profile }) {
  const { formik, isDisabled, isPending, setIsDisabled } =
    useFormProfileService(profile);
  return (
    <>
      <Form.Group className="mb-2">
        <div className="d-flex justify-content-between">
          <Form.Label>Nome</Form.Label>
          <i
            className="bi bi-pencil-square"
            onClick={() => setIsDisabled(false)}
          ></i>
        </div>
        <Form.Control
          disabled={isDisabled}
          name="name"
          type="name"
          maxLength={35}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.name && formik.touched.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2" key={profile.id}>
        <Form.Label>CPF</Form.Label>
        <Form.Control
          disabled
          name="cpf"
          type="text"
          placeholder="123.456.789-10"
          maxLength={14}
          value={mask.cpf(profile.cpf)}
        />
      </Form.Group>
      {!isDisabled && (
        <div className="d-flex justify-content-end mt-4 gap-2">
          <button
            type="button"
            className="btn active"
            data-bs-toggle="button"
            aria-pressed="true"
            onClick={() => {
              setIsDisabled(true);
            }}
          >
            Cancelar
          </button>
          <Button
            variant="dark"
            onClick={formik.handleSubmit}
            disabled={isPending}
          >
            Salvar {isPending && <Spinner size="sm" />}
          </Button>
        </div>
      )}
    </>
  );
}

const useFormProfileService = (profile) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const { mutate, isPending } = useProfileUpdate();

  const { showToast } = useToastStore();

  const formik = useFormik({
    initialValues: { name: profile.name },
    validationSchema: UpdateProfileByClientSchema,
    onSubmit: ({ name }) =>
      mutate(
        { name, id: profile.id },
        {
          onSuccess: () => {
            setIsDisabled(true);
            showToast({ message: ToastMessages.MyAccount.UpdateUser.success });
          },
          onError: () => {
            showToast({ message: ToastMessages.MyAccount.UpdateUser.error });
          },
        }
      ),
  });
  return {
    isDisabled,
    setIsDisabled,
    isPending,
    formik,
  };
};

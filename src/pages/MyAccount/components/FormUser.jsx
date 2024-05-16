import { Button, Form, Spinner } from "react-bootstrap";
import { useUserUpdate } from "../../../domain";
import { UpdateUserSchema } from "../../../utils";
import { useFormik } from "formik";
import { ToastMessages, useToastStore } from "../../../services";
import { useState } from "react";

export function FormUser({ user }) {
  const { formik, isDisabled, isPending, setIsDisabled } =
    useFormUserService(user);

  return (
    <>
      <div>
        <h3 className="">Usuario</h3>
      </div>
      <Form.Group className="mb-2">
        <div className="d-flex justify-content-between">
          <Form.Label>Email</Form.Label>
          <i
            className="bi bi-pencil-square"
            onClick={() => setIsDisabled(false)}
          ></i>
        </div>
        <Form.Control
          name="email"
          type="email"
          maxLength={35}
          value={formik.values.email}
          disabled={isDisabled}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.email && formik.touched.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Nova senha</Form.Label>
        <Form.Control
          disabled={isDisabled}
          name="password"
          type="password"
          minLength={8}
          maxLength={12}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.password && formik.touched.password}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>
      {!isDisabled && (
        <div className="d-flex justify-content-end gap-2">
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

const useFormUserService = (user) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const { showToast } = useToastStore();

  const formik = useFormik({
    initialValues: { email: user.email, password: "" },
    validationSchema: UpdateUserSchema,
    onSubmit: ({ email, password }) =>
      mutate(
        { email, password, userId: user.id },
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

  const { mutate, isPending } = useUserUpdate();

  return {
    isDisabled,
    setIsDisabled,
    formik,
    isPending,
  };
};

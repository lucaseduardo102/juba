import { useFormik } from "formik";
import { ToastMessages, useToastStore } from "../../../services";
import { useProfileCreate, useProfileUpdate } from "../../../domain";
import { ProfileSchema, mask } from "../../../utils";
import { Button, Form, Modal, Spinner } from "react-bootstrap";

export function ModalCreateProfile({ userId, handleVisibility }) {
  const { formik, isPending } = useCreateProfileService(
    userId,
    handleVisibility
  );

  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title> Adicionar perfil </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form.Group className="mb-2">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            name="name"
            type="name"
            placeholder="Lucas Eduardo"
            maxLength={50}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={formik.errors.name && formik.touched.name}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.name}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2" /* key={profile.id} */>
          <Form.Label>CPF</Form.Label>
          <Form.Control
            name="cpf"
            type="text"
            placeholder="123.456.789-10"
            maxLength={14}
            value={mask.cpf(formik.values.cpf)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={formik.errors.cpf && formik.touched.cpf}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.cpf}
          </Form.Control.Feedback>
        </Form.Group>
      </Modal.Body>

      <Modal.Footer>
        <Button
          variant="dark"
          onClick={formik.handleSubmit}
          disabled={isPending}
        >
          Salvar {isPending && <Spinner size="sm" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const useCreateProfileService = (userId, handleVisibility) => {
  const { mutate, isPending } = useProfileCreate();

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      showToast({ message: ToastMessages.MyAccount.CreateUser.success });
      handleVisibility();
    },
    onError: () => {
      showToast({ message: ToastMessages.MyAccount.CreateUser.error });
    },
  };
  const formik = useFormik({
    initialValues: { name: "", cpf: "" },
    validationSchema: ProfileSchema,
    onSubmit: ({ name, cpf }) =>
      mutate(
        { name, cpf: mask.removeCpf(cpf), statusProfile: true, userId },
        mutateOptions
      ),
  });
  return {
    isPending,
    formik,
  };
};

import { useFormik } from "formik";
import { useVisibility } from "../../../hooks/useVisibility";
import { Button, Form, InputGroup, Modal, Spinner } from "react-bootstrap";
import { ProfileSchema, mask } from "../../../utils";
import { useProfileCreate } from "../../../domain";
import { useAuthStore } from "../../../services/store/useAuthStore";
import { useToastStore } from "../../../services";

export function ButtonAddProfile() {
  const { isVisible, handleVisibility } = useVisibility();

  return (
    <>
      <Button
        className="d-flex"
        variant="dark"
        size="sm"
        onClick={handleVisibility}
      >
        <i className="bi bi-plus-lg"></i>&nbsp;Adicionar
      </Button>
      {isVisible && <ModalCreate handleVisibility={handleVisibility} />}
    </>
  );
}

function ModalCreate({ handleVisibility }) {
  const {
    authCredentials: {
      user: { id },
    },
  } = useAuthStore();
  const { showToast } = useToastStore();
  const { isPending, mutate } = useProfileCreate();

  const sendForm = (values) => {
    mutate(
      {
        userId: id,
        name: values.name,
        cpf: mask.removeCpf(values.cpf),
        statusProfile: true,
      },
      {
        onSuccess: () => {
          handleVisibility();
          showToast({ message: "Perfil cadastrado com sucesso" });
        },
      }
    );
  };

  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      name: "",
      cpf: "",
    },
    onSubmit: sendForm,
  });

  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>Novo perfil</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ProfileForm formik={formik} />
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="dark"
          onClick={formik.handleSubmit}
          disabled={isPending}
        >
          Salvar
          {isPending && <Spinner size="sm" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function ProfileForm({ formik }) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Nome</Form.Label>
        <InputGroup>
          <Form.Control
            className="mb-0"
            name="name"
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
        </InputGroup>
      </Form.Group>

      <Form.Group>
        <Form.Label>CPF</Form.Label>
        <InputGroup>
          <Form.Control
            className="mb-0"
            name="cpf"
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
        </InputGroup>
      </Form.Group>
    </Form>
  );
}

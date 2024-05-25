import { useState } from "react";
import { useFormik } from "formik";
import { CreateUserSchema, mask } from "../../../utils";
import { useUserCreate } from "../../../domain";
import {
  Button,
  ButtonGroup,
  Form,
  Modal,
  Spinner,
  ToggleButton,
} from "react-bootstrap";
import {
  PermissionType,
  ToastMessages,
  useToastStore,
} from "../../../services";

export function UserCreate({ handleVisibility }) {
  const { mutate, isPending } = useUserCreate();

  const [permission, setPermission] = useState(PermissionType.CLIENTE);

  const handlePermission = (permission) => {
    setPermission(permission);
  };

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      showToast({ message: ToastMessages.Users.CreateUser.success });
      handleVisibility();
    },
    onError: () => {
      showToast({ message: ToastMessages.Users.CreateUser.error });
    },
  };

  const formik = useFormik({
    validationSchema: CreateUserSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: ({ email, password }) =>
      mutate(
        {
          email,
          password,
          permission,
        },
        mutateOptions
      ),
  });

  return (
    <Modal show onHide={handleVisibility}>
      <Modal.Header closeButton>
        <Modal.Title>Novo usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Group className="mb-2">
          <Form.Label>Email</Form.Label>
          <Form.Control
            name="email"
            type="email"
            maxLength={35}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={formik.errors.email && formik.touched.email}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-2">
          <Form.Label>Senha</Form.Label>
          <Form.Control
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

        <Form.Group className="mb-2">
          <Form.Label>Permissão</Form.Label>
          <div className=" d-flex justify-content-center">
            <ButtonGroup>
              <ToggleButton
                variant={
                  permission === PermissionType.ADMIN ? "dark" : "outline-dark"
                }
                value={PermissionType.ADMIN}
                onClick={() => handlePermission(PermissionType.ADMIN)}
              >
                {mask.capitalizeFirstLetter(PermissionType.ADMIN)}
              </ToggleButton>
              <ToggleButton
                variant={
                  permission === PermissionType.BARBEIRO
                    ? "dark"
                    : "outline-dark"
                }
                value={PermissionType.BARBEIRO}
                onClick={() => handlePermission(PermissionType.BARBEIRO)}
              >
                {mask.capitalizeFirstLetter(PermissionType.BARBEIRO)}
              </ToggleButton>
              <ToggleButton
                variant={
                  permission === PermissionType.CLIENTE
                    ? "dark"
                    : "outline-dark"
                }
                value={PermissionType.CLIENTE}
                onClick={() => handlePermission(PermissionType.CLIENTE)}
              >
                {mask.capitalizeFirstLetter(PermissionType.CLIENTE)}
              </ToggleButton>
            </ButtonGroup>
          </div>
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={formik.handleSubmit}>
          Salvar {isPending && <Spinner size="sm" />}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

import { ScreenTitle } from "../../../components";
import { useFormik } from "formik";
import { RegisterSchema } from "../../../utils";
import { useUserCreate } from "../../../domain";
import { Button, Form, Spinner } from "react-bootstrap";
import { useToastStore, ToastMessages } from "../../../services";

export function SignUp() {
  const { mutate, isPending } = useUserCreate();
  const { showToast } = useToastStore();

  const formik = useFormik({
    validationSchema: RegisterSchema,
    initialValues: {
      email: "",
      password: "",
      checkPass: "",
    },
    onSubmit: (values) =>
      mutate(
        {
          email: values.email,
          password: values.password,
          permission: "CLIENTE",
        },
        {
          onSuccess: () => {
            showToast({ message: ToastMessages.SignUp.Success });
          },
          onError: () => {
            showToast({ message: ToastMessages.SignUp.Error });
          },
        }
      ),
  });

  return (
    <Form className="bg-body-secondary  border b-1 shadow p-5 rounded">
      <ScreenTitle>Cadastre-se</ScreenTitle>
      <Form.Group className="mb-2">
        <Form.Label>E-mail</Form.Label>
        <Form.Control
          name="email"
          type="email"
          placeholder="juan@example.com"
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
          placeholder="********"
          maxLength={12}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.password && formik.touched.password}
        />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Confirmar senha</Form.Label>
        <Form.Control
          name="checkPass"
          type="password"
          placeholder="********"
          maxLength={12}
          value={formik.values.checkPass}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.checkPass && formik.touched.checkPass}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.checkPass}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-end ">
        <Button
          style={{ marginTop: 20 }}
          variant="outline-dark"
          onClick={formik.handleSubmit}
          disabled={isPending}
        >
          Cadastrar {isPending && <Spinner size="sm" />}
        </Button>
      </div>
    </Form>
  );
}

import { Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../../../utils/index";
import { useUserAuth } from "../../../domain";
import { useAuthStore,ToastMessages } from "../../../services";
import { useToastStore } from "../../../services";
import { Button, Form, Spinner } from "react-bootstrap";
import { ScreenTitle } from "../../../components/";

export function SignIn() {
  const navigate = useNavigate();
  const { data: authResponse, isPending, mutate } = useUserAuth();
  const { authCredentials, saveCredentials } = useAuthStore();
  const { showToast } = useToastStore();


  if (authResponse) {
    saveCredentials(authResponse);
  }

  if (authCredentials) {
    saveCredentials(authCredentials);
    navigate("/home");
  }

  const formik = useFormik({
    validationSchema: LoginSchema,
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) =>
      mutate(
        { ...values },
        {
          onError: () => {
            showToast({ message: ToastMessages.SignIn.error });
          },
        }
      ),
  });

  if (authCredentials?.user.id) {
    return <Navigate to="/home" />;
  }

  return (
    <Form className="p-5">
      <Form.Group className="mb-2">
        <ScreenTitle>Login</ScreenTitle>

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

      <div className="text-center mt-5">
        <a
          style={{ textDecoration: "none", color: "inherit" }}
          href="/recuperar-senha"
        >
          Esqueci minha senha
        </a>
      </div>

      <div className="d-flex justify-content-end" style={{ marginTop: 35 }}>
        <Button
          variant="outline-dark"
          onClick={formik.handleSubmit}
          disabled={isPending}
        >
          Entrar {isPending && <Spinner size="sm" />}
        </Button>
      </div>
    </Form>
  );
}

import { useNavigate } from "react-router-dom";
import { Alert, Box, Icon, Toast } from "../../components";
import { useFormik } from "formik";
import { RecoveryPassSchema, mask } from "../../utils";
import { useRecoveryPassword } from "../../domain/ProfileDomain/profileUseCases";
import { Col, Container, Form, Row, Button } from "react-bootstrap";

export function RecoveryPassword() {
  const { fetch, status } = useRecoveryPassword();
  const formik = useFormik({
    validationSchema: RecoveryPassSchema,
    initialValues: {
      email: "",
      cpf: "",
      password: "",
      checkPass: "",
    },
    onSubmit: (values) => {
      fetch({
        email: values.email,
        profileCpf: mask.removeCpf(values.cpf),
        newPassword: values.password,
      });
    },
  });

  const navigate = useNavigate();
  const navigateToAuthPage = () => {
    navigate("/");
  };

  function StatusAlert({ status }) {
    const state = {
      message: null,
      type: "danger",
    };
    if (status) {
      switch (status) {
        case 204:
          state.message = "Senha alterada com sucesso.";
          state.type = "success";
          break;
        case 401:
          state.message =
            "CPF não encontrado, entre em contato com o administrador.";
          break;
        default:
          state.message = "E-mail e/ou CPF não encontrados.";
          break;
      }
      return <Alert type={state.type} message={state.message} />;
    }
  }
  return (
    <Container fluid="sm">
      <Toast />
      <Row
        className="justify-content-md-center bg-body-tertiary  border b-1 shadow p-5 m-5 rounded"
        xs={1}
        sm={1}
      >
        <Col md={5}>
          <Form>
            <div className="text-center mb-5">
              <Icon name="lock" size={100} />
              <h3 className="">Esqueci minha senha</h3>
            </div>

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

            <Form.Group className="mb-2">
              <Form.Label>Nova senha</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="123.456.789-10"
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
              <Form.Label>Confirmar senha</Form.Label>
              <Form.Control
                name="checkPass"
                type="checkPass"
                placeholder="123.456.789-10"
                minLength={8}
                maxLength={12}
                value={formik.values.checkPass}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                isInvalid={formik.errors.checkPass && formik.touched.checkPass}
              />
              <Form.Control.Feedback type="invalid">
                {formik.errors.checkPass}
              </Form.Control.Feedback>
            </Form.Group>

            <div class="d-flex justify-content-end" style={{ marginTop: 50 }}>
              <Button variant="outline-dark" onClick={formik.handleSubmit}>
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

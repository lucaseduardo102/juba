import { useNavigate } from "react-router-dom";
import { Alert, Box, Button, Form, Icon, Input } from "../../components";
import { useFormik } from "formik";
import { RecoveryPassSchema, mask } from "../../utils";
import { useRecoveryPassword } from "../../domain/Profile/profileUseCases";

export function RecoveryPassword() {
  const { fetch, status } = useRecoveryPassword();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: RecoveryPassSchema,
      initialValues: {
        email: "",
        cpf: "",
        password: "",
        checkPass: "",
      },
      onSubmit: () => {
        fetch({
          email: values.email,
          profileCpf: mask.removeCpf(values.cpf),
          newPassword: values.password,
        })
      }
    })

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
          state.message = "CPF não encontrado, entre em contato com o administrador.";
          break;
        default:
          state.message = "E-mail e/ou CPF não encontrados.";
          break;
      }
      return <Alert type={state.type} message={state.message} />;
    }
  }
  return (
    <Box columnSize={4}>
      <Form>
        <>
          <div className="d-flex justify-content-center">
            <Icon name="lock" size={100} />
          </div>
          <h3 className="text-center pb-3">Esqueci minha senha</h3>

          <p className="text-center pb-3">
            Informe seu E-mail e CPF para alterar sua senha.
          </p>
          <StatusAlert status={status} />
          <Input
            label="E-mail"
            type="email"
            placeholder="lucas@exemplo.com"
            value={values.email}
            onChange={handleChange("email")}
            onBlur={handleBlur("email")}
            maxLength={35}
            error={touched.email && errors.email}
          />

          <Input
            label="CPF"
            type="text"
            placeholder="123.456.789-10"
            value={mask.cpf(values.cpf)}
            onChange={handleChange("cpf")}
            onBlur={handleBlur("cpf")}
            maxLength={14}
            error={touched.cpf && errors.cpf}
          />

          <Input
            label="Nova senha"
            type="password"
            placeholder="********"
            value={values.password}
            onChange={handleChange("password")}
            onBlur={handleBlur("password")}
            minLength={8}
            maxLength={12}
            error={touched.password && errors.password}
          />

          <Input
            label="Confirmar senha"
            type="password"
            placeholder="********"
            value={values.checkPass}
            onChange={handleChange("checkPass")}
            onBlur={handleBlur("checkPass")}
            minLength={8}
            maxLength={12}
            error={touched.checkPass && errors.checkPass}
          />

          <div class="d-grid gap-3 d-flex justify-content-md-end">
            <Button
              color="secondary"
              text={"Voltar"}
              onClick={navigateToAuthPage}
            />
            <Button text="Enviar" onClick={handleSubmit} />
          </div>
        </>
      </Form>
    </Box>
  );
}

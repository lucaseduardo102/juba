import { useUserCreate } from "../../../domain/UserDomain";
import { Alert } from "../../../components";
import { useFormik } from "formik";
import { RegisterSchema } from "../../../utils";
import {InputField } from "../../../components";
import { ButtonAuth } from "../../../components/ButtonAuth";

export function Cadastro() {
  const { status, fetch } = useUserCreate();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: RegisterSchema,
      initialValues: {
        email: "",
        password: "",
        checkPass: "",
      },
      onSubmit: (values) =>
        fetch({
          email: values.email,
          password: values.password,
          permission: "CLIENTE",
        }),
    });

  function StatusAlert({ status }) {
    const state = {
      message: null,
      type: "danger",
    };

    if (status) {
      switch (status) {
        case 201:
          state.message = "Usuário criado com sucesso.";
          state.type = "success";
          break;
        case 401:
          state.message = "Usuário já existe!";
          break;
        default:
          state.message = "Ocorreu um erro inesperado, tente novamente.";
          break;
      }
      return <Alert type={state.type} message={state.message} />;
    }
  }

  return (
    <div className="box-autenticacao-cadastro">
      <form>
        <div className="logoTitleCad">
          <h1 className="title-text"> Cadastre-se </h1>
        </div>
        <StatusAlert status={status} />
        <InputField
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange("email")}
          onBlur={handleBlur("email")}
          maxLength={35}
          error={touched.email && errors.email}
        />

        <InputField
          type="password"
          placeholder="Senha"
          value={values.password}
          onChange={handleChange("password")}
          onBlur={handleBlur("password")}
          error={touched.password && errors.password}
        />

        <InputField
          type="password"
          placeholder="Confirmar senha"
          value={values.checkPass}
          onChange={handleChange("checkPass")}
          onBlur={handleBlur("checkPass")}
          error={touched.checkPass && errors.checkPass}
        />
        <ButtonAuth text="Cadastrar" onClick={handleSubmit} />
      </form>
    </div>
  );
}

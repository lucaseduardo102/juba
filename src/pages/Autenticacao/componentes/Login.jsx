import { Link, Navigate } from "react-router-dom";
import React from "react";
import {  useUserAuth,  } from "../../../domain/UserDomain";
import { useFormik } from "formik";
import { LoginSchema } from "../../../utils/index";
import { StatusAlert, ButtonAuth, InputField } from "../../../components";

export const Login = () => {
  const { data: authResponse, status, fetch } = useUserAuth();

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      validationSchema: LoginSchema,
      initialValues: {
        email: "",
        password: "",
      },
      onSubmit: () => fetch(values),
    });

  if (authResponse?.user.id) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="box-autenticacao-login">
      <h1 className="title-text">Login</h1>
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
        value={values.password}
        onChange={handleChange("password")}
        onBlur={handleBlur("password")}
        placeholder="Senha"
        error={touched.password && errors.password}
      />

      <ButtonAuth text="Entrar" onClick={handleSubmit} />

      <p className="text-center">
        <Link to="/recuperar-senha">Esqueci minha senha</Link>
      </p>
    </div>
  );
};

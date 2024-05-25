import { object, string, ref } from "yup";

const email = string().email("E-mail inválido").required("*Campo obrigatório");
const password = string()
  .min(8, "A senha deve conter pelo menos 8 caracteres")
  .max(12, "A senha deve conter pelo maximo 12 caracteres")
  .required("*Campo obrigatório");

const checkPass = string()
  .oneOf([ref("password")], "*As senhas devem ser iguais")
  .required("*Campo obrigatório");

const cpf = string()
  .min(11, "*Deve ser CPF")
  .max(14, "*Deve ser CPF")
  .required("*Campo obrigatório");

const optionalPassword = string()
  .min(8, ({ min }) => `Mínimo de ${min} caracteres`)
  .max(20, ({ max }) => `No máximo ${max} caracteres`)
  .optional();

const name = string()
  .min(5, "*Nome muito curto")
  .max(50, "*Nome muito longo")
  .required("*Campo obrigatório");

export const LoginSchema = object().shape({
  email,
  password,
});

export const RegisterSchema = object().shape({
  email,
  password,
  checkPass,
});

export const RecoveryPassSchema = object().shape({
  email,
  cpf,
  password,
  checkPass,
});

export const CreateUserSchema = object().shape({
  email,
  password,
});

export const UpdateUserSchema = object().shape({
  email,
  password: optionalPassword,
});

export const ProfileSchema = object().shape({
  name,
  cpf,
});

export const UpdateProfileByClientSchema = object().shape({
  name,
});

export const CategorySchema = object().shape({
  name,
});

export const SpecialtySchema = object().shape({
  name,
})

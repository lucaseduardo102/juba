import {object, string, ref} from "yup";

const email = string()
  .email("E-mail inválido")
  .required("*Campo obrigatório");
const password = string()
  .min(8, "A senha deve conter pelo menos 8 caracteres")
  .max(12, "A senha deve conter pelo maximo 12 caracteres")
  .required("*Campo obrigatório");

const checkPass = string()
  .oneOf([ref('password')], '*As senhas devem ser iguais')
  .required('*Campo obrigatório');

const cpf = string()
  .min(11, '*Deve ser CPF')
  .max(14, '*Deve ser CPF')
  .required('*Campo obrigatório');

export const LoginSchema = object().shape({
  email,
  password,
});

export const RegisterSchema = object().shape({
  email,
  password,
  checkPass
})

export const RecoveryPassSchema = object().shape({
  email,
  cpf,
  password,
  checkPass
})
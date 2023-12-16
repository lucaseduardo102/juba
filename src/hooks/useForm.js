import { useFormik } from "formik";

export function useForm({ ...rest }) {
  const formik = useFormik({
    ...rest,
  });

  function handleChangeText(key, value) {
    formik.setFieldValue(key, value);
  }

  function handleChangeBoolean(key) {
    formik.setFieldValue(key, !formik.values[key]);
  }

  return {
    handleChangeText,
    handleChangeBoolean,
    ...formik,
  };
}

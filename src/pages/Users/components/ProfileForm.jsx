import { Form } from "react-bootstrap";
import { mask } from "../../../utils";

export function ProfileForm({ formik, isDisabled = false }) {
  return (
    <>
      <th>
        <Form.Control
          name="name"
          maxLength={50}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.name && formik.touched.name}
          disabled={isDisabled}
        />
      </th>
      <th>
        <Form.Control
          name="cpf"
          maxLength={14}
          value={mask.cpf(formik.values.cpf)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.errors.cpf && formik.touched.cpf}
          disabled={isDisabled}
        />
      </th>
      <th>
        <select
          className="form-select"
          name="statusProfile"
          value={formik.values.statusProfile}
          onChange={formik.handleChange}
          disabled={isDisabled}
        >
          <option value={true}>Ativo</option>
          <option value={false}>Inativo</option>
        </select>
      </th>
    </>
  );
}

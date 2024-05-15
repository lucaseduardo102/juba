import { Form } from "react-bootstrap";

export function FormSpecialty({ formik, isDisabled = false }) {
  return (
    <>
      <th>
        <Form.Control
          name="name"
          value={formik.values.name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.name && formik.touched.name}
          disabled={isDisabled}
        />
      </th>
      <th>
        <Form.Control
          name="price"
          value={formik.values.price?.toLocaleString("pt-BR")}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.price && formik.touched.price}
          disabled={isDisabled}
        />
      </th>
      <th>
        <Form.Control
          name="timeDuration"
          value={formik.values.timeDuration}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.timeDuration && formik.touched.timeDuration}
          disabled={isDisabled}
        />
      </th>
    </>
  );
}

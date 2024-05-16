import { Form } from "react-bootstrap";
import { mask } from "../../../utils";

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
          maxLength={7}
          value={mask.currencyFormatBRL(formik.values.price)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.price && formik.touched.price}
          disabled={isDisabled}
        />
      </th>
      <th>
        <Form.Control
          name="timeDuration"
          maxLength={5}
          value={mask.fullTime(formik.values.timeDuration)}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.timeDuration && formik.touched.timeDuration}
          disabled={isDisabled}
        />
      </th>
    </>
  );
}

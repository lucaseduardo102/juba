import { Button, Form } from "react-bootstrap";
import { useToastStore } from "../../../services";
import { useFormik } from "formik";
import { FormSpecialty } from "./FormSpecialty";

export function LineCreate({ categoryId }) {
  //   const { mutate } = useSpecialtyCreate();
  const { showToast } = useToastStore();

  const formik = useFormik({
    initialValues: { name: "", price: "", timeDuration: "" },
  });

  return (
    <tr>
      <FormSpecialty formik={formik} />
      <th>
        <Button variant="outline-dark" size="sm">
          Salvar
        </Button>
      </th>
    </tr>
  );
}

import { Button } from "react-bootstrap";
import { useSpecialtyCreate } from "../../../domain/";
import { ToastMessages, useToastStore } from "../../../services";
import { useFormik } from "formik";
import { FormSpecialty } from "./FormSpecialty";
import { SpecialtySchema, mask } from "../../../utils";

export function LineCreate({ categoryId }) {
  const { mutate } = useSpecialtyCreate();
  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      showToast({ message: ToastMessages.Catalog.CreateSpecialty.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Catalog.CreateSpecialty.error });
    },
  };

  const formik = useFormik({
    validationSchema: SpecialtySchema,
    initialValues: { name: "", price: "", timeDuration: "" },
    onSubmit: ({ name, price, timeDuration }) => {
      mutate(
        {
          name,
          price: mask.formatToFloat(mask.cleanCurrency(price)),
          timeDuration,
          categoryId,
        },
        mutateOptions
      );
    },
  });

  return (
    <tr>
      <FormSpecialty formik={formik} />
      <th>
        <Button variant="outline-dark" size="sm" onClick={formik.handleSubmit}>
          Salvar
        </Button>
      </th>
    </tr>
  );
}

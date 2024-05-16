import { Button } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import { useSpecialtyUpdate } from "../../../domain/";
import { useToastStore, ToastMessages } from "../../../services";
import { FormSpecialty } from "./FormSpecialty";
import { SpecialtySchema, mask } from "../../../utils";

export function LineUpdate({ specialty: { id, name, price, timeDuration } }) {
  const [isDisabled, setIsDisabled] = useState(true);

  const { mutate } = useSpecialtyUpdate();
  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      setIsDisabled(true);
      showToast({ message: ToastMessages.Catalog.UpdateSpecialty.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Catalog.UpdateSpecialty.error });
    },
  };

  const formik = useFormik({
    validationSchema: SpecialtySchema,
    initialValues: {
      name,
      price,
      timeDuration,
    },
    onSubmit: ({ name, price, timeDuration }) => {
      mutate(
        {
          specialtyId: id,
          name,
          price: mask.formatToFloat(mask.cleanCurrency(price)),
          timeDuration,
        },
        mutateOptions
      );
    },
  });

  return (
    <tr>
      <FormSpecialty formik={formik} isDisabled={isDisabled} />
      <th className="text-center">
        {isDisabled ? (
          <i
            style={{ fontSize: "1.4rem" }}
            className="bi bi-pencil-square"
            onClick={() => setIsDisabled(false)}
          ></i>
        ) : (
          <div className="d-flex gap-2 ">
            <Button
              className="mt-1"
              variant="outline-dark"
              size="sm"
              onClick={() => setIsDisabled(true)}
            >
              Cancelar
            </Button>

            <Button
              className="mt-1"
              variant="dark"
              size="sm"
              onClick={formik.handleSubmit}
            >
              Salvar
            </Button>
          </div>
        )}
      </th>
    </tr>
  );
}

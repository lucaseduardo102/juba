import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useFormik } from "formik";
import { useSpecialtyUpdate } from "../../../domain/SpecialtyDomain/specialtyUseCases";
import { useToastStore } from "../../../services";
import { FormSpecialty } from "./FormSpecialty";

export function LineUpdate({ specialty: { id, name, price, timeDuration } }) {
  const [isDisabled, setIsDisabled] = useState(true);

  const { mutate } = useSpecialtyUpdate();
  const { showToast } = useToastStore();

  const formik = useFormik({
    initialValues: { name, price, timeDuration },
    onSubmit: (values) => {
      mutate(
        {
          id,
          name: values.name,
          price: values.price,
          timeDuration: values.timeDuration,
        },
        {
          onSuccess: () => {
            showToast({ message: "Especialidade alterada com sucesso" });
          },
          onError: () => {
            showToast({ message: "Erro ao alterar especialidade" });
          },
        }
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

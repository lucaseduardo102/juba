import { Button, Card, Form, Spinner } from "react-bootstrap";
import { useCategoryUpdate } from "../../../domain";
import { useState } from "react";
import { useFormik } from "formik";
import { CategorySchema } from "../../../utils";
import { ToastMessages, useToastStore } from "../../../services";

export function CardTitle({ category: { id, name } }) {
  const [isEditable, setIsEditable] = useState(false);

  const { mutate, isPending } = useCategoryUpdate();
  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      setIsEditable(false);
      showToast({
        message: ToastMessages.Catalog.UpdateCategory.success,
      });
    },
    onError: () => {
      showToast({
        message: ToastMessages.Catalog.UpdateCategory.error,
      });
    },
  };

  const formik = useFormik({
    validationSchema: CategorySchema,
    initialValues: { name },
    onSubmit: ({ name }) => mutate({ id, name }, mutateOptions),
  });

  return (
    <Card.Title>
      <div className="d-flex justify-content-between gap-2  ">
        {isEditable ? (
          <>
            <Form.Control
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.errors.name && formik.touched.name}
            />
            <Button
              className="ms-4"
              variant="outline-dark"
              size="sm"
              onClick={() => setIsEditable(false)}
            >
              Cancelar
            </Button>
            <Button
              variant="dark"
              size="sm"
              disabled={isPending}
              onClick={formik.handleSubmit}
            >
              Salvar {isPending && <Spinner size="sm" />}
            </Button>
          </>
        ) : (
          <>
            {name}
            <i
              className="bi bi-pencil-square"
              style={{ fontSize: "1.2rem" }}
              onClick={() => setIsEditable(true)}
            ></i>
          </>
        )}
      </div>
    </Card.Title>
  );
}

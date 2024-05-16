import { Button, Card, Col, Form, Spinner } from "react-bootstrap";
import { useCategoryCreate } from "../../../domain";
import { useState } from "react";
import { useFormik } from "formik";
import { CategorySchema } from "../../../utils";
import { ToastMessages, useToastStore } from "../../../services";

export function CardCreateCategory() {
  const [isDisabled, setIsDisabled] = useState(true);

  const { mutate, isPending } = useCategoryCreate();
  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      setIsDisabled(true);
      showToast({ message: ToastMessages.Catalog.CreateCategory.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Catalog.CreateCategory.success });
    },
  };

  const formik = useFormik({
    validationSchema: CategorySchema,
    initialValues: {
      name: "",
    },
    onSubmit: ({ name }) => {
      mutate({ name }, mutateOptions);
    },
  });

  return (
    <Col>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-center gap-2 ">
            {isDisabled ? (
              <i
                style={{
                  fontSize: "2rem",
                  flex: 1,
                }}
                className="bi bi-plus text-center"
                onClick={() => setIsDisabled(false)}
              ></i>
            ) : (
              <>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Nome da categoria"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.errors.name && formik.touched.name}
                />
                <Button
                  className="ms-4"
                  variant="outline-dark"
                  size="sm"
                  onClick={() => setIsDisabled(false)}
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
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

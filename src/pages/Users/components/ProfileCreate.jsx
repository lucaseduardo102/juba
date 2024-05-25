import { useFormik } from "formik";
import { useProfileCreate } from "../../../domain";
import { ToastMessages, useToastStore } from "../../../services";
import { ProfileForm } from "./ProfileForm";
import { Button, Spinner } from "react-bootstrap";
import { ProfileSchema, mask } from "../../../utils";

export function ProfileCreate({ userId, handleVisibility }) {
  const { isPending, mutate } = useProfileCreate();

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      handleVisibility();
      showToast({ message: ToastMessages.Users.ProfileCreate.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Users.ProfileCreate.error });
    },
  };

  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      name: "",
      cpf: "",
      statusProfile: true,
    },
    onSubmit: ({ name, cpf, statusProfile }) => {
      mutate(
        { name, cpf: mask.removeCpf(cpf), statusProfile, userId },
        mutateOptions
      );
    },
  });

  return (
    <tr>
      <ProfileForm formik={formik} />
      <th>
        <div className="d-flex justify-content-center mt-1">
          <Button
            variant="dark"
            size="sm"
            onClick={formik.handleSubmit}
            disabled={isPending}
          >
            {isPending ? <Spinner size="sm" /> : "Salvar"}
          </Button>
        </div>
      </th>
    </tr>
  );
}

import { useFormik } from "formik";
import { useState } from "react";
import { ProfileForm } from "./ProfileForm";
import { Button, Spinner } from "react-bootstrap";
import { useProfileRemove, useProfileUpdate } from "../../../domain";
import { ToastMessages, useToastStore } from "../../../services";
import { ProfileSchema, mask } from "../../../utils";

export function ProfileUpdate({ profile: { id, name, cpf, statusProfile } }) {
  const { isPending, mutate } = useProfileUpdate();

  const [isDisabled, setIsDisabled] = useState(true);
  const handleIsDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      showToast({ message: ToastMessages.Users.ProfileUpdate.success });
      handleIsDisabled();
    },
    onError: () => {
      showToast({ message: ToastMessages.Users.ProfileUpdate.error });
    },
  };

  const [canRemoved, setCanRemoved] = useState(false);

  const handleCanRemoved = () => {
    setCanRemoved(!canRemoved);
  };

  const formik = useFormik({
    validationSchema: ProfileSchema,
    initialValues: {
      name,
      cpf,
      statusProfile,
    },
    onSubmit: ({ name, cpf, statusProfile }) => {
      mutate(
        { id, name, cpf: mask.removeCpf(cpf), statusProfile },
        mutateOptions
      );
    },
  });
  return (
    <tr>
      {canRemoved ? (
        <LineDelete handleCanRemoved={handleCanRemoved} profileId={id} />
      ) : (
        <>
          <ProfileForm formik={formik} isDisabled={isDisabled} />
          <th>
            <Buttons
              handleIsDisabled={handleIsDisabled}
              isDisabled={isDisabled}
              isPending={isPending}
              handleSubmit={formik.handleSubmit}
              handleCanRemoved={handleCanRemoved}
            />
          </th>
        </>
      )}
    </tr>
  );
}

function Buttons({
  isPending,
  isDisabled,
  handleIsDisabled,
  handleSubmit,
  handleCanRemoved,
}) {
  if (isPending) return <Spinner className="my-2" size="sm" />;

  return (
    <div className="d-flex justify-content-center gap-2">
      <Button variant="outline-dark" size="sm" onClick={handleIsDisabled}>
        <i className={`bi bi-${isDisabled ? "pencil-square" : "x-lg"}`}></i>
      </Button>

      {!isDisabled ? (
        <Button variant="outline-dark" size="sm" onClick={handleSubmit}>
          <i className="bi bi-check-lg"></i>
        </Button>
      ) : (
        <Button variant="outline-dark" size="sm" onClick={handleCanRemoved}>
          <i className="bi bi-trash-fill"></i>
        </Button>
      )}
    </div>
  );
}

function LineDelete({ handleCanRemoved, profileId }) {
  const { isPending, mutate } = useProfileRemove();

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      showToast({ message: ToastMessages.Users.ProfileRemove.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Users.ProfileRemove.error });
    },
  };

  const removeProfile = () => {
    mutate({ id: profileId }, mutateOptions);
  };

  return (
    <>
      <th colSpan={3}>Deseja realmente excluir o perfil?</th>
      <th className="col-2">
        <div className="d-flex justify-content-center gap-2">
          {isPending ? (
            <Spinner size="sm" />
          ) : (
            <>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={handleCanRemoved}
              >
                <i className="bi bi-x-lg"></i>
              </Button>
              <Button variant="outline-dark" size="sm" onClick={removeProfile}>
                <i className="bi bi-check-lg"></i>
              </Button>
            </>
          )}
        </div>
      </th>
    </>
  );
}

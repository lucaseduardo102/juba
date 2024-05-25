import { useState } from "react";
import { useUserUpdate } from "../../../domain";
import { useFormik } from "formik";
import { Button, Form, Spinner } from "react-bootstrap";
import { UpdateUserSchema, mask } from "../../../utils";
import { useNavigate } from "react-router-dom";
import {
  PermissionType,
  ToastMessages,
  useToastStore,
} from "../../../services";
import { ProfileList } from "./ProfileList";

export function UserUpdate({ user }) {
  const { formik, handleIsDisabled, isDisabled, isPending } =
    useUserFormService(user);

  return (
    <tr>
      <td>
        <Form.Control
          name="email"
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.email && formik.touched.email}
          disabled={isDisabled}
        />
      </td>
      <td>
        <Form.Control
          name="password"
          type="password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={formik.errors.password && formik.touched.password}
          disabled={isDisabled}
        />
      </td>
      <td>
        <select
          className="form-select"
          name="permission"
          value={formik.values.permission}
          onChange={formik.handleChange}
          disabled={isDisabled}
        >
          <option value={PermissionType.ADMIN}>
            {mask.capitalizeFirstLetter(PermissionType.ADMIN)}
          </option>
          <option value={PermissionType.BARBEIRO}>
            {mask.capitalizeFirstLetter(PermissionType.BARBEIRO)}
          </option>
          <option value={PermissionType.CLIENTE}>
            {mask.capitalizeFirstLetter(PermissionType.CLIENTE)}
          </option>
        </select>
      </td>

      <td>
        <div className="d-flex justify-content-center gap-2">
          {isPending ? (
            <Spinner className="my-2" size="sm" />
          ) : (
            <>
              <Button
                variant="outline-dark"
                size="sm"
                onClick={handleIsDisabled}
              >
                {
                  <i
                    className={`bi bi-${isDisabled ? "pencil-square" : "x-lg"}`}
                  ></i>
                }
              </Button>

              {!isDisabled ? (
                <Button
                  variant="outline-dark"
                  size="sm"
                  onClick={formik.handleSubmit}
                >
                  <i className="bi bi-check-lg"></i>
                </Button>
              ) : (
                <ProfileList profiles={user?.profiles} userId={user?.id} />
              )}
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

const useUserFormService = ({ id, email = "", permission = "CLIENTE" }) => {
  const navigate = useNavigate();

  const [isDisabled, setIsDisabled] = useState(true);

  const handleIsDisabled = () => {
    setIsDisabled(!isDisabled);
  };

  const { mutate, isPending } = useUserUpdate();

  const { showToast } = useToastStore();

  const mutateOptions = {
    onSuccess: () => {
      handleIsDisabled();
      showToast({ message: ToastMessages.Users.UpdateUser.success });
    },
    onError: () => {
      showToast({ message: ToastMessages.Users.UpdateUser.error });
    },
  };

  const formik = useFormik({
    validationSchema: UpdateUserSchema,
    initialValues: { email, password: "", permission },
    onSubmit: ({ email, password, permission }) => {
      const validPassword = password.length >= 6 ? password : null;
      mutate(
        {
          userId: id,
          email,
          password: validPassword,
          permission,
        },
        mutateOptions
      );
    },
  });

  return {
    navigate,
    isDisabled,
    handleIsDisabled,
    isPending,
    formik,
  };
};

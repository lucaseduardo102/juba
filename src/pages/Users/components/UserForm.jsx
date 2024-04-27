import { Input } from "../../../components";

export function UserForm({ formik, permission, handlePermission }) {

  return (
    <>
      <Input
        label="E-mail"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange("email")}
        onBlur={formik.handleBlur("email")}
        maxLength={35}
        error={formik.touched.email && formik.errors.email}
      />

      <Input
        label="Nova senha"
        type="password"
        value={formik.values.password}
        onChange={formik.handleChange("password")}
        onBlur={formik.handleBlur("password")}
        minLength={8}
        maxLength={12}
        error={formik.touched.password && formik.errors.password}
      />

      <ButtonPermission
        permissionType={permission}
        handlePermission={handlePermission}
      />
    </>
  );
}

function ButtonPermission({ permissionType, handlePermission }) {
  const permissions = [
    { title: "Admin", value: "ADMIN" },
    { title: "Barbeiro", value: "BARBEIRO" },
    { title: "Cliente", value: "CLIENTE" },
  ];

  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label">Permissão</label>
      <div className="col-sm-9 d-flex flex-row justify-content-evenly">
        {permissions.map((permissionItem) => {
          const isSelected = permissionType === permissionItem.value;

          return (
            <button
              className={`btn ${
                isSelected ? "btn-success" : "btn-outline-success"
              }`}
              onClick={() => handlePermission(permissionItem.value)}
            >
              {permissionItem.title}
            </button>
          );
        })}
      </div>
    </div>
  );
}

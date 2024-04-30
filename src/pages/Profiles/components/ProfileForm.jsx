import { Input } from "../../../components";
import { mask } from "../../../utils";

export function ProfileForm({ formik, statusProfile, handleStatusProfile }) {
  return (
    <>
      <Input
        label="Nome"
        type="text"
        placeholder="Lucas Eduardo"
        maxLength={50}
        value={formik.values.name}
        onChange={formik.handleChange("name")}
        onBlur={formik.handleBlur("name")}
        error={formik.touched.name && formik.errors.name}
      />
      <Input
        label="CPF"
        type="text"
        placeholder="123.456.789-10"
        value={mask.cpf(formik.values.cpf)}
        onChange={formik.handleChange("cpf")}
        onBlur={formik.handleBlur("cpf")}
        maxLength={14}
        error={formik.touched.cpf && formik.errors.cpf}
      />
      <ButtonStatus
        isActive={statusProfile}
        handleStatusProfile={handleStatusProfile}
      />
    </>
  );
}

function ButtonStatus({ isActive, handleStatusProfile }) {
  return (
    <div className="row mb-3">
      <label className="col-sm-3 col-form-label">Status</label>
      <div className="col-sm-9 d-flex">
        <button
          style={{ flex: 1 }}
          className={`btn ${isActive ? "btn-success" : "btn-secondary"}`}
          onClick={handleStatusProfile}
        >
          {isActive ? "Ativo" : "Inativo"}
        </button>
      </div>
    </div>
  );
}

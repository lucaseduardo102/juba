import { Input } from "../../../components";
import { mask } from "../../../utils";

export function ProfileForm({ profiles }) {
  const hasProfile = profiles && profiles.length > 0;

  if (hasProfile) {
    return profiles?.map((profile) => (
      <div>
        <Input
          label="CPF"
          type="text"
          placeholder="123.456.789-10"
          error={""}
          //    value={mask.cpf(values.cpf)}
          //    onChange={handleChange("cpf")}
          //    onBlur={handleBlur("cpf")}
          //    maxLength={14}
          //    error={touched.cpf && errors.cpf}
        />
      </div>
    ));
  }

  return <div>Nenhum perfil associado.</div>
}

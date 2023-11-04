import { useNavigate } from "react-router-dom";
import { Box, Button, Form, Icon, Input } from "../../components";

export function RecoveryPassword() {
  const navigate = useNavigate();
  function navigateToAuthPage() {
    navigate("/");
  }

  return (
    <Box columnSize={4}>
      <Form>
        <>
          <div className="d-flex justify-content-center">
            <Icon name="lock" size={100} />
          </div>
          <h3 className="text-center pb-3">Esqueci minha senha</h3>

          <p className="text-center pb-3">
            Informe seu E-mail e CPF para alterar sua senha.
          </p>
          <Input label="Email" type="email" error={null} />
          <Input label="CPF" type="text" error={null} />
          <div class="d-grid gap-3 d-flex justify-content-md-end">
            <Button
              color="secondary"
              text={"Voltar"}
              onClick={navigateToAuthPage}
            />
            <Button text={"Enviar"} onClick={() => alert("Definir regra")} />
          </div>
        </>
      </Form>
    </Box>
  );
}

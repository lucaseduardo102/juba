import { Button, Col, Form, Row } from "react-bootstrap";
import { Load, Screen, ScreenTitle } from "../../components";
import { useUserGetById } from "../../domain";
import { useAuthStore } from "../../services";
import { mask } from "../../utils";
import { useState } from "react";

export function MyAccount() {
  const {
    authCredentials: {
      user: { id },
    },
  } = useAuthStore();
  const { data: user, isLoading, isError } = useUserGetById(id);

  return (
    <Screen>
      {isLoading || isError ? (
        <Load />
      ) : (
        <>
          <ScreenTitle>Gerencie sua conta</ScreenTitle>
          <Row className="justify-content-center mt-5 bg-body-tertiary  border b-1 shadow p-5 m-5 rounded">
            <Col md={6}>
              <FormUser user={user} />
              <div className="d-flex mb-3 justify-content-between align-items-center">
                <h3 className="">Perfis</h3>
                <i
                  className="bi bi-person-plus-fill"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </div>

              {user?.profiles?.length === 0 && (
                <div className="text-center " style={{ marginBottom: 100 }}>
                  Nenhum perfil associado
                </div>
              )}

              {user?.profiles.map((profile, index, array) => (
                <div key={profile.id}>
                  <FormProfile profile={profile} />
                  {array.length - 1 !== index && (
                    <div className="border-bottom border-2 border-dark my-4"></div>
                  )}
                </div>
              ))}
            </Col>
          </Row>
        </>
      )}
    </Screen>
  );
}

function FormUser({ user }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <div>
        <h3 className="">Usuario</h3>
      </div>
      <Form.Group className="mb-2">
        <div className="d-flex justify-content-between">
          <Form.Label>Email</Form.Label>
          <i
            className="bi bi-pencil-square"
            onClick={() => setIsDisabled(false)}
          ></i>
        </div>
        <Form.Control
          name="email"
          type="email"
          maxLength={35}
          value={user.email}
          disabled={isDisabled}
          /* value={values.email}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    isInvalid={formik.errors.email && formik.touched.email} */
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Label>Nova senha</Form.Label>
        <Form.Control
          disabled={isDisabled}
          name="password"
          type="password"
          minLength={8}
          maxLength={12}
          /* value={formik.values.password}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    isInvalid={formik.errors.password && formik.touched.password} */
        />
        {/* <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback> */}
      </Form.Group>
      {!isDisabled && (
        <div className="d-flex justify-content-end gap-2">
          <button
            type="button"
            className="btn active"
            data-bs-toggle="button"
            aria-pressed="true"
            onClick={() => {
              setIsDisabled(true);
            }}
          >
            Cancelar
          </button>
          <Button variant="dark">Salvar</Button>
        </div>
      )}
    </>
  );
}

function FormProfile({ profile }) {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <>
      <Form.Group className="mb-2">
        <div className="d-flex justify-content-between">
          <Form.Label>Nome</Form.Label>
          <i
            className="bi bi-pencil-square"
            onClick={() => setIsDisabled(false)}
          ></i>
        </div>
        <Form.Control
          disabled={isDisabled}
          name="name"
          type="name"
          placeholder="juan@example.com"
          maxLength={35}
          value={profile.name}
        />
      </Form.Group>
      <Form.Group className="mb-2" key={profile.id}>
        <Form.Label>CPF</Form.Label>
        <Form.Control
          disabled={isDisabled}
          name="cpf"
          type="text"
          placeholder="123.456.789-10"
          maxLength={14}
          value={mask.cpf(profile.cpf)}
        />
      </Form.Group>
      {!isDisabled && (
        <div className="d-flex justify-content-end mt-4 gap-2">
          <button
            type="button"
            className="btn active"
            data-bs-toggle="button"
            aria-pressed="true"
            onClick={() => {
              setIsDisabled(true);
            }}
          >
            Cancelar
          </button>
          <Button variant="dark">Salvar</Button>
        </div>
      )}
    </>
  );
}

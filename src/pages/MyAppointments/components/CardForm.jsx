import {
  Accordion,
  Button,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
  Spinner,
} from "react-bootstrap";
import { mask } from "../../../utils";
import { usePayment } from "../service/usePayment";

export function CardForm(props) {
  const { formik, isPaymentByCard, acceptPayment, isPending } =
    usePayment(props);

  return (
    <Accordion.Collapse eventKey="1" in={isPaymentByCard}>
      <div className="mt-4">
        <Form.Group className="mb-3">
          <Form.Label>Número do cartão</Form.Label>
          <Form.Control
            name="cardNumber"
            maxLength={19}
            value={mask.formatCardNumber(formik.values.cardNumber)}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={formik.errors.cardNumber && formik.touched.cardNumber}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.cardNumber}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nome do titular</Form.Label>
          <Form.Control
            name="holderName"
            maxLength={20}
            value={mask.formatName(formik.values.holderName).toUpperCase()}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            isInvalid={formik.errors.holderName && formik.touched.holderName}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.holderName}
          </Form.Control.Feedback>
        </Form.Group>

        <Row className="mb-3" xs={2}>
          <Form.Group>
            <Form.Label>Data de vencimento</Form.Label>
            <Form.Control
              name="expirationDate"
              maxLength={5}
              value={mask.formatExpirationDate(formik.values.expirationDate)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isInvalid={
                formik.errors.expirationDate && formik.touched.expirationDate
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.expirationDate}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group>
            <Form.Label>Código de segurança</Form.Label>
            <Form.Control
              name="securityCode"
              maxLength={3}
              value={mask.formatNumber(formik.values.securityCode)}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              isInvalid={
                formik.errors.securityCode && formik.touched.securityCode
              }
            />
            <Form.Control.Feedback type="invalid">
              {formik.errors.securityCode}
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <DocumentFormGroup formik={formik} />
        <Button
          disabled={!acceptPayment || isPending}
          className="mt-2"
          style={{ width: "100%" }}
          variant="dark"
          onClick={formik.handleSubmit}
        >
          Pagar {isPending && <Spinner size="sm" />}
        </Button>
      </div>
    </Accordion.Collapse>
  );
}

function DocumentFormGroup({ formik }) {
  const handleSelect = (eventKey) => {
    formik.setFieldValue("identificationType", eventKey);
  };

  const isCPF = formik.values.identificationType === "CPF";
  const maskType = isCPF ? "999.999.999-99" : "99.999.999/9999-99";
  const maxLength = isCPF ? 14 : 18;

  return (
    <Form.Group className="mb-3">
      <Form.Label>Documento</Form.Label>
      <InputGroup>
        <DropdownButton
          variant="outline-secondary"
          title={formik.values.identificationType}
          onSelect={handleSelect}
        >
          <Dropdown.Item eventKey="CPF">CPF</Dropdown.Item>
          <Dropdown.Item eventKey="CNPJ">CNPJ</Dropdown.Item>
        </DropdownButton>
        <Form.Control
          name="identificationNumber"
          placeholder={maskType}
          value={
            isCPF
              ? mask.cpf(formik.values.identificationNumber)
              : mask.formatCNPJ(formik.values.identificationNumber)
          }
          maxLength={maxLength}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          isInvalid={
            formik.errors.identificationNumber &&
            formik.touched.identificationNumber
          }
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.identificationNumber}
        </Form.Control.Feedback>
      </InputGroup>
    </Form.Group>
  );
}

import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DATE_FORMAT = "dd/MM/yyyy";

export function InputDate({ startDate, setStartDate }) {
  return (
    <div className="d-flex justify-content-end mb-4">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form.Label className="ms-2 mb-0">Dia</Form.Label>
        <DatePicker
          selected={startDate}
          onChange={setStartDate}
          dateFormat={DATE_FORMAT}
          className="form-control"
        />
      </div>
    </div>
  );
}

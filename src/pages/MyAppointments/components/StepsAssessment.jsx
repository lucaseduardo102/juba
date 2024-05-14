import { Col, Form, Row } from "react-bootstrap";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

export function StepsAssessment({ currentEmotion, handleEmotion }) {
  return (
    <>
      <Form.Label className="mt-2">
        Conte-nos o seu nível de satisfação
      </Form.Label>
      <div className="form-control">
        <Row>
          <Col className="text-center">
            <button style={style.button} onClick={() => handleEmotion(0)}>
              <BsFillEmojiFrownFill
                style={style.icon}
                className={currentEmotion === 0 ? "text-danger" : ""}
              />
              <p
                style={style.textIcon}
                className={currentEmotion === 0 ? "text-danger" : ""}
              >
                Insatisfeito
              </p>
            </button>
          </Col>
          <Col className="text-center">
            <button style={style.button} onClick={() => handleEmotion(1)}>
              <BsFillEmojiSmileFill
                style={style.icon}
                className={currentEmotion === 1 ? "text-secondary" : ""}
              />
              <p
                style={style.textIcon}
                className={currentEmotion === 1 ? "text-secondary" : ""}
              >
                Satisfeito
              </p>
            </button>
          </Col>
          <Col className="text-center">
            <button style={style.button} onClick={() => handleEmotion(2)}>
              <BsFillEmojiHeartEyesFill
                style={style.icon}
                className={currentEmotion === 2 ? "text-success" : ""}
              />
              <p
                style={style.textIcon}
                className={currentEmotion === 2 ? "text-success" : ""}
              >
                Muito Satisfeito
              </p>
            </button>
          </Col>
        </Row>
      </div>
    </>
  );
}

const style = {
  icon: { fontSize: "1.6rem" },
  textIcon: { fontSize: "0.7rem", marginTop: "0.4rem", fontWeight: "bold" },
  button: { border: "none", background: "none", cursor: "pointer" },
};

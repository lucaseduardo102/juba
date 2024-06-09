import { Col, Form, Row } from "react-bootstrap";
import {
  BsFillEmojiFrownFill,
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
} from "react-icons/bs";

export function StepsAssessment({ currentEmotion, handleEmotion }) {
  const rating = {
    INSATISFEITO: "INSATISFEITO",
    SATISFEITO: "SATISFEITO",
    MUITO_SATISFEITO: "MUITO_SATISFEITO",
  };

  return (
    <>
      <Form.Label className="mt-2">
        Conte-nos o seu nível de satisfação
      </Form.Label>
      <div className="form-control">
        <Row>
          <Col className="text-center">
            <button
              style={style.button}
              onClick={() => handleEmotion(rating.INSATISFEITO)}
            >
              <BsFillEmojiFrownFill
                style={style.icon}
                className={
                  currentEmotion === rating.INSATISFEITO ? "text-danger" : ""
                }
              />
              <p
                style={style.textIcon}
                className={
                  currentEmotion === rating.INSATISFEITO ? "text-danger" : ""
                }
              >
                Insatisfeito
              </p>
            </button>
          </Col>
          <Col className="text-center">
            <button
              style={style.button}
              onClick={() => handleEmotion(rating.SATISFEITO)}
            >
              <BsFillEmojiSmileFill
                style={style.icon}
                className={
                  currentEmotion === rating.SATISFEITO ? "text-secondary" : ""
                }
              />
              <p
                style={style.textIcon}
                className={
                  currentEmotion === rating.SATISFEITO ? "text-secondary" : ""
                }
              >
                Satisfeito
              </p>
            </button>
          </Col>
          <Col className="text-center">
            <button
              style={style.button}
              onClick={() => handleEmotion(rating.MUITO_SATISFEITO)}
            >
              <BsFillEmojiHeartEyesFill
                style={style.icon}
                className={
                  currentEmotion === rating.MUITO_SATISFEITO
                    ? "text-success"
                    : ""
                }
              />
              <p
                style={style.textIcon}
                className={
                  currentEmotion === rating.MUITO_SATISFEITO
                    ? "text-success"
                    : ""
                }
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

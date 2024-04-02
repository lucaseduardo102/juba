import React from "react";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import {
  UserFormAssessment,
  ReviewFormAssessment,
  ThanksAssessment,
} from "../../components/index";
import { useForm } from "../../hooks/UseFormAssessment";
import { useState } from "react";
import StepsAssessment from "../../components/StepsAssessment";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

export const Assessment = () => {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserFormAssessment data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewFormAssessment data={data} updateFieldHandler={updateFieldHandler} />,
    <ThanksAssessment data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="assessment">
      <div className="header" style={{ marginTop: "120px" }}>
        <h2>Avalie nosso serviço:</h2>
        <p>
          Utilize o formulario abaixo para avaliar a prestação do serviço! Sua
          opinião é muito importante para aumentar a qualidade do nosso serviço.
        </p>
      </div>
      <div className="form-container">
        <StepsAssessment currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => changeStep(currentStep - 1)}
              >
                <GrFormPrevious />
                <span> Voltar </span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit" className="btn btn-primary">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button" className="btn btn-primary">
                <span>Enviar </span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Assessment;
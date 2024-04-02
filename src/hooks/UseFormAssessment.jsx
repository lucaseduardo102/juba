import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState (0);
    
    function changeStep(i, e) {
        if (e) e.preventDefault();

        if(i < 0 || i>=steps.length) return // vai somente até o array suporta, não deixa voltar mais do que o menor (array0) e não faz nada

        setCurrentStep(i) //passo que vai depois do click
    }

    return {
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 === steps.length ? true : false,
        isFirstStep: currentStep === 0 ? true : false,
    };
}
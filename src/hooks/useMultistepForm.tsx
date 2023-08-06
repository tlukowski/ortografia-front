import { ReactElement, useState } from "react";

export const useMultistepForm = (steps: ReactElement[]) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = () => {
        setCurrentStepIndex((i) => {
            if(i >= steps.length - 1) return i;            
            return i + 1
        });
    }   
    return{
        currentStepIndex,
        currentStep: steps[currentStepIndex],
        isLastStep: currentStepIndex === steps.length - 1,
        nextStep,
    }
}
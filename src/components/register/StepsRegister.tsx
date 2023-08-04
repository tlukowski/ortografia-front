import { useMultistepForm } from '@/hooks/useMultistepForm'
import React, { FormEvent } from 'react'
import PasswordForm from '../forms/PasswordForm';
import NameForm from '../forms/NameForm';
import {buttonVariants } from '../button';
import { Formik } from 'formik';
import EmailForm from '../forms/emailForm';

const StepsRegister = () => { 
  
    const { currentStep, nextStep, isLastStep } = useMultistepForm([
      <NameForm key={1} />,
      <EmailForm key={2} />,
      <PasswordForm key={3}/>,
    ]);
    const onSubmit = (e: FormEvent) => {
      e.preventDefault();
      nextStep();
    };
  return (
    <>
      <Formik
        initialValues={{}}
        onSubmit={onSubmit}
      >
        <>
          {currentStep}
          <div className="flex justify-center mt-4">
            {!isLastStep && (
              <button
                type="submit"
                className={buttonVariants()}
                onClick={nextStep}
              >
                Dalej
              </button>
            )}
            {isLastStep && (
              <button type="submit" className={buttonVariants()}>
                Zarejestruj się
              </button>
            )}
          </div>
        </>
      </Formik>
    </>
  );
}

export default StepsRegister
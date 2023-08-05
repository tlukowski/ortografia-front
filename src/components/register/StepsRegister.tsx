import { useMultistepForm } from '@/hooks/useMultistepForm'
import React, { FormEvent, useState } from 'react'
import PasswordForm from '../forms/PasswordForm';
import NameForm from '../forms/NameForm';
import {buttonVariants } from '../button';
import { Formik } from 'formik';
import EmailForm from '../forms/EmailForm';

type FormData = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

const INIT_DATA: FormData = {
  name: "",
  email: "",
  password: "",
  repeatPassword: "",
}

const StepsRegister = () => { 
    const [data, setData] = useState(INIT_DATA)
    const updateFields = (fields: Partial<FormData>) => {
      setData(prev => {
        return {...prev, ...fields}
      })
    }
    const { currentStep, nextStep, isLastStep } = useMultistepForm([
      <NameForm {...data} key={1} updateFields={updateFields} />,
      <EmailForm {...data} key={2} updateFields={updateFields} />,
      <PasswordForm {...data} key={3} updateFields={updateFields} />,
    ]);
    const onSubmit = (e: FormEvent , ) => {
      e.preventDefault();
      if(!isLastStep) return nextStep();
      alert('Zarejestrowano!');
      
    };
  return (
    <>
      <Formik initialValues={INIT_DATA} onSubmit={onSubmit}>
        <>
          {currentStep}
          <div className="flex justify-center mt-4">
            
              <button
                type="submit"
                className={buttonVariants()}
                onClick={nextStep}
              >
                Dalej
              </button>
                     
          </div>
        </>
      </Formik>
    </>
  );
}

export default StepsRegister
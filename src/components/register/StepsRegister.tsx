import { useMultistepForm } from "@/hooks/useMultistepForm";
import React, { Dispatch, SetStateAction, useState } from "react";

import { buttonVariants } from "../button";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import NameForm from "../forms/nameStep/NameForm";
import EmailForm from "../forms/emailStep/EmailForm";
import PasswordForm from "../forms/passwordStep/PasswordForm";
import nameFormStepSchema from "../forms/nameStep/NameFormStep.schema";
import {ValidationEmail} from "../forms/emailStep/EmailAdressStep.schema";
import { ValidationPassword } from "../forms/passwordStep/PasswordFormStep.schema";
import axios from "axios";
import { on } from "events";

type FormData = {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
};

const INIT_DATA: FormData = {
  username: "",
  email: "",
  password: "",
  passwordConfirm: "",
};

const StepsRegister = ({
  onSubmit,
}: {
  onSubmit: (name: string) => void;
}) => {
  // const [data, setData] = useState(INIT_DATA);
  const { currentStep, nextStep, isLastStep, currentStepIndex } =
    useMultistepForm([
      <NameForm key={1} />,
      <EmailForm key={2} />,
      <PasswordForm key={3} />,
    ]);

  const handleSubmit = async (values: FormData) => {
    if (!isLastStep) return nextStep();
    axios({
      method: "POST",
      url: `https://xyz-api2023.azurewebsites.net/api/users/sign`,
      data: values,
    }).then((res) => {
      if (res.data) {        
        onSubmit(res.data.user.username);
        window.localStorage.setItem("user", JSON.stringify(res.data.user));
      }
    });
    // alert(JSON.stringify(values, null, 2))
  };

  const getStepSchema = (currentStepIndex: number) => {
    console.log(currentStepIndex);
    switch (currentStepIndex) {
      case 0:
        return nameFormStepSchema;
      case 1:
        return ValidationEmail;
      case 2:
        return ValidationPassword;
    }
  };

  return (
    <>
      <Formik
        initialValues={INIT_DATA}
        onSubmit={handleSubmit}
        validationSchema={getStepSchema(currentStepIndex)}
      >
        {() => (
          <Form>
            {currentStep}
            <div className="flex justify-center mt-4">
              <button type="submit" className={buttonVariants()}>
                Dalej
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default StepsRegister;

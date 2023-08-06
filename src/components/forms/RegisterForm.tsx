"use client";
import React from "react";
import StepsRegister from "../register/StepsRegister";
import ThankYouForm from "./ThankYouForm";

const RegisterForm = () => {
  const [isCompleted, setIsCompleted] = React.useState(false);
  const [currrentName, setCurrentName] = React.useState("");
  const handleFormSubmit = (name: string) => {
    setIsCompleted(true);
    setCurrentName(name);
  }

  {
    return (
      <>
        {isCompleted ? (
          <ThankYouForm name={currrentName} />
        ) : (
          <StepsRegister onSubmit={handleFormSubmit} />
        )}
      </>
    );
  }
};

export default RegisterForm;

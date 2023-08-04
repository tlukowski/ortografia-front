import React from "react";
import { FormWrapper } from "../layouts/FormWrapper";
import { Field } from "formik";
function EmailForm() {
  return (
    <FormWrapper
      title="Stwórz profil"
      desc="Wybierz nazwę profilu lub wpisz swoje imię."
    >
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="email"
        name="email"
        placeholder="Twój adres email..."
      ></Field>
    </FormWrapper>
  );
}

export default EmailForm;

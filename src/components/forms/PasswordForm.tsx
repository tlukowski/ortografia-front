import { FormWrapper } from "../layouts/FormWrapper";
import { Formik, Field } from "formik";
import React from "react";
const PasswordForm = () => {
  return (
    <FormWrapper
      title="Wpisz swoje hasło"
      desc="Aby móc zalogować się do profilu, musisz podać hasło oraz je potwierdzić. Użyte hasło zostanie przypisane do twojego profilu"
    >
      {/* <input
        type="password"
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        placeholder="Wpisz hasło..."
      ></input>
      <input
        type="password"
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        placeholder="Powtórz hasło..."
      ></input> */}
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        name="password"
        placeholder="Twoje hasło..."
      />
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        name="repeatPassword"
        placeholder="Powtórz hasło..."
      />
    </FormWrapper>
  );
};

export default PasswordForm;

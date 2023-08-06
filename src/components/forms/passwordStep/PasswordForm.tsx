
import { FormWrapper } from "@/components/layouts/FormWrapper";
import { Formik, Field, ErrorMessage } from "formik";
import React from "react";



const PasswordForm = () => {
  return (
    <FormWrapper
      title="Wpisz swoje hasło"
      desc="Aby móc zalogować się do profilu, musisz podać hasło oraz je potwierdzić. Użyte hasło zostanie przypisane do twojego profilu"
    >
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        required
        name="password"
        placeholder="Twoje hasło..."
      />
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        required
        name="repeatPassword"
        placeholder="Powtórz hasło..."
      />
      <ErrorMessage
        name="password" // Specify the field for which you want to display errors
        component="div" // Set the component for the error message
        className="text-red-500" // Optional: Add custom styling to the error message
      />
      <ErrorMessage
        name="repeatPassword" // Specify the field for which you want to display errors
        component="div" // Set the component for the error message
        className="text-red-500" // Optional: Add custom styling to the error message
      />
    </FormWrapper>
  );
};

export default PasswordForm;

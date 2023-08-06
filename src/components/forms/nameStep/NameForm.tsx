import React from 'react'
import { Field, ErrorMessage } from 'formik';
import { FormWrapper } from '@/components/layouts/FormWrapper';

function NameForm() {
  return (
    <FormWrapper
      title="Stwórz profil"
      desc="Wybierz nazwę profilu lub wpisz swoje imię."
    >
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="text"
        name="username"
        required
        placeholder="Twoje imię..."
      />
      <ErrorMessage
        name="username" // Specify the field for which you want to display errors
        component="div" // Set the component for the error message
        className="text-red-500" // Optional: Add custom styling to the error message
      />
    </FormWrapper>
  );
}

export default NameForm
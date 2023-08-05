import React from "react";
import { FormWrapper } from "../layouts/FormWrapper";
import { Field } from "formik";

type UserData = {
  email: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

function EmailForm({email, updateFields }: UserFormProps) {
  return (
    <FormWrapper
      title="Stwórz profil"
      desc="Wybierz nazwę profilu lub wpisz swoje imię."
    > 
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="email"
        name={email}
        onChange={e => updateFields({ email: e.target.value })}
        placeholder="Twój adres email..."
      ></Field>
    </FormWrapper>
  );
}

export default EmailForm;

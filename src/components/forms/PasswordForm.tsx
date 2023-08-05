import { FormWrapper } from "../layouts/FormWrapper";
import { Formik, Field } from "formik";
import React from "react";

type UserData = {
  password: string;
  repeatPassword: string;
};

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};


const PasswordForm = ({
  password,
  repeatPassword,
  updateFields,
}: UserFormProps) => {
  return (
    <FormWrapper
      title="Wpisz swoje hasło"
      desc="Aby móc zalogować się do profilu, musisz podać hasło oraz je potwierdzić. Użyte hasło zostanie przypisane do twojego profilu"
    >
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        name={password}
        onChange={(e) => updateFields({ password: e.target.value })}
        placeholder="Twoje hasło..."
      />
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="password"
        name={repeatPassword}
        onChange={(e) => updateFields({ repeatPassword: e.target.value })}
        placeholder="Powtórz hasło..."
      />
    </FormWrapper>
  );
};

export default PasswordForm;

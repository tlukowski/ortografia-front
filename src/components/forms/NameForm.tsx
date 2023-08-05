import React from 'react'
import { FormWrapper } from '../layouts/FormWrapper';
import { Field } from 'formik';

type UserData = {
  name: string
}

type UserFormProps = UserData &{
  updateFields: (fields: Partial<UserData>) => void
}

function NameForm({name, updateFields} : UserFormProps) {
  return (
    <FormWrapper
      title="Stwórz profil"
      desc="Wybierz nazwę profilu lub wpisz swoje imię."
    >
      <Field
        className="bg-gray-50 border border-gray-300 rounded-3xl text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
        type="text"
        name="name"
        value={name}
        onChange={e => updateFields({name: e.target.value})}
        required
        placeholder="Twoje imię..."
      ></Field>
    </FormWrapper>
  );
}

export default NameForm
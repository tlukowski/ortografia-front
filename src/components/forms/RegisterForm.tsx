"use client";

import { Formik, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, buttonVariants } from "@/components/button";
import axios from "axios";
import { useRouter } from "next/navigation";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email jest wymagany")
    .email("Nieprawidłowy format email"),
  password: Yup.string()
    .required("Hasło jest wymagane")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
});
const RegisterForm = () => {
  {
    const router = useRouter();
    const handleFormSubmit = (values: any) => {
      axios({
        method: "POST",
        url: "http://127.0.0.1:3002/api/users/register",
        data: values,
      }).then((res) => {
        if (res.data.token) {
          window.localStorage.setItem(
            "user",
            JSON.stringify(res.data.data.user)
          );
          // window.localStorage.setItem("token", res.data.token);
          router.push("/profil");
        }
      });
    };
    return (
      <>
        {/* Wrapping form inside formik tag and passing our schema to validationSchema prop */}
        <Formik
          initialValues={{
            email: "",
            password: "",
            repeatPassword: "",
            name: "",
            surname: "",
            phone: "",
            address: "",
            city: "",
            postalCode: "",
          }}
          validationSchema={schema}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <div className="login mt-8">
              <div className="form">
                {/* Passing handleSubmit parameter tohtml form onSubmit property */}
                <form onSubmit={handleSubmit}>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <Field
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    placeholder="Wpisz e-mail..."
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus-visible:outline-none block w-full p-2.5 "
                    id="email"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error text-xs text-red-700 mt-1">
                    {errors.email && touched.email}
                  </p>
                  {/* Our input html with passing formik parameters like handleChange, values, handleBlur to input properties */}
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    placeholder="Wpisz hasło..."
                    className="mt-4 bg-gray-50 border border-gray-300 text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
                  />
                  <p className="error text-xs text-red-700 mt-1">
                    {errors.password && touched.password}
                  </p>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.repeatPassword}
                    placeholder="Powtórz hasło..."
                    className="mt-4 bg-gray-50 border border-gray-300 text-gray-500 text-sm  block w-full p-2.5 focus-visible:outline-none"
                  />
                  {/* If validation is not passed show errors */}
                  <p className="error text-xs text-red-700 mt-1">
                    {errors.repeatPassword && touched.repeatPassword}
                  </p>
                  {/* Click on submit button to submit the form */}
                  <div className="mt-4 flex justify-center">
                    <Button type="submit" className={buttonVariants()}>
                      Zarejestruj się
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </Formik>
      </>
    );
  }
};

export default RegisterForm;

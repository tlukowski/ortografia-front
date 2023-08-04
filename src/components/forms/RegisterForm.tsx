"use client";

import { Formik, Field } from "formik";
import React from "react";
import * as Yup from "yup";
import { Button, buttonVariants } from "@/components/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import StepsRegister from "../register/StepsRegister";
import ThankYouForm from "./ThankYouForm";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("Email jest wymagany")
    .email("Nieprawidłowy format email"),
  password: Yup.string().required("Hasło jest wymagane"),
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
        {/* <ThankYouForm /> */}
        <StepsRegister />
      </>
    );
  }
};

export default RegisterForm;

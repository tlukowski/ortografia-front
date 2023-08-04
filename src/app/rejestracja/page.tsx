import Image from "next/image";

import { Button, buttonVariants } from "@/components/button";
import { Formik } from "formik";
import RegisterForm from "@/components/forms/RegisterForm";
export default function Register() {
  return (
    <>
      <div className="flex justify-center">
        <Image width={300} height={300} src="/logo.svg" alt="Logo"></Image>
      </div>
      <RegisterForm />
    </>
  );
}

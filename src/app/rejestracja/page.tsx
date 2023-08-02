import Image from "next/image";

import { Button, buttonVariants } from "@/components/button";
import { Formik } from "formik";
import RegisterForm from "@/components/forms/RegisterForm";
export default function Register() {
  return (
    <div className="">
      <div className="max-w-sm bg-blue-500 flex justify-center items-center min-h-screen mx-auto bg-gradient-to-br from-blue-400 via-blue-600 to-blue-900 flex-col px-6 text-center text-white">
        <Image width={300} height={300} src="/logo.svg" alt="Logo"></Image>
        <RegisterForm />
      </div>
    </div>
  );
}

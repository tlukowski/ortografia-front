"use client";

import Image from "next/image";
import Logo from "../../app/logo.svg";
import LoginForm from "@/components/forms/LoginForm";
export default function Login() {
  return (
    <div className="">
      <div className="">
        <Image width={300} height={300} src={Logo} alt="Logo"></Image>
        <LoginForm />
      </div>
    </div>
  );
}

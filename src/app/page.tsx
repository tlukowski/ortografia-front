"use client";
import Image from "next/image";
import Logo from "../app/logo.svg";
import "../app/globals.css";
import { Button, buttonVariants } from "@/components/button";
import Kids from "../app/kids.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader } from "@/components/ui/Loader";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsLogged(true);
      router.push("/dashboard");
      setIsLoading(false);
    }
    setIsLoading(false);
  }, [router]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {!isLogged && (
            <div>
              <Image width={300} height={300} src={Logo} alt="Logo"></Image>
              <div className="mt-6 max-w-[300px] text-lg text-white">
                Ćwicz i poprawiaj swoją ortografię razem z nami!
              </div>
              <div className="mt-8 flex justify-center flex-wrap">
                <Button link="/rejestracja">Rozpocznij</Button>
                <Button
                  className={`${buttonVariants({ variant: "secondary" })} mt-4`}
                  link="/logowanie"
                >
                  Mam już konto
                </Button>
              </div>
              <div className="mt-12">
                <Image src={Kids} alt="Kids"></Image>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

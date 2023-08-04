import { FormWrapperProps } from "@/types/types";


export function FormWrapper ( {title,desc, children} : FormWrapperProps ) {
    return (
      <>
        <h2 className="text-3xl text-white mt-12">{title}</h2>
        <div className="text-lg text-white font-light mt-2">{desc}</div>
        <div className="mt-4 flex flex-col gap-3">{children}</div>
      </>
    );
}
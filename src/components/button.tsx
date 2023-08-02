import { VariantProps, cva } from "class-variance-authority";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  link?: Url;
}

const buttonVariants = cva(
  "w-[288px] h-[47px] flex items-center justify-center text-white shadow-md",
  {
    variants: {
      variant: {
        default: "bg-[#E21883]",
        secondary: "bg-[#EAB115]",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({ children, link, className, variant, size }: ButtonProps) => {
  return link ? (
    <Link className={buttonVariants({ variant, size, className })} href={link}>
      {children}
    </Link>
  ) : (
    <button className={buttonVariants({ variant, size, className })}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };

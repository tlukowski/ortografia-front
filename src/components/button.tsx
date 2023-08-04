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
  "w-[175px] h-[44px] flex items-center justify-center shadow-md",
  {
    variants: {
      variant: {
        default: "bg-white",
        secondary: "bg-[#EAB115]",
      },
      size: {
        default: "",
        sm: "",
        lg: "",
      },
      text: {
        default: "text-[#6E88F7] font-bold rounded-3xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      text: "default",
    },
  }
);

const Button = ({ children, link, className, variant, size}: ButtonProps) => {
  return link ? (
    <Link className={buttonVariants({ variant, size, className })} href={link}>
      {children}
    </Link>
  ) : (
    <button type="button" className={buttonVariants({ variant, size, className })}>
      {children}
    </button>
  );
};

export { Button, buttonVariants };

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "amber" | "outline" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantClass: Record<Variant, string> = {
  primary: "btn-primary",
  amber: "btn-amber",
  outline: "btn-outline",
  ghost: "btn-ghost",
};

type LinkButtonProps = CommonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export function LinkButton({ href, children, variant = "primary", className = "", target, rel }: LinkButtonProps) {
  return (
    <Link href={href} target={target} rel={rel} className={`${variantClass[variant]} ${className}`}>
      {children}
    </Link>
  );
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, variant = "primary", className = "", ...rest }: ButtonProps) {
  return (
    <button className={`${variantClass[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

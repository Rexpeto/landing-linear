import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva("inline-flex rounded-full text-white", {
  variants: {
    variants: {
      primary: "bg-btn-primary hover:text-shadow hover:box-shadow",
      gradient: "bg-primary-gradient",
    },
    size: {
      small: "text-base px-3 py-1.5",
      medium: "text-sm px-4 py-1.5",
      large: "text-lg px-6 py-2",
    },
    defaultVariants: {
      variants: "primary",
      size: "medium",
    },
  },
});

const Button = ({ children, href, variants, size }: Props) => {
  return (
    <Link className={buttonClasses({ variants, size })} href={href}>
      {children}
    </Link>
  );
};

export default Button;

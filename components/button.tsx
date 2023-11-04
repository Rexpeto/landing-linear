import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva(
  "inline-flex items-center gap-2 rounded-full text-white",
  {
    variants: {
      variants: {
        primary:
          "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] duration-150",
        secondary:
          "text-off-white bg-white bg-opacity-10 hover:bg-opacity-20 border-border-white backdrop-filter-[12px] transition duration-150",
        gradient: "bg-primary-gradient",
      },
      size: {
        small: "text-xs px-3 py-1.5",
        medium: "text-sm px-4 py-1.5",
        large: "text-md px-5 py-2",
      },
      defaultVariants: {
        variants: "primary",
        size: "medium",
      },
    },
  },
);

const Button = ({ children, href, variants, size }: Props) => {
  return (
    <Link className={buttonClasses({ variants, size })} href={href}>
      {children}
    </Link>
  );
};

export default Button;

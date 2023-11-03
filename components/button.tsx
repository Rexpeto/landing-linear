import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";

interface Props extends VariantProps<typeof buttonClasses> {
  children: React.ReactNode;
  href: string;
}

const buttonClasses = cva(
  "inline-flex rounded-full text-white transition duration-150",
  {
    variants: {
      variants: {
        primary: "bg-btn-primary hover:text-shadow hover:box-shadow",
        secondary:
          "flex items-center gap-2 text-off-white bg-white bg-opacity-10 hover:bg-opacity-20 border-border-white backdrop-filter-[12px]",
        gradient: "bg-primary-gradient",
      },
      size: {
        small: "text-xs px-3 py-1.5",
        medium: "text-sm px-4 py-1.5",
        large: "text-lg px-6 py-2",
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

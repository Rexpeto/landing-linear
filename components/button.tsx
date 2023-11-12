import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";
import { AnchorHTMLAttributes } from "react";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  hrfer: string;
}

interface ButtonAsButtonProps extends ButtonBaseProps {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  "inline-flex items-center gap-2 rounded-full text-white",
  {
    variants: {
      variants: {
        primary: [
          "bg-primary-gradient hover:text-shadow hover:shadow-primary transition-[shadow, text-shadow] duration-150",
          "[&_.highlight]:ml-1",
        ],
        secondary: [
          "text-off-white bg-white bg-opacity-10 hover:bg-opacity-20 border-border-white backdrop-filter-[12px] transition duration-150",
          "[&_.highlight]:bg-transparent-white [&_.highlight]:rounded-full [&_.highlight]:px-2 [&_.highlight:last-child]:ml-1 [&_.highlight:last-child]:mr-1 [&_.highlight:first-child]:-ml-2 [&_.highlight:first-child]:mr-2",
        ],
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

const Button = ({ children, href, variants, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variants, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes} href={`${href}`}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <span className={classNames("highlight", className)}>{children}</span>;

export default Button;

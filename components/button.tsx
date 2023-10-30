import Link from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
}

const Button = ({ children, href }: Props) => {
  return <Link href={href}>{children}</Link>;
};

export default Button;

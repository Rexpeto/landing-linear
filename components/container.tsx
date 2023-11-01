import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={classNames("max-w-[120rem] mx-auto px-4", className)}>
      {children}
    </div>
  );
};

export default Container;

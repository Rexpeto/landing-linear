import classNames from "classnames";

interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementProps) => {
  return (
    <h1
      className={classNames(
        "font-medium text-5xl md:text-7xl my-6 text-gradient",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children, className }: HeroElementProps) => {
  return <p className={classNames("text-lg mb-12", className)}>{children}</p>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;

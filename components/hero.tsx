interface HeroProps {
  children: React.ReactNode;
}

interface HeoElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeoElementProps) => {
  return (
    <h1 className="font-medium text-5xl md:text-7xl my-6 text-gradient">
      {children}
    </h1>
  );
};

export const HeroSubtitle = ({ children }: HeoElementProps) => {
  return <p className="text-lg mb-12">{children}</p>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;

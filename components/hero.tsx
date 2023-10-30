interface HeroProps {
  children: React.ReactNode;
}

interface HeoElementProps {
  children: React.ReactNode;
}

export const HeroTitle = ({ children }: HeoElementProps) => {
  return <h1 className="text-5xl my-6">{children}</h1>;
};

export const HeroSubtitle = ({ children }: HeoElementProps) => {
  return <p className="text-lg mb-12">{children}</p>;
};

const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};

export default Hero;

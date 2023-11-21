interface Props {
  title: string;
  children: React.ReactNode;
}

export const Features = ({ title, children }: Props) => {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

const MainFeatures = () => {
  return <div>Big images</div>;
};

const FeatureGrid = () => {
  return <div>Feature Grid</div>;
};

const FeatureCards = () => {
  return <div>Feature Cards</div>;
};

Features.Main = MainFeatures;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;

import { Container } from "@/components";
import {
  FeatureCardProps,
  FeatureGridProps,
  FeaturesProps,
  MainFeaturesProps,
} from "@/models";
import Image from "next/image";

export const Features = ({ children }: FeaturesProps) => {
  return (
    <Container className="flex flex-col items-center py-48">
      {children}
    </Container>
  );
};

export const FeaturesTitle = ({ children }: FeaturesProps) => {
  return (
    <h2 className="text-gradient text-center text-4xl md:text-[80px]">
      {children}
    </h2>
  );
};

const MainFeatures = ({ text, image }: MainFeaturesProps) => {
  return (
    <div>
      <div className="relative w-[78rem] max-w-[90%]">
        <Image
          src={image}
          alt="image"
          width={1000}
          height={1000}
          className="h-auto w-full"
        />
        <p className="text-[32px] mt-16 color-white text-center w-[90%] mx-auto">
          {text}
        </p>
      </div>
    </div>
  );
};

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return <div>Feature Grid</div>;
};

const FeatureCards = ({ features }: FeatureCardProps) => {
  return <div>Feature Cards</div>;
};

Features.Main = MainFeatures;
Features.Title = FeaturesTitle;
Features.Grid = FeatureGrid;
Features.Cards = FeatureCards;

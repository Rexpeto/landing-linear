import { Container } from "@/components";
import {
  FeatureCardProps,
  FeatureGridProps,
  FeaturesProps,
  MainFeaturesProps,
} from "@/models";
import classNames from "classnames";
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
    <h2 className="text-gradient text-center text-4xl mb-11  md:text-[80px]">
      {children}
    </h2>
  );
};

const MainFeatures = ({
  image,
  text,
  title,
  imageSize = "small",
}: MainFeaturesProps) => {
  return (
    <>
      <div className="relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)]">
        <Container
          className={classNames(
            "max-w-[90%] text-center",
            imageSize === "small" ? "w-[78rem]" : "w-[102.4rem]",
          )}
        >
          <h2 className="text-gradient mb-11 translate-y-[40%] pt-[12rem] text-center text-6xl [transition:transform_1000ms_cubic-bezier(0.3,_1.17,_0.55,_0.99)_0s] md:pt-0 md:text-8xl [.is-visible_&]:translate-y-0">
            {title}
          </h2>
          <div className="relative z-10 rounded-[14px] backdrop-blur-[6px] before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0)_120%)] before:p-[1px] before:[mask:linear-gradient(black,_black)_content-box_content-box,_linear-gradient(black,_black)] before:[mask-composite:xor] after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:bg-[rgba(255,_255,_255,_0.15)] after:[mask:linear-gradient(black,transparent)]">
            <img src={image} className="h-auto w-full" />
          </div>
        </Container>
      </div>
      <Container className="w-[78rem] max-w-[90%] text-center">
        <p className="mx-auto my-16 text-2xl leading-tight text-white md:w-[80%] md:text-4xl">
          {text}
        </p>
        <hr className="mb-[7.2rem] h-[1px] border-none bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.1)_50%,transparent)]" />
      </Container>
    </>
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

import { FeatureCardProps } from "@/models";
import classNames from "classnames";
import Image from "next/image";

const FeatureCards = ({ features }: FeatureCardProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {features.map(({ title, text, image, imageClassName }) => (
        <div
          key={title}
          className="relative py-6 px-8 before:absolute before:inset-0 border border-transparent-white bg-[radial-gradient(ellipse_at_center,rgba(var(--feature-color),0.15),transparent)] before:bg-glass-gradient rounded-[2.4rem] md:rounded-[4.8rem] aspect-[1.3/1] p-8 overflow-hidden"
        >
          <h3 className="text-xl text-white">{title}</h3>
          <p className="text-primary-text text-sm max-w-lg">{text}</p>
          <Image
            className={classNames("absolute", imageClassName)}
            src={image}
            alt={title}
            width={1024}
            height={1024}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;

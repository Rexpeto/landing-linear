export interface FeaturesProps {
  children: React.ReactNode;
  color: string;
  colorDark: string;
}

export interface MainFeaturesProps {
  text: string;
  image: string;
  title: React.ReactNode;
  imageSize?: string;
}

export interface FeatureGrid {
  title: string;
  text: string;
  icon: React.FC;
}

export type FeatureGridProps = {
  features: FeatureGrid[];
};

export type FeatureCardProps = {
  features: {
    title: string;
    text: string;
    image: string;
    imageClassName: string;
  }[];
};

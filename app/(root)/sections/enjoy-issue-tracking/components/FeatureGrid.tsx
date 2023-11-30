import { FeatureGrid, FeatureGridProps } from "@/models";

const FeatureGrid = ({ features }: FeatureGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-9 mb-16 text-sm md:text-md place-items-center text-primary-text w-full">
      {features.map(({ title, text, icon: Icon }: FeatureGrid) => (
        <div
          key={title}
          className="max-w-[25.6rem] [&_svg]:inline [&_svg]:fill-white md:[&_svg]:mr-2 [&_svg]:mb-[4px] md:[&_svg]:mb-[2px]"
        >
          <Icon />
          <span className="block md:inline text-white mr-2">{title}</span>
          {text}
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;

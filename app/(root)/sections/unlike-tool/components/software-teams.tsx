import { Button, GetIcon } from "@/components";
import { LightIllustration } from ".";

const SoftwareTeams = () => {
  return (
    <div className="relative overflow-hidden shrink-0 snap-center flex flex-col items-center justify-end bg-glass-gradient text-center w-full md:basis-[calc(33.33%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border group">
      <div className="absolute top-[-10rem] w-[123%] pointer-events-none">
        <LightIllustration />
      </div>
      <p className="text-lg md:text-2xl mb-4">
        Designed for modern software teams
      </p>

      <p className="text-primary-text text-sm md:text-md">
        Comes with built-in workflows that create focus and routine.
      </p>
      <Button
        className="absolute bottom-80 translate-y-[30%] opacity-0 scale-[0.8] group-hover:opacity-100 group-hover:scale-100 group-hover:transform-none transition-[transform, opacity]"
        variants="secondary"
        size="medium"
        href="/"
      >
        Product principles
        <GetIcon icon="IoIosArrowForward" />
      </Button>
    </div>
  );
};

export default SoftwareTeams;

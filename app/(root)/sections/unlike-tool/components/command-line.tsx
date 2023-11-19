import { CommandMenu } from ".";

const CommandLine = () => {
  return (
    <div className="relative flex min-h-[45rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:py-12">
      <CommandMenu />

      <div className="md:[.opened+&]:opacity-0 transition">
        <p className="text-lg md:text-2xl mb-4">Meet your command line</p>

        <p className="text-primary-text text-sm md:text-md">
          Complete any action in seconds with the global command menu.
        </p>
      </div>
    </div>
  );
};

export default CommandLine;

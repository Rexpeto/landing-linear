import { ZapIllustration } from ".";

const Breathtakingly = () => {
  return (
    <div className="relative flex flex-col justify-end bg-glass-gradient text-center basis-[calc(33.33%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
      <div className="absolute mask-linear-faded top-[-6.2rem] left-0 [&_svg]:max-w-full [&_svg]:h-auto">
        <ZapIllustration />
      </div>

      <p className="text-lg md:text-2xl mb-4">Breathtakingly fast</p>

      <p className="text-primary-text text-sm md:text-md">
        Built for speed with 50ms interactions and real-time sync.
      </p>
    </div>
  );
};

export default Breathtakingly;

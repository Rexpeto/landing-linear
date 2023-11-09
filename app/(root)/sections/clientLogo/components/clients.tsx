import {
  AlanLogo,
  ArcLogo,
  CashAppLogo,
  DescriptLogo,
  LoomLogo,
  MercuryLogo,
  OpenSeaLogo,
  PitchLogo,
  RampLogo,
  RaycastLogo,
  RetoolLogo,
  VercelLogo,
} from "@/components/logos";

const Clients = () => {
  return (
    <>
      <p className="mb-12 text-center text-lg text-white md:text-xl">
        <span className="text-gray-400">
          Powering the world's best product teams.
        </span>
        <br className="hidden md:block" /> From next-gen startups to established
        brands
      </p>

      <div className="flex justify-around [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.5%-20px)] flex-wrap gap-x-6 gap-y-8">
        <RampLogo />
        <LoomLogo />
        <VercelLogo />
        <DescriptLogo />
        <CashAppLogo />
        <RaycastLogo />
        <MercuryLogo className="hidden md:block" />
        <RetoolLogo className="hidden md:block" />
        <AlanLogo className="hidden md:block" />
        <ArcLogo className="hidden md:block" />
        <OpenSeaLogo className="hidden md:block" />
        <PitchLogo className="hidden md:block" />
      </div>
    </>
  );
};

export default Clients;

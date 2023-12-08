import {
  SectionBuild,
  SectionClientLogo,
  SectionHero,
  SectionTracking,
  SectionUnlikeTool,
} from "./sections";

const Home = () => {
  return (
    <>
      <SectionHero />
      <SectionClientLogo />
      <SectionUnlikeTool />
      <SectionTracking />
      <SectionBuild />
    </>
  );
};

export default Home;

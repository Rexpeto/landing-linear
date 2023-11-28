import {
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
    </>
  );
};

export default Home;

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
      <div className="my-10">
        <SectionTracking />
      </div>
    </>
  );
};

export default Home;

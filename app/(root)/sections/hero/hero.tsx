import { Button, Container, GetIcon } from "@/components";
import { Hero, HeroImages, HeroSubtitle, HeroTitle } from "./components";

const SectionHero = () => {
  return (
    <Container className="pt-[6.2rem]">
      <Hero>
        <Button
          href="/"
          variants="secondary"
          size="small"
          className="animate-fade-in"
        >
          Introducing Vypers Ask
          <GetIcon icon="IoIosArrowForward" />
        </Button>
        <HeroTitle className="animate-fade-in [--animation-timing:200ms] opacity-0 translate-y-[-1rem]">
          Vypers is a better way <br className="hidden lg:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle className="animate-fade-in [--animation-timing:400ms] translate-y-[-1rem] opacity-0">
          Meet the new standard for modern software development.
          <br className="hidden lg:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Button
          href="/"
          variants="primary"
          size="large"
          className="animate-fade-in [--animation-timing:600ms] translate-y-[-1rem] opacity-0"
        >
          Get Started <GetIcon icon="IoIosArrowForward" />
        </Button>

        <HeroImages />
      </Hero>
    </Container>
  );
};

export default SectionHero;

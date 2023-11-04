import {
  Button,
  Container,
  GetIcon,
  Hero,
  HeroSubtitle,
  HeroTitle,
} from "@/components";
import Image from "next/image";

const Home = () => {
  return (
    <Container className="pt-[6.2rem]">
      <Hero>
        <Button
          href="/"
          variants="secondary"
          size="small"
          className="animate-fade-in"
        >
          Introducing Linear Ask
          <GetIcon icon="IoIosArrowForward" />
        </Button>
        <HeroTitle className="animate-fade-in [--animation-timing:200ms] opacity-0 translate-y-[-1rem]">
          Linear is a better way <br className="hidden lg:block" /> to build
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
        <Image
          className="w-full rounded-lg pt-48"
          src={"/hero.webp"}
          alt="hero image"
          width={1200}
          height={600}
        />
      </Hero>
    </Container>
  );
};

export default Home;

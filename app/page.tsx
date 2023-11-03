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
        <Button href="/" variants="secondary" size="small">
          Introducing Linear Ask
          <GetIcon icon="IoIosArrowForward" />
        </Button>
        <HeroTitle>
          Linear is a better way <br className="hidden lg:block" /> to build
          products
        </HeroTitle>
        <HeroSubtitle>
          Meet the new standard for modern software development.
          <br className="hidden lg:block" /> Streamline issues, sprints, and
          product roadmaps.
        </HeroSubtitle>
        <Image
          className="w-full rounded-lg"
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

import { Clients, Sunrise } from "./components";
import { Container } from "@/components";

const SectionClientLogo = () => {
  return (
    <section className="pt-48">
      <Container>
        <Clients />
        <Sunrise />
      </Container>
    </section>
  );
};

export default SectionClientLogo;

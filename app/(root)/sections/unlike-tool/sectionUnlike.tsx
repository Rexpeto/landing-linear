import { Container } from "@/components";
import {
  Breathtakingly,
  CommandLine,
  ShortcutsKeys,
  SoftwareTeams,
} from "./components";

const SectionUnlike = () => {
  return (
    <section>
      <Container>
        <div className="text-white text-center">
          <h2 className="mb-4 text-2xl md:mb-2 md:text-5xl">
            Unlike any tool <br className="hidden md:block" /> you’ve used
            before
          </h2>
          <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text">
            Designed to the last pixel and engineered with unforgiving
            precision, Linear combines UI elegance with world-class performance.
          </p>
        </div>
        <div className="h-[46rem] overflow-hidden md:h-auto">
          <div className="flex snap-x snap-mandatory md:flex-wrap overflow-x-auto overflow-hidden gap-6">
            <ShortcutsKeys />

            <Breathtakingly />

            <SoftwareTeams />

            <CommandLine />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionUnlike;

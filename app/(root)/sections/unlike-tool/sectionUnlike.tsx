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
        <div className="text-white">
          <div className="flex flex-wrap gap-6">
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

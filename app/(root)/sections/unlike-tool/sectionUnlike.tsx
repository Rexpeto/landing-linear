import { Container } from "@/components";

const SectionUnlike = () => {
  return (
    <section>
      <Container>
        <div className="text-white">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl mb-4 md:mb-7">
              Unlike any tool <br className="hidden md:block" /> you've used
              before
            </h2>
            <p className="text-primary-text text-lg max-w-[68rem] mx-auto mb-4">
              Designed to the last pixel and engineered with unforgiving
              precision, Linear combines UI elegance with world-class
              performance.
            </p>
          </div>

          <div className="flex flex-wrap gap-6">
            <div className="bg-glass-gradient basis-[calc(66.66%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
              build
            </div>
            <div className="bg-glass-gradient basis-[calc(33.33%-12px)] rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
              Breathing
            </div>
            <div className="bg-glass-gradient rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
              Designed
            </div>
            <div className="bg-glass-gradient rounded-[4.8rem] p-8 md:p-14 border-transparent-white border">
              Meet
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SectionUnlike;

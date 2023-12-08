import { FeatureGrid, FeatureMain } from "@/components";
import Features from "@/components/features";
import { DataGrid } from "./data";

const BuildMomentum = () => {
  return (
    <Features color="40,87,255" colorDark="48,58,117">
      <FeatureMain
        title={
          <>
            Build momentum
            <br />
            with Cycles
          </>
        }
        image="/cycles.webp"
        imageSize="large"
        text="Cycles focus your team on what work should happen next. A healthy routine to maintain velocity and make meaningful progress."
      />

      <FeatureGrid features={DataGrid} />
    </Features>
  );
};

export default BuildMomentum;

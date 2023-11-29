import { FeaturesDataCards, FeaturesDataGrid } from "@/models";
import { FeatureCards, FeatureGrid, FeatureMain, Features } from "./components";

const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <FeatureMain
        title={
          <>
            Issue tracking
            <br />
            you&apos;ll enjoy using
          </>
        }
        image="/issues.webp"
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
      />
      <FeatureGrid features={FeaturesDataGrid} />
      <FeatureCards features={FeaturesDataCards} />
    </Features>
  );
};

export default EnjoyIssueTracking;

import { FeaturesDataCards, FeaturesDataGrid } from "@/models";
import { Features } from "./components";

const EnjoyIssueTracking = () => {
  return (
    <Features color="194,97,254" colorDark="53,42,79">
      <Features.Main
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
      <Features.Grid features={FeaturesDataGrid} />
      <Features.Cards features={FeaturesDataCards} />
    </Features>
  );
};

export default EnjoyIssueTracking;

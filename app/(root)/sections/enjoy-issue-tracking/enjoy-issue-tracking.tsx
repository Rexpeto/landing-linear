import { FeaturesDataCards, FeaturesDataGrid } from "@/models";
import { Features } from "./components";

const EnjoyIssueTracking = () => {
  return (
    <Features>
      <Features.Title>
        Issue Tracking <br /> you&apos;ll enjoy using
      </Features.Title>

      <Features.Main
        image="/issues.webp"
        text="Create tasks in seconds, discuss issues in context, and breeze through your work in views tailored to you and your team."
      />
      <Features.Grid features={FeaturesDataGrid} />
      <Features.Cards features={FeaturesDataCards} />
    </Features>
  );
};

export default EnjoyIssueTracking;

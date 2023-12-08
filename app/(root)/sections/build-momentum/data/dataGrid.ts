import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "@/components/icons";

export const DataGrid = [
  {
    icon: ParentSubIcon,
    title: "Automatic tracking.",
    text: "Any started issues are added to the current cycle.",
  },
  {
    icon: AutomatedBacklogIcon,
    title: "Scheduled.",
    text: "Unfinished work rolls over to the next cycle automatically.",
  },
  {
    icon: WorkflowsIcon,
    title: "Fully configurable.",
    text: "Define start date, end date, duration, and more.",
  },
  {
    icon: CustomViewsIcon,
    title: "Predict delays.",
    text: "Get warnings for at-risk cycles.",
  },
  {
    icon: DiscussionIcon,
    title: "Scope creep.",
    text: "Understand which issues are added mid-cycle.",
  },
  {
    icon: IssuesIcon,
    title: "Be prepared.",
    text: "Schedule work in advance with upcoming cycles.",
  },
];

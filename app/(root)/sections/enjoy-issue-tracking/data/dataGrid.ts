import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "@/components/icons";

export const FeaturesDataGrid = [
  {
    title: "Parent and sub-issues.",
    text: "Break larger tasks into smaller issues.",
    icon: ParentSubIcon,
  },
  {
    title: "Automated backlog.",
    text: "Linear will auto-close and auto-archive issues.",
    icon: AutomatedBacklogIcon,
  },
  {
    title: "Custom workflows.",
    text: "Define unique issue states for each team.",
    icon: WorkflowsIcon,
  },
  {
    title: "Filters and custom views.",
    text: "See only what’s relevant for you.",
    icon: CustomViewsIcon,
  },
  {
    title: "Discussion.",
    text: "Collaborate on issues without losing context.",
    icon: DiscussionIcon,
  },
  {
    title: "Issue templates.",
    text: "Guide your team to write effective issues.",
    icon: IssuesIcon,
  },
];

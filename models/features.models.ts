import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "@/app/(root)/sections/enjoy-issue-tracking/icons";

export interface FeaturesProps {
  children: React.ReactNode;
}

export interface MainFeaturesProps {
  text: string;
  image: string;
}

export type FeatureGridProps = {
  features: {
    title: string;
    text: string;
    icon: React.FC;
  }[];
};

export type FeatureCardProps = {
  features: {
    title: string;
    text: string;
    image: string;
  }[];
};

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

export const FeaturesDataCards = [
  {
    title: "List and board",
    text: "Switch between list and board layout to view work from any angle.",
    image: "/card-board.webp",
  },
  {
    title: "Make it yours",
    text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
    image: "/card-views.webp",
  },
];

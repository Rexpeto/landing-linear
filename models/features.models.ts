import {
  AutomatedBacklogIcon,
  CustomViewsIcon,
  DiscussionIcon,
  IssuesIcon,
  ParentSubIcon,
  WorkflowsIcon,
} from "@/components/icons";

export interface FeaturesProps {
  children: React.ReactNode;
  color: string;
  colorDark: string;
}

export interface MainFeaturesProps {
  text: string;
  image: string;
  title: React.ReactNode;
  imageSize?: string;
}

export interface FeatureGrid {
  title: string;
  text: string;
  icon: React.FC;
}

export type FeatureGridProps = {
  features: FeatureGrid[];
};

export type FeatureCardProps = {
  features: {
    title: string;
    text: string;
    image: string;
    imageClassName: string;
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
    text: "Vypers will auto-close and auto-archive issues.",
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
    imageClassName: "max-w-none top-[30%] w-[200%]",
  },
  {
    title: "Make it yours",
    text: "Quickly apply filters and operators to refine your issue lists and create custom views.",
    image: "/card-views.webp",
    imageClassName: "top-[30%] left-[24px] w-[110%]",
  },
];

import {
  AddLabels,
  AssignToIcon,
  BacklogIcon,
  ChangePriorityIcon,
  ChangeStatusIcon,
  DoneIcon,
  HighIcon,
  InProgressIcon,
  LabelIcon,
  LowIcon,
  MediumIcon,
  NoPriorityIcon,
  PersonIcon,
  TodoIcon,
  UrgentIcon,
} from "@/components/icons";

export const commandOptions = [
  {
    label: "Assign to...",
    icon: AssignToIcon,
    subOptions: [
      {
        label: "Jori",
        icon: PersonIcon,
      },
      {
        label: "Karry",
        icon: PersonIcon,
      },
      {
        label: "Tuomas",
        icon: PersonIcon,
      },
    ],
  },
  {
    label: "Change status...",
    icon: ChangeStatusIcon,
    subOptions: [
      {
        label: "Backlog",
        icon: BacklogIcon,
      },
      {
        label: "Todo",
        icon: TodoIcon,
      },
      {
        label: "In Progress",
        icon: InProgressIcon,
      },
      {
        label: "Done",
        icon: DoneIcon,
      },
    ],
  },
  {
    label: "Change priority...",
    icon: ChangePriorityIcon,
    subOptions: [
      {
        label: "No priority",
        icon: NoPriorityIcon,
      },
      {
        label: "Urgent",
        icon: UrgentIcon,
      },
      {
        label: "High",
        icon: HighIcon,
      },
      {
        label: "Medium",
        icon: MediumIcon,
      },
      {
        label: "Low",
        icon: LowIcon,
      },
    ],
  },
  {
    label: "Add labels...",
    icon: AddLabels,
    subOptions: [
      {
        label: "Bug",
        icon: () => LabelIcon({ type: "bug" }),
      },
      {
        label: "Feature",
        icon: () => LabelIcon({ type: "feature" }),
      },
      {
        label: "Improvement",
        icon: () => LabelIcon({ type: "improvement" }),
      },
    ],
  },
];

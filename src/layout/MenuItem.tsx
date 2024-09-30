import { hexagons3 } from "@lucide/lab";
import {
  AppWindowIcon,
  ChartColumnIcon,
  ClipboardListIcon,
  ComponentIcon,
  Icon,
  LayoutDashboardIcon,
  MessageCircleMoreIcon,
  OctagonAlertIcon,
  ServerOffIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";

export interface MenuItemType {
  title: string;
  label?: string;
  href: string;
  icon: JSX.Element;
  sub?: MenuItemType[];
}

export const MenuItem: MenuItemType[] = [
  {
    title: "Dashboard",
    label: "",
    href: "/",
    icon: <LayoutDashboardIcon size={18} />,
  },
  {
    title: "Tasks",
    label: "3",
    href: "/tasks",
    icon: <ClipboardListIcon size={18} />,
  },
  {
    title: "Chats",
    label: "9",
    href: "/chats",
    icon: <MessageCircleMoreIcon size={18} />,
  },
  {
    title: "Apps",
    label: "",
    href: "/apps",
    icon: <AppWindowIcon size={18} />,
  },
  {
    title: "Authentication",
    label: "",
    href: "",
    icon: <UserIcon size={18} />,
    sub: [
      {
        title: "Sign In (email + password)",
        label: "",
        href: "/sign-in",
        icon: <Icon iconNode={hexagons3} size={18} />,
      },
      {
        title: "Sign In (Box)",
        label: "",
        href: "/sign-in-2",
        icon: <Icon iconNode={hexagons3} size={18} />,
      },
      {
        title: "Sign Up",
        label: "",
        href: "/sign-up",
        icon: <Icon iconNode={hexagons3} size={18} />,
      },
      {
        title: "Forgot Password",
        label: "",
        href: "/forgot-password",
        icon: <Icon iconNode={hexagons3} size={18} />,
      },
      {
        title: "OTP",
        label: "",
        href: "/otp",
        icon: <Icon iconNode={hexagons3} size={18} />,
      },
    ],
  },
  {
    title: "Users",
    label: "",
    href: "/users",
    icon: <UserIcon size={18} />,
  },
  {
    title: "Analysis",
    label: "",
    href: "/analysis",
    icon: <ChartColumnIcon size={18} />,
  },
  {
    title: "Extra Components",
    label: "",
    href: "/extra-components",
    icon: <ComponentIcon size={18} />,
  },
  {
    title: "Error Pages",
    label: "",
    href: "",
    icon: <OctagonAlertIcon size={18} />,
    sub: [
      {
        title: "Not Found",
        label: "",
        href: "/404",
        icon: <ServerOffIcon size={18} />,
      },
      {
        title: "Internal Server Error",
        label: "",
        href: "/500",
        icon: <ServerOffIcon size={18} />,
      },
      {
        title: "Maintenance Error",
        label: "",
        href: "/503",
        icon: <ServerOffIcon size={18} />,
      },
      {
        title: "Unauthorised Error",
        label: "",
        href: "/401",
        icon: <ServerOffIcon size={18} />,
      },
    ],
  },
  {
    title: "Settings",
    label: "",
    href: "/settings",
    icon: <SettingsIcon size={18} />,
  },
];

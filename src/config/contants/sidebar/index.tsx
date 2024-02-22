import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@config/Icons";
import { SidebarItem } from "./types";

export const sideBarItems: SidebarItem[] = [
  {
    key: "1",
    icon: <UserOutlined />,
    label: "Config",
    children: [
      {
        key: "1.1",
        icon: <UserOutlined />,
        label: "General",
        path: "/config/general",
      },
      {
        key: "1.2",
        icon: <UserOutlined />,
        label: "Especific",
        path: "/config/especific",
      },
    ],
  },
  {
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "Moderator",
    children: [
      {
        key: "2.1",
        icon: <UserOutlined />,
        label: "Home 1",
      },
    ],
  },
  {
    key: "3",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
    path: "/nav2"
  },
  {
    key: "4",
    icon: <UploadOutlined />,
    label: "nav 3",
    path: "/nav3"
  },
];

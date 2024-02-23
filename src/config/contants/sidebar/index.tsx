import { SidebarItem } from "./types";
import { SkinOutlined, TagsOutlined } from "@ant-design/icons";

export const sideBarItems: SidebarItem[] = [
  {
    key: "1",
    icon: <SkinOutlined />,
    label: "T-Shirts",
  },
  {
    key: "2",
    icon: <TagsOutlined />,
    label: "Shorts",
  },
  {
    key: "3",
    icon: <TagsOutlined />,
    label: "Kits",
  },
];

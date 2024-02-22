import { MenuProps } from "antd";
import { MenuItemType } from "antd/es/menu/hooks/useItems";

export type MenuItem = Required<MenuProps>["items"][number];

export interface SidebarItem extends MenuItemType {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
  children?: SidebarItem[];
}
export interface SidebarItemWithOnClick extends SidebarItem {
  onClick: () => void;
}


import Layout from "@components/Layout";
import Menu from "@components/Menu";
import { sideBarItems } from "@config/contants/sidebar";
import { Link } from "react-router-dom";
import { SiderProps } from "./types";
import { SidebarItem } from "@config/contants/sidebar/types";

const Sider = (props: SiderProps) => {
  const generateMenuItems = (menuConfig: SidebarItem[]) => {
    return menuConfig.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {generateMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }

      return (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.path!}>{item.label}</Link>
        </Menu.Item>
      );
    });
  };

  return (
    <Layout.Sider trigger={null} collapsible collapsed={props.collapsed} theme="light" collapsedWidth={0}>
      <Menu mode="inline">{generateMenuItems(sideBarItems)}</Menu>
    </Layout.Sider>
  );
};

export default Sider;

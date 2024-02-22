import Layout from "@components/Layout";
import useTheme from "@hooks/useTheme";
import {Outlet} from "react-router";

const Content = () => {
  const {colorBgContainer} = useTheme();

  return (
    <Layout.Content
      style={{
        paddingLeft: "1em",
        background: colorBgContainer,
      }}>
      <Outlet />
    </Layout.Content>
  );
};

export default Content;

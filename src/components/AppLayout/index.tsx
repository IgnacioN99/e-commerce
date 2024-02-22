import Layout from "@components/Layout";

import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import Sider from "./components/Sider";
import { LayoutStyled } from "./styles";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <LayoutStyled>
      <Sider collapsed={collapsed} />
      <Layout>
        <Header collapsed={collapsed} toggle={toggle} />
        <Content />
      </Layout>
    </LayoutStyled>
  );
};

export default AppLayout;

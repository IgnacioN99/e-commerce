import Layout from "@components/Layout";

import Content from "./components/Content";
import Header from "./components/Header";
import { LayoutStyled, StyledSider } from "./styles";
import { useState } from "react";

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <LayoutStyled>
      <StyledSider collapsed={collapsed} />
      <Layout>
        <Header toggle={toggle} />
        <Content />
      </Layout>
    </LayoutStyled>
  );
};

export default AppLayout;

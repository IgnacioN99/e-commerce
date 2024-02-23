import { Layout } from "antd";
import styled from "styled-components";
import Sider from "./components/Sider";

export const LayoutStyled = styled(Layout)`
  min-height: 100vh;
`;

export const StyledSider = styled(Sider)`
  @media (768px<=width) {
    display: none;
  }
`;

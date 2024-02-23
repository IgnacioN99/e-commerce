import { MenuOutlined } from "@ant-design/icons";
import Layout from "@components/Layout";
import { styled } from "styled-components";

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1;
  height: 64px;
`;

export const StyledMenuIcon = styled(MenuOutlined)`
  @media (768px<=width) {
    display: none;
  }
`;

export const StyledMenu = styled.section`
  @media (width<=768px) {
    display: none;
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

import Typography from "@components/Typography";
import { StyledHeader, StyledMenu, StyledMenuIcon } from "./styles";
import { HeaderProps } from "./types";
import { ShoppingCartOutlined } from "@ant-design/icons";

const Header = ({ toggle }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledMenuIcon onClick={() => toggle()} />
      <Typography.H2>Name</Typography.H2>
      <StyledMenu>
        <Typography.Body>Shorts</Typography.Body>
        <Typography.Body>T-Shirts</Typography.Body>
        <Typography.Body>Kits</Typography.Body>
      </StyledMenu>
      <ShoppingCartOutlined height={84} width={84} />
    </StyledHeader>
  );
};

export default Header;

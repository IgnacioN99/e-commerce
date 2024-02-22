import {ButtonBase} from "@components/Button";
import Layout from "@components/Layout";
import {MenuFoldOutlined, MenuUnfoldOutlined} from "@config/Icons";
import useTheme from "@hooks/useTheme";
import {HeaderProps} from "./types";

const Header = (props: HeaderProps) => {
  const {colorBgContainer} = useTheme();
  return (
    <Layout.Header style={{padding: 0}}>
      <ButtonBase // TODO change this to our button
        type="text"
        icon={
          props.collapsed ? (
            <MenuUnfoldOutlined style={{color: colorBgContainer}} />
          ) : (
            <MenuFoldOutlined style={{color: colorBgContainer}} />
          )
        }
        onClick={() => props.toggle()}
        style={{
          width: 64,
          height: 64,
        }}
      />
    </Layout.Header>
  );
};

export default Header;

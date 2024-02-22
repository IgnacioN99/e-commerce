import {TextProps} from "@components/Typography/types";
import {Typography} from "antd";

const Body = ({children, ...rest}: TextProps): JSX.Element => {
  return <Typography.Text {...rest}>{children}</Typography.Text>;
};
export default Body;

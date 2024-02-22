import {TitleProps} from "@components/Typography/types";
import {Typography} from "antd";

const H3 = ({children, ...rest}: TitleProps): JSX.Element => {
  return (
    <Typography.Title level={3} {...rest}>
      {children}
    </Typography.Title>
  );
};
export default H3;

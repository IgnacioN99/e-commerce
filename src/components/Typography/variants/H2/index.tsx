import {TitleProps} from "@components/Typography/types";
import {Typography} from "antd";

const H2 = ({children, ...rest}: TitleProps): JSX.Element => {
  return (
    <Typography.Title level={2} {...rest}>
      {children}
    </Typography.Title>
  );
};
export default H2;

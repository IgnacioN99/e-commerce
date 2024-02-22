import {TitleProps} from "@components/Typography/types";
import {Typography} from "antd";

const H5 = ({children, ...rest}: TitleProps): JSX.Element => {
  return (
    <Typography.Title level={5} {...rest}>
      {children}
    </Typography.Title>
  );
};

export default H5;

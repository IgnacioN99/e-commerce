import {Button as ButtonAnt} from "antd";
import {type ButtonProp} from "./types";

export const ButtonBase = ({children, ...rest}: ButtonProp): JSX.Element => {
  return <ButtonAnt {...rest}>{children}</ButtonAnt>;
};

const Button = {
  // Set variants
};
export default Button;

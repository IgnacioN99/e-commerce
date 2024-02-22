import {Col as ColAnt} from "antd";
import {ColProps} from "./types";

const Col = ({children, style, ...rest}: ColProps): JSX.Element => {
  return (
    <ColAnt style={{...style}} {...rest}>
      {children}
    </ColAnt>
  );
};
export default Col;

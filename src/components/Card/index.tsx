import {Card as CardAnt} from "antd";
import {CardProps} from "./types";

const Card = (props: CardProps): JSX.Element => {
  return (
    <CardAnt
      bodyStyle={{height: "100%", width: "100%"}}
      style={{...props.style, height: "100%", width: "100%"}}
      {...props}>
      {props.children}
    </CardAnt>
  );
};
export default Card;

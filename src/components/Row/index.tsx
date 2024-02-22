import {Row as RowAnt} from "antd";
import {RowProps} from "./types";

const Row = (props: RowProps): JSX.Element => {
  return <RowAnt {...props}>{props.children}</RowAnt>;
};
export default Row;

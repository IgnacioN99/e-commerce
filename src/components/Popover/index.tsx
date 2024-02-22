import {Popover as PopoverAnt} from "antd";
import {PopoverProps} from "./types";

const Popover = (props: PopoverProps): JSX.Element => {
  return <PopoverAnt {...props}>{props.children}</PopoverAnt>;
};
export default Popover;

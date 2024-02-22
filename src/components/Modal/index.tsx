import {Modal as ModalAnt} from "antd";
import {ModalProps} from "./types";

const Modal = (props: ModalProps) => {
  return <ModalAnt {...props}>{props.children}</ModalAnt>;
};
export default Modal;

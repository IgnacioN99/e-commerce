import Modal from "@components/Modal";
import {ModalProps} from "antd";
import {useCallback, useMemo, useState} from "react";

const useModal = (config: ModalProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [content, setContent] = useState<JSX.Element>();
  const [onOk, setOnOk] = useState<() => void>();
  const [onCancel, setOnCancel] = useState<() => void>();

  const open = useCallback(() => {
    setVisible(true);
  }, []);

  const close = useCallback(() => {
    setVisible(false);
  }, []);

  const ModalInstance = () =>
    useMemo(
      () => (
        <Modal {...config} open={visible} onCancel={onCancel || close} onOk={onOk || close}>
          {content}
        </Modal>
      ),
      [content]
    );

  return {
    Modal: ModalInstance,
    setContent,
    setOnCancel,
    setOnOk,
    visible,
    open,
    close,
  };
};

export default useModal;

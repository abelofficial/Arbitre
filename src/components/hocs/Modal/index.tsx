import React from "react";
import * as styles from "./styles";

interface ModalProps {
  show: boolean;
  children: React.ReactNode;
  actionButton: React.ReactNode;
}

const Modal = ({ show, children, actionButton }: ModalProps) => (
  <>
    {!show ? (
      actionButton
    ) : (
      <styles.Container open>
        <styles.Modal>{children}</styles.Modal>
      </styles.Container>
    )}
  </>
);

export default Modal;

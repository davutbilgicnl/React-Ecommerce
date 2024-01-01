import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function Backdrop({ onCloseCart }) {
  return <div className={styles.backdrop} onClick={onCloseCart}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

const portalElement = document.getElementById("overlays");
// const portalElement = document.body;

export default function Modal({ children, ...props }) {
  return createPortal(
    <>
      <Backdrop {...props} />
      <ModalOverlay>{children}</ModalOverlay>
    </>,
    portalElement
  );
}

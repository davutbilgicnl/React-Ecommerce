import styles from "./Modal.module.css";
import { createPortal } from "react-dom";

function Backdrop() {
  return <div className={styles.backdrop}></div>;
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

export default function Modal({ children }) {
  return createPortal(
    <>
      <Backdrop />
      <ModalOverlay>{children}</ModalOverlay>
    </>,
    portalElement
  );
}

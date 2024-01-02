import { forwardRef } from "react";
import styles from "./Input.module.css";

export default forwardRef(function Input({ ...props }, ref) {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref} />
    </div>
  );
});

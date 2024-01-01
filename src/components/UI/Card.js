import styles from "./Card.module.css";

export default function Card({ children, ...props }) {
  return (
    <div className={styles.card} {...props}>
      {children}
    </div>
  );
}

import headerImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>PAN Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

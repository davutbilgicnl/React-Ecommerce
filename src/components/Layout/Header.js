import headerImage from "../../assets/meals2.jpg";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header({ onShowCart }) {
  return (
    <>
      <header className={styles.header}>
        <h1>PAN Meals</h1>
        <HeaderCartButton onShowCart={onShowCart} />
      </header>
      <div className={styles["main-image"]}>
        <img src={headerImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

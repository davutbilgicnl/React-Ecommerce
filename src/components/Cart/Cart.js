import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

export default function Cart({ onCloseCart }) {
  const dummyItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {dummyItems.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={onCloseCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>$35.43</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onCloseCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
}
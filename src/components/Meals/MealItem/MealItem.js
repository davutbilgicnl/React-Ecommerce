import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem({ id, name, description, price }) {
  const cartCtx = useContext(CartContext);
  const _price = `$${price.toFixed(2)}`;

  function addToCartHandler(amount) {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{_price}</div>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}

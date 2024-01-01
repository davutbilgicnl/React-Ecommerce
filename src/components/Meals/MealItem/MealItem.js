import styles from "./MealItem.module.css";

export default function MealItem({ name, description, price }) {
  const _price = `$${price.toFixed(2)}`;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{_price}</div>
      </div>
      <div></div>
    </li>
  );
}

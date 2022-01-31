import styles from "./CartItem.module.css";

const CartItem = ({ item }) => {
  return (
    <li className={styles["list-item"]}>
      <div className={styles.description}>
        <h3>{item.name}</h3>
        <div className={styles.details}>
          <p>€ {item.price.toFixed(2)}</p>
          <span>x{item.amount}</span>
        </div>
      </div>
      <div className={styles.controls}>
        <span>&minus;</span>
        <span>+</span>
      </div>
    </li>
  );
};

export default CartItem;

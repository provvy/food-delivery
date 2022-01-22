import styles from "./CartItem.module.css";

const CartItem = ({ item, changeQuantity }) => {
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
        <span onClick={() => changeQuantity(item, "-")}>&minus;</span>
        <span onClick={() => changeQuantity(item, "+")}>+</span>
      </div>
    </li>
  );
};

export default CartItem;

import styles from "./CartItem.module.css";
import { CartContext } from "../context/CartContextProvider";
import { useContext } from "react";

const CartItem = ({ item }) => {
  const { dispatch } = useContext(CartContext);
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
        <span
          onClick={() =>
            dispatch({ type: "UPDATE", payload: item, operator: "-" })
          }
        >
          &minus;
        </span>
        <span
          onClick={() =>
            dispatch({ type: "UPDATE", payload: item, operator: "+" })
          }
        >
          +
        </span>
      </div>
    </li>
  );
};

export default CartItem;

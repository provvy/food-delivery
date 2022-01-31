import CartItem from "../../CartItem/CartItem";
import Button from "../Button/Button";
import styles from "./CartList.module.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContextProvider";

const CartList = ({ closeModal }) => {
  const { state } = useContext(CartContext);
  const amounts = state.map((item) => item.price * item.amount);
  const total = amounts.reduce((a, c) => a + c, 0);
  if (state.length <= 0)
    return <h2>There are no items in your cart yet, start ordering!</h2>;
  return (
    <ul className={styles.list}>
      {state.map((item, idx) => (
        <CartItem key={idx} item={item} />
      ))}
      <div className={styles.total}>
        <h2>Total Amount</h2>
        <h2>€ {total.toFixed(2)}</h2>
      </div>
      <div className={styles.buttons}>
        <Button onClick={closeModal} variant type="button">
          Close
        </Button>
        <Button type="button">Order</Button>
      </div>
    </ul>
  );
};

export default CartList;

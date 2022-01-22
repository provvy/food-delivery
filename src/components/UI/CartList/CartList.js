import CartItem from "../../CartItem/CartItem";
import Button from "../Button/Button";
import styles from "./CartList.module.css";

const CartList = ({ cartItems, closeModal, changeQuantity }) => {
  const amounts = cartItems.map((item) => item.price * item.amount);
  const total = amounts.reduce((a, c) => a + c, 0);
  if (cartItems.length <= 0)
    return <h2>There are no items in your cart yet, start ordering!</h2>;
  return (
    <ul className={styles.list}>
      {cartItems.map((item, idx) => (
        <CartItem changeQuantity={changeQuantity} key={idx} item={item} />
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

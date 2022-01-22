import { useState } from "react";
import styles from "./CartButton.module.css";
import CartIcon from "../../assets/CartIcon";
import CartModal from "../CartModal/CartModal";

const CartButton = ({ cartItems, changeQuantity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cartAmount = cartItems.reduce((a, c) => a + c.amount, 0);
  return (
    <>
      {isOpen && (
        <CartModal
          changeQuantity={changeQuantity}
          closeModal={() => setIsOpen(false)}
          cartItems={cartItems}
        />
      )}
      <div onClick={() => setIsOpen(true)} className={styles.cart}>
        <CartIcon />
        <p>Your Cart</p>
        <span>{cartAmount || 0}</span>
      </div>
    </>
  );
};

export default CartButton;

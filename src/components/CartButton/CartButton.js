import { useState, useContext } from "react";
import styles from "./CartButton.module.css";
import CartIcon from "../../assets/CartIcon";
import CartModal from "../CartModal/CartModal";
import { CartContext } from "../context/CartContextProvider";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useContext(CartContext);
  const cartAmount = state.reduce((a, c) => a + c.amount, 0);
  return (
    <>
      {isOpen && <CartModal closeModal={() => setIsOpen(false)} />}
      <div onClick={() => setIsOpen(true)} className={styles.cart}>
        <CartIcon />
        <p>Your Cart</p>
        <span>{cartAmount || 0}</span>
      </div>
    </>
  );
};

export default CartButton;

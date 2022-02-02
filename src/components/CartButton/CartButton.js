import { useState, useContext, useEffect } from "react";
import styles from "./CartButton.module.css";
import CartIcon from "../../assets/CartIcon";
import CartModal from "../CartModal/CartModal";
import { CartContext } from "../context/CartContextProvider";

const CartButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const { state } = useContext(CartContext);
  const cartAmount = state.reduce((a, c) => a + c.amount, 0);

  useEffect(() => {
    cartAmount !== 0 && setIsAnimated(true);
  }, [cartAmount]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimated(false);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [isAnimated]);

  return (
    <>
      {isOpen && <CartModal closeModal={() => setIsOpen(false)} />}
      <div
        onClick={() => {
          setIsOpen(true);
          setIsAnimated(true);
        }}
        className={`${styles.cart} ${isAnimated && styles.animated}`}
      >
        <CartIcon />
        <p>Your Cart</p>
        <span>{cartAmount || 0}</span>
      </div>
    </>
  );
};

export default CartButton;

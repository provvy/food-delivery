import Checkout from "../Checkout/Checkout";
import Card from "../UI/Card/Card";
import CartList from "../UI/CartList/CartList";
import styles from "./CartModal.module.css";
import { useState, useCallback } from "react";

const CartModal = ({ closeModal }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isOrdered, setIsOrdered] = useState(false);
  const goCheckout = () => {
    setIsCheckout(true);
  };
  const cancelCheckout = useCallback(() => {
    setIsCheckout(false);
  }, []);
  const orderSent = () => {
    setIsOrdered(true);
  };
  return (
    <div onClick={closeModal} className={styles.backdrop}>
      <Card onClick={(e) => e.stopPropagation()}>
        {isOrdered && <h2>Order sent successfully!</h2>}
        {!isOrdered && (
          <CartList
            isCheckout={isCheckout}
            goCheckout={goCheckout}
            closeModal={closeModal}
          />
        )}
        {isCheckout && !isOrdered && (
          <Checkout orderSent={orderSent} cancelCheckout={cancelCheckout} />
        )}
      </Card>
    </div>
  );
};

export default CartModal;

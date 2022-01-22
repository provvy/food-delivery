import Card from "../UI/Card/Card";
import CartList from "../UI/CartList/CartList";
import styles from "./CartModal.module.css";

const CartModal = ({ cartItems, closeModal, changeQuantity }) => {
  return (
    <div onClick={closeModal} className={styles.backdrop}>
      <Card onClick={(e) => e.stopPropagation()}>
        <CartList
          changeQuantity={changeQuantity}
          closeModal={closeModal}
          cartItems={cartItems}
        />
      </Card>
    </div>
  );
};

export default CartModal;

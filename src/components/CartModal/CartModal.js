import Card from "../UI/Card/Card";
import CartList from "../UI/CartList/CartList";
import styles from "./CartModal.module.css";

const CartModal = ({ closeModal }) => {
  return (
    <div onClick={closeModal} className={styles.backdrop}>
      <Card onClick={(e) => e.stopPropagation()}>
        <CartList closeModal={closeModal} />
      </Card>
    </div>
  );
};

export default CartModal;

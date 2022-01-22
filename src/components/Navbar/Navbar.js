import styles from "./Navbar.module.css";
import CartButton from "../CartButton/CartButton";

const Navbar = ({ cartItems, changeQuantity }) => {
  return (
    <nav className={styles.nav}>
      <h1>ReactMeals</h1>
      <CartButton changeQuantity={changeQuantity} cartItems={cartItems} />
    </nav>
  );
};

export default Navbar;

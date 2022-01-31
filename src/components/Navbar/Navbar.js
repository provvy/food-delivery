import styles from "./Navbar.module.css";
import CartButton from "../CartButton/CartButton";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <h1>ReactMeals</h1>
      <CartButton />
    </nav>
  );
};

export default Navbar;

import styles from "./Header.module.css";
import meals from "../../assets/meals.jpg";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={meals} alt="header background" />
    </header>
  );
};

export default Header;

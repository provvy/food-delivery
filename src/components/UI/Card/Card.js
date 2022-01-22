import styles from "./Card.module.css";

const Card = ({ children, onClick }) => {
  return (
    <section onClick={onClick} className={styles.card}>
      {children}
    </section>
  );
};

export default Card;

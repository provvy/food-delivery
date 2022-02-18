import FoodItem from "../../FoodItem/FoodItem";
import styles from "./FoodList.module.css";

const FoodList = (props) => {
  if (props.loading) return <h2 className={styles.message}>Loading...</h2>;
  if (props.error) return <h2 className={styles.message}>{props.error}</h2>;
  return (
    <ul className={styles.list}>
      {props.items.map((item, idx) => (
        <FoodItem key={idx} food={item} />
      ))}
    </ul>
  );
};

export default FoodList;

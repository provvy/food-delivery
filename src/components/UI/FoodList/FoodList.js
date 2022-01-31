import FoodItem from "../../FoodItem/FoodItem";
import styles from "./FoodList.module.css";

const FoodList = (props) => {
  if (props.items.length <= 0)
    return <h2>We're sorry, there are currently no meals available!</h2>;
  return (
    <ul className={styles.list}>
      {props.items.map((item, idx) => (
        <FoodItem key={idx} food={item} />
      ))}
    </ul>
  );
};

export default FoodList;

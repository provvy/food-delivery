import { useState } from "react";
import Button from "../UI/Button/Button";
import styles from "./FoodItem.module.css";

const FoodItem = ({ food, onAdd }) => {
  const [amount, setAmount] = useState(1);
  const submitHandler = (e) => {
    e.preventDefault();
    const newCartItem = { ...food, amount };
    onAdd(newCartItem);
    setAmount(1);
  };
  return (
    <li className={styles["list-item"]}>
      <div className={styles.details}>
        <h3>{food.name}</h3>
        <p>{food.description}</p>
        <span>€ {food.price.toFixed(2)}</span>
      </div>
      <form onSubmit={submitHandler} className={styles.form}>
        <div className={styles.input}>
          <label>Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            max="99"
            min="1"
            type="number"
          />
        </div>
        <Button type="submit">+ Add</Button>
      </form>
    </li>
  );
};

export default FoodItem;

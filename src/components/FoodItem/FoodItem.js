import { useRef, useContext } from "react";
import Button from "../UI/Button/Button";
import styles from "./FoodItem.module.css";
import { CartContext } from "../context/CartContextProvider";

const FoodItem = ({ food }) => {
  let inputRef = useRef(null);
  const { dispatch } = useContext(CartContext);
  const submitHandler = (e) => {
    e.preventDefault();
    const newCartItem = { ...food, amount: parseInt(inputRef.current?.value) };
    dispatch({ type: "ADD", payload: newCartItem });
    inputRef.current.value = "1";
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
            defaultValue={"1"}
            ref={(el) => (inputRef.current = el)}
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

import React, {
  useRef,
  useState,
  useContext,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import classes from "./Checkout.module.css";
import { CartContext } from "../context/CartContextProvider";

const Checkout = ({ cancelCheckout, orderSent }) => {
  const inputRef = useRef([]);
  const inputs = useMemo(() => ["Name", "Street", "Postal Code", "City"], []);
  const [formIsValid, setFormIsValid] = useState(undefined);
  const { state, dispatch } = useContext(CartContext);

  const confirmOrder = (e) => {
    e.preventDefault();
    let areValid = inputRef.current.map((input) =>
      input.id === "postal code"
        ? input.value.trim().length === 5
        : input.value.trim().length > 0
    );
    setFormIsValid(areValid.every((item) => item === true));
  };

  const submitHandler = useCallback(async () => {
    const userInfo = {
      [inputs[0].toLowerCase()]: inputRef.current[0].value.trim(),
      [inputs[1].toLowerCase()]: inputRef.current[1].value.trim(),
      [inputs[2].toLowerCase()]: inputRef.current[2].value.trim(),
      [inputs[3].toLowerCase()]: inputRef.current[3].value.trim(),
    };
    const newOrder = {
      orderedMeals: state,
      userInfo,
    };
    const response = await fetch(
      "https://food-app-de217-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newOrder),
      }
    );
    const data = await response.json();
    if (data) {
      console.log(data);
      dispatch({ type: "RESET" });
      orderSent();
    }
  }, [state, dispatch, inputs, orderSent]);

  useEffect(() => {
    if (formIsValid) {
      submitHandler();
      setFormIsValid(false);
    }
  }, [formIsValid, submitHandler]);

  return (
    <form onSubmit={confirmOrder} className={classes.form}>
      {inputs.map((input, idx) => (
        <Input
          ref={(el) => (inputRef.current[idx] = el)}
          value={input}
          key={idx}
          formIsValid={formIsValid}
        />
      ))}
      <div className={classes.buttons}>
        <Button onClick={cancelCheckout} variant type="button">
          Cancel
        </Button>
        <Button type="submit">Confirm</Button>
      </div>
    </form>
  );
};

export default Checkout;

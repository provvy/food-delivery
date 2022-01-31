import React, { createContext, useReducer, useMemo } from "react";
export const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      const isPresent = state.find((el) => el.id === action.payload.id);
      if (!isPresent) {
        return [...state, action.payload];
      } else {
        const updatedCart = state.map((item) => {
          if (item.id !== isPresent.id) return item;
          return { ...item, amount: item.amount + action.payload.amount };
        });
        return updatedCart;
      }
    case "UPDATE":
      if (action.operator === "-" && action.payload.amount <= 1)
        return state.filter((item) => item.id !== action.payload.id);
      const updatedCart = state.map((item) => {
        if (item.id !== action.payload.id) return item;
        return {
          ...item,
          amount:
            action.operator === "+"
              ? action.payload.amount + 1
              : action.payload.amount - 1,
        };
      });
      return updatedCart;
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider
      value={useMemo(() => ({ state, dispatch }), [state, dispatch])}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

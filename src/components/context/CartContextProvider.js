import React, { createContext, useReducer } from "react";
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
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

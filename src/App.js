import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Summary from "./components/Summary/Summary";
import Card from "./components/UI/Card/Card";
import FoodList from "./components/UI/FoodList/FoodList";
import Main from "./components/UI/Main/Main";
import { DUMMY_MEALS as data } from "../src/dummy-meals";

function App() {
  // const [cartItems, setCartItems] = useState([]);

  // const addHandler = (item) => {
  //   const isPresent = cartItems.find((el) => el.id === item.id);
  //   if (!isPresent) {
  //     setCartItems((prevState) => [...prevState, item]);
  //   } else {
  //     const itemIndex = cartItems.findIndex((el) => el === isPresent);
  //     setCartItems((prevState) => {
  //       const firstSlice = prevState.slice(0, itemIndex);
  //       const secondSlice = prevState.slice(itemIndex + 1);
  //       const updatedItem = {
  //         ...isPresent,
  //         amount: isPresent.amount + item.amount,
  //       };
  //       const updatedCartItems = [...firstSlice, updatedItem, ...secondSlice];
  //       return updatedCartItems;
  //     });
  //   }
  // };

  // const changeQuantity = (item, operator) => {
  //   const itemIndex = cartItems.findIndex((el) => el === item);
  //   setCartItems((prevState) => {
  //     const firstSlice = prevState.slice(0, itemIndex);
  //     const secondSlice = prevState.slice(itemIndex + 1);
  //     const updatedItem = {
  //       ...item,
  //       amount:
  //         operator === "+"
  //           ? prevState[itemIndex].amount + 1
  //           : prevState[itemIndex].amount - 1,
  //     };
  //     const updatedCartItems =
  //       updatedItem.amount > 0
  //         ? [...firstSlice, updatedItem, ...secondSlice]
  //         : [...firstSlice, ...secondSlice];
  //     return updatedCartItems;
  //   });
  // };

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main>
        <Summary />
        <Card>
          <FoodList items={data} />
        </Card>
      </Main>
    </div>
  );
}

export default App;

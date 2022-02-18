import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Summary from "./components/Summary/Summary";
import Card from "./components/UI/Card/Card";
import FoodList from "./components/UI/FoodList/FoodList";
import Main from "./components/UI/Main/Main";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://food-app-de217-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong, please try again.");
      }
      const data = await response.json();
      if (data) {
        setLoading(false);
        const [meals] = Object.entries(data);
        setItems(meals[1]);
      }
    } catch (e) {
      setLoading(false);
      setError(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main>
        <Summary />
        <Card>
          <FoodList loading={loading} error={error} items={items} />
        </Card>
      </Main>
    </div>
  );
}

export default App;

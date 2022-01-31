import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Summary from "./components/Summary/Summary";
import Card from "./components/UI/Card/Card";
import FoodList from "./components/UI/FoodList/FoodList";
import Main from "./components/UI/Main/Main";
import { DUMMY_MEALS as data } from "../src/dummy-meals";

function App() {
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

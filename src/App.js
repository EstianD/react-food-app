import "./App.css";
import { useState } from "react";
import FoodSearch from "./Components/FoodSearch";
import { searchFood } from "./services/food";

function App() {
  const [state, setState] = useState([]);

  //   Handle item click

  // state model
  /*
  {
    foods: []
  }
  */

  return (
    <div className="app-container">
      <FoodSearch />
    </div>
  );
}

export default App;

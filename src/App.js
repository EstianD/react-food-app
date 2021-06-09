import "./App.css";
import { useState, useEffect } from "react";
import FoodSearch from "./Components/FoodSearch";
import { searchFood } from "./services/food";
import useDashboard from "./hooks/useDashboard";
import SingleFood from "./Components/SingleFood";
import CompareFoods from "./Components/CompareFoods";

function App() {
  // Custom hook to manage dashboard
  const {
    foods,
    setFoods,
    requests,
    setRequests,
    view,
    setView,
    handleToggleCompareButtonClick,
  } = useDashboard();

  // useEffect(() => {
  //   console.log("APP RUNNING!");
  //   console.log("REQUESTS: ", requests);
  //   console.log("FOODS: ", foods);
  //   console.log("ITEMS: ", items);
  // }, []);

  // console.log("APP RUNNING!");
  // console.log("REQUESTS: ", requests);
  // console.log("FOODS: ", foods);

  return (
    <div className="app-container">
      <FoodSearch
        requests={requests}
        setRequests={setRequests}
        view={view}
        setView={setView}
        handleToggleCompareButtonClick={handleToggleCompareButtonClick}
      />

      {view === "single" && foods.length === 1 && <SingleFood foods={foods} />}
      {view === "compare" && foods.length > 0 && <CompareFoods foods={foods} />}
    </div>
  );
}

export default App;

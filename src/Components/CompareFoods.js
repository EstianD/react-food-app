import React from "react";
import FoodHeading from "./compare_comps/FoodHeading";

const CompareFoods = ({ foods }) => {
  console.log("COMPARE FOODS: ", foods);

  // Extract data

  // If no food is selected
  // If only one food is selected
  if (foods.length === 1) {
    let keysArrayOne = Object.keys(foods[0].totalNutrients);
    console.log("ARR 1: ", keysArrayOne);
  }
  // If 2 foods are selected
  if (foods.length > 1) {
    let keysArrayTwo = Object.keys(foods[1].totalNutrients);
    console.log("ARR 2: ", keysArrayTwo);
  }

  const renderComparisonDescription = () => {
    return foods.map((food) => {
      let foodName = food.ingredients[0].parsed[0].food;
      let capitalName = foodName.charAt(0).toUpperCase() + foodName.slice(1);

      return <FoodHeading name={capitalName} />;
    });
  };

  return (
    <div>
      <div className="compare-description-container">
        {renderComparisonDescription()}
      </div>
      <div className="compare-nutrition-container">
        <div className="food-one-macro"></div>
        <div className="food-two-macro"></div>
      </div>
      <div className="macro-compare-container">Macro compare</div>
    </div>
  );
};

export default CompareFoods;

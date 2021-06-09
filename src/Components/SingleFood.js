import React from "react";

// import charts
import CalorieChart from "./charts/CalorieChart";
import MacroChart from "./charts/MacroChart";
import DailyChart from "./charts/DailyChart";
import BreakdownChart from "./charts/BreakdownChart";
// Import nutrient tables
import NutritionFacts from "./NutritionFacts";
import CalorieTable from "./tables/CalorieTable";
import DailyTable from "./tables/DailyTable";

const SingleFood = ({ foods, foodImages }) => {
  console.log("SINGLE FOODS: ", foods);

  let foodName = foods[0].ingredients[0].parsed[0].food;
  let capitalName = foodName.charAt(0).toUpperCase() + foodName.slice(1);

  const servingSize = foods[0].ingredients[0].parsed[0].quantity;
  const servingMeasure = foods[0].ingredients[0].parsed[0].measure[0];

  const totalWeight = foods[0].ingredients[0].parsed[0].weight;
  const weightMeasurement = foods[0].ingredients[0].parsed[0].measure;

  const servingDetails = {
    servingSize: servingSize,
    servingMeasure: servingMeasure,
    totalWeight: totalWeight,
    weightMeasurement: weightMeasurement,
  };

  let keysArray = Object.keys(foods[0].totalNutrients);
  let foodArray = [];
  // console.log("KEYS: ", keysArray);

  // Add calories to foodArray
  foodArray["CAL"] = foods[0].calories;

  // Loop through keys and create merged key/value object for each nutrient
  keysArray.forEach((key) => {
    let quantity = 0;
    if (foods[0].totalDaily[key]) {
      quantity = foods[0].totalDaily[key].quantity;
    }
    let nutrientObj = {
      ...foods[0].totalNutrients[key],
      dv: quantity,
    };
    foodArray[key] = nutrientObj;
    //  foodArray.push(nutrientObj);
  });
  console.log("FOOD ARRAY: ", foodArray);

  // Vitamins
  const vitamins = [
    foodArray.FOLDFE ? foodArray.FOLDFE : {},
    foodArray.FOLAC ? foodArray.FOLAC : {},
    foodArray.NIA ? foodArray.NIA : {},
    foodArray.RIBF ? foodArray.RIBF : {},
    foodArray.THIA ? foodArray.THIA : {},
    foodArray.VITA_RAE ? foodArray.VITA_RAE : {},
    foodArray.VITB6A ? foodArray.VITB6A : {},
    foodArray.VITB12 ? foodArray.VITB12 : {},
    foodArray.VITC ? foodArray.VITC : {},
    foodArray.VITD ? foodArray.VITD : {},
    foodArray.TOCPHA ? foodArray.TOCPHA : {},
    foodArray.VITK ? foodArray.VITK : {},
  ];
  console.log("VITAMINS: ", vitamins);

  //   Minerals
  //   const minerals = [CA, FE, MG, P, K, NA, ZN];
  const minerals = [
    foodArray.CA ? foodArray.CA : {},
    foodArray.FE ? foodArray.FE : {},
    foodArray.MG ? foodArray.MG : {},
    foodArray.P ? foodArray.P : {},
    foodArray.K ? foodArray.K : {},
    foodArray.NA ? foodArray.NA : {},
    foodArray.ZN ? foodArray.ZN : {},
  ];

  //   Fats
  //   const fats = [FAT, FAMS, FAPU, FASAT];
  const fats = [
    foodArray.FAT ? foodArray.FAT : {},
    foodArray.FASAT ? foodArray.FASAT : {},
    foodArray.FAMS ? foodArray.FAMS : {},
    foodArray.FAPU ? foodArray.FAPU : {},
  ];
  //   Carbs
  //   const carbs = [CHOCDF, FIBTG, SUGAR];
  const carbs = [
    foodArray.CHOCDF ? foodArray.CHOCDF : {},
    foodArray.FIBTG ? foodArray.FIBTG : {},
    foodArray.SUGAR ? foodArray.SUGAR : {},
  ];
  //   Proteins
  //   const proteins = [PROCNT];
  const proteins = [foodArray.PROCNT ? foodArray.PROCNT : {}];
  //   Sterols
  //   const sterols = [CHOLE];
  const sterols = [foodArray.CHOLE ? foodArray.CHOLE : {}];
  //   Other
  //   const other = [WATER, FOLDFD];
  const other = [
    foodArray.WATER ? foodArray.WATER : {},
    foodArray.FOLDFD ? foodArray.FOLDFD : {},
  ];

  console.log("FATS: ", fats);

  return (
    <div className="food-container">
      {/* Summarysection */}
      <div className="summary-container">
        <div className="nutrition-facts-container">
          <NutritionFacts
            foodArray={foodArray}
            servingDetails={servingDetails}
          />
        </div>
        <div className="macro-container">
          <div className="food-description-container">
            <span>{capitalName}&nbsp;</span>
            <span style={{ fontSize: "75%" }}>
              (per {servingDetails.servingSize} {servingDetails.servingMeasure})
            </span>
            <br />
            <br />
            {/* <img className="food-img" src={foodImages[0]} alt={foodImages[0]} /> */}
          </div>
          <div className="macro-chart-container">
            <BreakdownChart
              proteins={proteins}
              fats={fats}
              carbs={carbs}
              other={other}
              servingDetails={servingDetails}
              title={"Macro"}
            />
          </div>

          <div className="calorie-chart-container">
            <BreakdownChart
              carbs={carbs}
              proteins={proteins}
              fats={fats}
              servingDetails={servingDetails}
              title={"Calories"}
            />
          </div>
        </div>
      </div>

      {/* Vitamins section */}
      <div className="daily-container">
        <div className="daily-summary-container">
          <DailyTable
            nutrients={vitamins}
            servingDetails={servingDetails}
            title={"Vitamins"}
          />
        </div>
        <div className="daily-chart-container">
          <DailyChart nutrients={vitamins} title={"Vitamins"} />
        </div>
      </div>

      {/* Minerals section */}
      <div className="daily-container">
        <div className="daily-summary-container">
          <DailyTable
            nutrients={minerals}
            servingDetails={servingDetails}
            title={"Minerals"}
          />
        </div>
        <div className="daily-chart-container">
          <DailyChart nutrients={minerals} title={"Minerals"} />
        </div>
      </div>

      {/* Fats section */}
      <div className="daily-container">
        <div className="daily-summary-container">
          <DailyTable
            nutrients={fats}
            servingDetails={servingDetails}
            title={"Fats"}
          />
        </div>
        <div className="daily-chart-container">
          <BreakdownChart
            fats={fats}
            servingDetails={servingDetails}
            title={"Fats"}
          />
        </div>
      </div>
    </div>
  );
};

export default SingleFood;

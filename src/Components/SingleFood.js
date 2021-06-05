import React from "react";

// import charts
import CalorieChart from "./charts/CalorieChart";
import MacroChart from "./charts/MacroChart";
import VitaminChart from "./charts/VitaminChart";
// Import nutrient tables
import NutritionFacts from "./NutritionFacts";
import CalorieTable from "./tables/CalorieTable";
import VitaminTable from "./tables/VitaminTable";

const SingleFood = ({ foods, foodImages }) => {
  console.log("SINGLE FOODS: ", foods);
  console.log("IMAGE: ", foodImages);

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
  console.log("KEYS: ", keysArray);

  //   const {
  //     CA = {},
  //     CHOCDF = {},
  //     CHOLE = {},
  //     ENERC_KCAL = {},
  //     FAMS = {},
  //     FAPU = {},
  //     FASAT = {},
  //     FAT = {},
  //     FE = {},
  //     FIBTG = {},
  //     FOLAC = {},
  //     FOLDFE = {},
  //     FOLDFD = {},
  //     K = {},
  //     MG = {},
  //     NA = {},
  //     NIA = {},
  //     P = {},
  //     PROCNT = {},
  //     RIBF = {},
  //     SUGAR = {},
  //     THIA = {},
  //     TOCPHA = {},
  //     VITA_RAE = {},
  //     VITB6A = {},
  //     VITB12 = {},
  //     VITC = {},
  //     VITD = {},
  //     VITK = {},
  //     WATER = {},
  //     ZN = {},
  //   } = foods[0].totalNutrients;

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
    foodArray.FAMS ? foodArray.FAMS : {},
    foodArray.FAPU ? foodArray.FAPU : {},
    foodArray.FASAT ? foodArray.FASAT : {},
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
            <MacroChart
              proteins={proteins}
              fats={fats}
              carbs={carbs}
              other={other}
              servingDetails={servingDetails}
            />
          </div>
          <div className="calorie-chart-container">
            <CalorieChart
              carbs={carbs}
              proteins={proteins}
              fats={fats}
              servingDetails={servingDetails}
            />
          </div>
        </div>
      </div>

      {/* Vitamins section */}
      <div className="vitamin-container">
        <div className="vitamin-summary-container">
          <VitaminTable vitamins={vitamins} servingDetails={servingDetails} />
        </div>
        <div className="vitamin-chart-container">
          <VitaminChart vitamins={vitamins} />
        </div>
      </div>

      {/* Minerals section */}
      <div className="mineral-container">
        <div className="mineral-summary-container">mineral summary</div>
        <div className="mineral-chart-container">mineral chart</div>
      </div>

      {/* Fats section */}
      <div className="fat-container">
        <div className="fat-summary-container">fat summary</div>
        <div className="fat-chart-container">fat chart</div>
      </div>

      {/* <div className="nutrition-container">
        <div className="nutrition-summary">
          <CalorieChart
            carbs={carbs}
            proteins={proteins}
            fats={fats}
            servingDetails={servingDetails}
          />
        </div>
      </div> */}
    </div>
  );
};

export default SingleFood;

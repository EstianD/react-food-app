import React from "react";
import { Pie } from "react-chartjs-2";

// Multiplier contstants for calculating calories
const PROTEIN_MULT = 4;
const CARB_MULT = 4;
const FAT_MULT = 9;

const BreakdownChart = ({ ...props }) => {
  // Destructure props
  const { carbs, fats, proteins, other, servingDetails, title } = props;

  let dataArray = [];
  let labelsArray = [];
  let unit = "";
  let colorArray = [];

  // Load data depending on chart title
  // Macro chart
  if (title === "Macro") {
    // Calculate "other" nutrients
    const macroOther = (
      servingDetails.servingSize -
      carbs[0].quantity -
      proteins[0].quantity -
      fats[0].quantity -
      other[0].quantity
    ).toFixed(2);

    labelsArray = ["Carbohydrates", "Protein", "Fat", "Water", "Other"];
    //  Set data array
    dataArray = [
      carbs[0].quantity,
      proteins[0].quantity,
      fats[0].quantity,
      other[0].quantity,
      macroOther,
    ];
    unit = "g";
    colorArray = ["#F51720", "#1a4ae8", "#F8D210", "#38f2f5", "#d5dede"];
  } else if (title === "Calories") {
    //   Define and calculate calories
    let carbCalories = parseFloat(carbs[0].quantity * CARB_MULT);
    let protCalories = parseFloat(proteins[0].quantity) * PROTEIN_MULT;
    let fatCalories = parseFloat(fats[0].quantity) * FAT_MULT;

    let totalCalories = carbCalories + protCalories + fatCalories;

    let carbCaloriesPerc = ((carbCalories / totalCalories) * 100).toFixed(1);
    let protCaloriesPerc = ((protCalories / totalCalories) * 100).toFixed(1);
    let fatCaloriesPerc = ((fatCalories / totalCalories) * 100).toFixed(1);

    dataArray = [carbCaloriesPerc, protCaloriesPerc, fatCaloriesPerc];
    labelsArray = ["Carbohydrates", "Protein", "Fat"];
    unit = "%";
    colorArray = ["#F51720", "#1a4ae8", "#F8D210"];
  } else if (title === "Fats") {
    dataArray = [
      fats[1].quantity.toFixed(2),
      fats[2].quantity.toFixed(2),
      fats[3].quantity.toFixed(2),
    ];
    labelsArray = [fats[1].label, fats[2].label, fats[3].label];
    unit = fats[0].unit;
    colorArray = ["#dbd165", "#86bbbf", "#d98d5b"];
  }

  //   Data Object for chart
  const data = (canvas) => {
    canvas.parentNode.style.height = "100%";
    canvas.parentNode.style.width = "100%";

    return {
      labels: labelsArray,
      datasets: [
        {
          label: "%",
          data: dataArray,
          backgroundColor: colorArray,
          borderColor: ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff"],
          borderWidth: 1,
        },
      ],
    };
  };

  // Define options object
  const options = {
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return (
            data.labels[tooltipItem.index] +
            ": " +
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index] +
            unit
          );
        },
      },
    },

    legend: {
      position: "right",
      display: true,
      labels: {
        color: "rgb(255, 99, 132)",
      },
    },

    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="breakdown-pie-chart">
      <div className="breakdown-chart-header">
        <span className="breakdown-chart-title">{title} Breakdown</span>
        {/* <br />
        <span style={{ fontSize: "75%" }}>
          (per {servingDetails.servingSize} {servingDetails.servingMeasure})
        </span> */}
      </div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default BreakdownChart;
